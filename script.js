let pixelsInput = 2;

/// adds divs
function addPixel() {
    pixelsArea = pixelsInput * pixelsInput;
    for (i = 0; i < pixelsArea; i++) {
        const container = document.querySelector("#container");
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
    }
}

/// expands the grid
function expandGrid() {
    pixelsInput = prompt ("Enter pixels, 2-100.");
    if (pixelsInput >= 2 || pixelsInput <= 100) {
    document.querySelector("#container").style.gridTemplateColumns = `repeat(${pixelsInput}, 1fr)`;
    document.querySelector("#container").style.gridTemplateRows = `repeat(${pixelsInput}, 1fr)`;
    addPixel();
    }
    else {
        alert("Please enter a valid number (2 - 100).");
    }
}


/// event listeners for buttons
const btn = document.querySelector("#btn");
btn.addEventListener("click", addPixel);

const expand = document.querySelector("#expand");
expand.addEventListener("click", expandGrid);


