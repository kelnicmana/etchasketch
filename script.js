let pixelsInput = 2;
let pixelsArea;

addPixel();

/// adds divs
function addPixel() {
    pixelsArea = pixelsInput * pixelsInput;
    for (i = 0; i < pixelsArea; i++) {
        let container = document.querySelector("#container");
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
    }
    let black = document.querySelectorAll(".pixel");

    for (let i = 0; i < black.length; i++) {
        black[i].addEventListener("mouseover", function() {
            black[i].classList.add("black");
        });
    }
}

/// resets/clears divs before adding more
function resetPixels() {
    for (i = 0; i < pixelsArea; i++) {
        let clear = document.querySelector(".pixel");
        clear.remove();
    }
    expandGrid();
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

const expand = document.querySelector("#expand");
expand.addEventListener("click", resetPixels);