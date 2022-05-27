
let container = document.querySelector(".content");
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${10}, 1fr)`;
//container.style.gridTemplateRows = `repeat(${10}, 1fr)`;
container.style.width = "100px";
container.style.height = "100px";
container.style.gridGap = "4px"



for (let i = 0; i<100; i++){
  let div = document.createElement('div');
  div.className = "grid";
  div.style.background = "black"
  div.style.width = '30px';
  div.style.height = '30px';
  container.appendChild(div)
}


let grid = document.querySelectorAll('.grid');

for (let i = 0; i < grid.length;i++){
  grid[i].addEventListener('mouseover',(e)=>{
    e.currentTarget.style.background = "pink";
  })
}

