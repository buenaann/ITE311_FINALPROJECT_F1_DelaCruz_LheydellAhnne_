App.actions.push((li, c) => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = c.fav ? 'Unfavorite' : 'Favorite';
  btn.onclick = () => { c.fav = !c.fav; App.save(); App.render(); };
  li.appendChild(btn);
});
App.actions.push((li, c) => {
  const del = document.createElement('button');
  del.className = 'btn danger';
  del.textContent = 'Delete';
  del.onclick = () => {
    if (!confirm('Delete this contact?')) return;
    App.items = App.items.filter(x => x.id !== c.id);
    App.save(); App.render();
  };
  li.appendChild(del);
});
App.summaries.push((shown, box) => {
  const favs = App.items.filter(c => c.fav).length;
  box.textContent = 'Total contacts: ' + App.items.length + ' | Favorites: ' + favs;
});
App.render();