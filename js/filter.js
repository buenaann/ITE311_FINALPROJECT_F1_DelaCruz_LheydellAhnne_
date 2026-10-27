(function () {
  const s = document.getElementById('filter-section');
  s.innerHTML = '<input id="f-q" placeholder="Search name or number..."><select id="f-group"><option value="all">All groups</option><option>Family</option><option>Friends</option><option>School</option><option>Work</option></select>';
  let group = 'all', q = '';
  App.filters.push(c => group === 'all' || c.group === group);
  App.filters.push(c => (c.name + ' ' + c.phone).toLowerCase().includes(q));
  document.getElementById('f-group').onchange = e => { group = e.target.value; App.render(); };
  document.getElementById('f-q').oninput = e => { q = e.target.value.toLowerCase(); App.render(); };
})();