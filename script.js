// initial grid generation

const grid = document.querySelector("#grid");
const btn = document.querySelector("button");

for(let i = 0; i < 16; i++)
{
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < 16; j++)
    {
        const col = document.createElement("div");
        col.classList.add("box");
        row.appendChild(col);
        col.addEventListener("mouseenter", () => {
            col.style.backgroundColor = "gray";
        })
    }
    grid.appendChild(row);
}

btn.addEventListener("click", () => {
    let width = prompt("Please provide a value between 1 and 100 as the number of squares per side of the grid.");
    while(Number(width) === NaN || Number(width) <= 0 || Number(width) > 100)
    {
        width = prompt("Please provide a valid value.");
    }
    while(grid.firstChild)
    {
        grid.removeChild(grid.lastChild);
    }
    for(let i = 0; i < width; i++)
{
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < width; j++)
    {
        const col = document.createElement("div");
        col.classList.add("box");
        col.style.width = 32/width + "vw";
        col.style.width /= width;
        col.style.height = col.style.width;
        row.appendChild(col);
        col.addEventListener("mouseenter", () => {
            col.style.backgroundColor = "gray";
        })
    }
    grid.appendChild(row);
}
})