(function () {
  const s = document.getElementById('filter-section');
  s.innerHTML = '<select id="f-group"><option value="all">All groups</option><option>Family</option><option>Friends</option><option>School</option><option>Work</option></select>';
  let group = 'all';
  App.filters.push(c => group === 'all' || c.group === group);
  document.getElementById('f-group').onchange = e => { group = e.target.value; App.render(); };
})();