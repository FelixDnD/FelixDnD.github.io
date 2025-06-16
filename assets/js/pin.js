  const pinnedKey = 'pinnedItems';

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

function renderPins() {
  const pinned = getPinned();
  const list = document.querySelector('#item-list');
  
  // Separate pinned and unpinned items
  const pinnedItems = [];
  const unpinnedItems = [];

  list.querySelectorAll('li').forEach(li => {
    const id = li.dataset.id;
    const button = li.querySelector('button.menu-item');
    const details = li.querySelector('details');

    const isPinned = pinned.includes(id);

    if (button) {
      button.style.backgroundColor = isPinned ? '#ffd700' : '';
      button.style.color = isPinned ? '#000' : '';
    }

    if (details) {
      if (isPinned) {
        details.setAttribute('open', '');
      } else {
        details.removeAttribute('open');
      }
    }

    if (isPinned) {
      pinnedItems.push(li);
    } else {
      unpinnedItems.push(li);
    }
  });

  // Clear the list and append pinned items first, then unpinned
  list.innerHTML = '';
  pinnedItems.forEach(item => list.appendChild(item));
  unpinnedItems.forEach(item => list.appendChild(item));
}




  document.addEventListener('DOMContentLoaded', renderPins);