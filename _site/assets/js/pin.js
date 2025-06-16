const pinnedKey = 'pinnedItems';
let originalOrder = {};

function getPinned() {
  return JSON.parse(localStorage.getItem(pinnedKey)) || [];
}

function savePinned(pinned) {
  localStorage.setItem(pinnedKey, JSON.stringify(pinned));
}

function togglePin(id) {
  let pinned = getPinned();
  if (pinned.includes(id)) {
    pinned = pinned.filter(i => i !== id);
  } else {
    pinned.push(id);
  }
  savePinned(pinned);
  renderPins();
}

function attachPinListeners() {
  document.querySelectorAll('#item-list button.menu-item').forEach(button => {
    button.onclick = () => {
      const li = button.closest('li');
      const id = li.dataset.id;
      if (!id) return;
      togglePin(id);
    };
  });
}

function renderPins() {
  const pinned = getPinned();
  const list = document.querySelector('#item-list');

  const pinnedItems = [];
  const unpinnedItems = [];

  list.querySelectorAll('li').forEach(li => {
    const id = li.dataset.id;
    if (!id) return;

    const button = li.querySelector('button.menu-item');
    const details = li.querySelector('details');
    const isPinned = pinned.includes(id);

    if (button) {
      button.style.backgroundColor = isPinned ? '#ffd700' : '';
      button.style.color = isPinned ? '#000' : '';
    }

    if (isPinned) {
      pinnedItems.push(li);
    } else {
      unpinnedItems.push(li);
    }
  });

  // Sort pinned alphabetically by text content
  pinnedItems.sort((a, b) => {
    const textA = a.textContent.trim().toLowerCase();
    const textB = b.textContent.trim().toLowerCase();
    return textA.localeCompare(textB);
  });

  // Sort unpinned by original order
  unpinnedItems.sort((a, b) => {
    const idA = a.dataset.id;
    const idB = b.dataset.id;
    return originalOrder[idA] - originalOrder[idB];
  });

  // Re-render the list
  list.innerHTML = '';
  [...pinnedItems, ...unpinnedItems].forEach(item => list.appendChild(item));

  attachPinListeners();

  // Show or hide the "Unpin All" button
  const unpinButton = document.getElementById('unpinAllButton');
  unpinButton.style.display = pinned.length > 0 ? 'block' : 'none';
}

function unpinAll() {
  savePinned([]);
  renderPins();
}

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('#item-list li');
  listItems.forEach((li, index) => {
    const id = li.dataset.id;
    if (id) {
      originalOrder[id] = index;
    }
  });

  renderPins();
});
