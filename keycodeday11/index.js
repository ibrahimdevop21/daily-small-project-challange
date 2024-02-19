const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div id="eventKey" class="key">
    ${e.key === ' ' ? 'Space' : e.key}
    <small>event.key</small>
  </div>
  <div id="keyCode" class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
  </div>
  <div id="code" class="key">
    ${e.code}
    <small>event.code</small>
  </div>`;
});
