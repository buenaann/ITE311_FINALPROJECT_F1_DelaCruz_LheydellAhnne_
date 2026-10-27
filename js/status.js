App.actions.push((li, c) => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = c.fav ? 'Unfavorite' : 'Favorite';
  btn.onclick = () => { c.fav = !c.fav; App.save(); App.render(); };
  li.appendChild(btn);
});
App.render();