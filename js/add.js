(function () {
  const s = document.getElementById('add-section');
  s.innerHTML = '<input id="c-name" placeholder="Full name"><input id="c-phone" placeholder="Phone number"><select id="c-group"><option>Family</option><option>Friends</option><option>School</option><option>Work</option></select><button id="c-add" class="btn">Add</button>';
  const nameEl = document.getElementById('c-name');
  const phoneEl = document.getElementById('c-phone');
  function addContact() {
    const name = nameEl.value.trim();
    const phone = phoneEl.value.trim();
    if (!name) { alert('Please enter a name.'); return; }
    if (!/^[0-9+\-\s]{7,15}$/.test(phone)) { alert('Enter a valid phone number (7-15 digits).'); return; }
    if (App.items.some(c => c.phone === phone)) { alert('This number is already saved.'); return; }
    App.items.push({ id: Date.now(), name: name, phone: phone, group: document.getElementById('c-group').value, fav: false });
    nameEl.value = ''; phoneEl.value = '';
    App.save(); App.render();
  }
  document.getElementById('c-add').onclick = addContact;
  [nameEl, phoneEl].forEach(el => el.addEventListener('keydown', e => { if (e.key === 'Enter') addContact(); }));
})();