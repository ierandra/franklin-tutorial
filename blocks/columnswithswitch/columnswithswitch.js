export default function decorate(block) {
  let rowElements = [];
  block.querySelectorAll(':scope>div').forEach((row, j) => {
    const rowDiv = document.createElement('div');
    rowDiv.id = `row${j}`;
    rowDiv.className = 'rowdiv outscope';
    block.appendChild(rowDiv);
    rowElements.push(rowDiv)
    if (row.firstElementChild.children) {
      const cols = [...row.children];
      block.classList.add(`columns-${j}-cols`);
      cols.forEach((e, i)=> {
        const columnDiv = document.createElement('div');
        columnDiv.id = `column${i}`;
        rowDiv.appendChild(columnDiv);
        columnDiv.appendChild(e);
        });
    }});

    const olElement = document.createElement('ol');
    block.appendChild(olElement);

    let liElements = [];
    for(let k =0; k <3; k++){
      const liElement = document.createElement('li');
      liElement.id = `lielement${k}`;
      liElement.className = 'notselected';
      olElement.appendChild(liElement);
      liElements.push(liElement);
    }

    liElements[0].className = 'selected';
    rowElements[0].className = 'inscope';
    doStomething(liElements, rowElements);

}

function doStomething(liElements, rows) {
  liElements.forEach(function (li, i) {
    li.addEventListener('click', function() {
      liElements.forEach(newli => {newli.className = 'notselected'});
      rows.forEach(row => {row.className='rowdiv outscope'});
      li.className = 'selected';
      rows[i].className = 'inscope';
    });
  });

}