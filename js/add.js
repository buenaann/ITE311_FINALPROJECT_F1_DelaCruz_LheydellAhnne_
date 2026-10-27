(function () {
  const s = document.getElementById('add-section');
  s.innerHTML = '<input id="c-name" placeholder="Full name"><input id="c-phone" placeholder="Phone number"><select id="c-group"><option>Family</option><option>Friends</option><option>School</option><option>Work</option></select><button id="c-add" class="btn">Add</button>';
  document.getElementById('c-add').onclick = () => {
    App.items.push({
      id: Date.now(),
      name: document.getElementById('c-name').value,
      phone: document.getElementById('c-phone').value,
      group: document.getElementById('c-group').value,
      fav: false
    });
    App.save(); App.render();
  };
})();