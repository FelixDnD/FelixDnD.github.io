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
  document.querySelectorAll('#item-list li').forEach(li => {
    const id = li.dataset.id;
    const button = li.querySelector('button.menu-item');
    const details = li.querySelector('details');

    if (button) {
      const isPinned = pinned.includes(id);
      button.style.backgroundColor = isPinned ? '#ffd700' : '';
      button.style.color = isPinned ? '#000' : '';
      if (isPinned && details) {
        details.setAttribute('open', '');
      } else if (details) {
        details.removeAttribute('open');
      }
    }
  });
}



  document.addEventListener('DOMContentLoaded', renderPins);