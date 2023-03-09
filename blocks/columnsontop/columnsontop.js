export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  cols.forEach((e, i)=> {
      const div = document.createElement('div');
      div.id = 'column'+i;
      block.appendChild(div);
      div.appendChild(e);
  });
}
