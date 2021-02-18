let pixelsInput = 2;
let pixelsArea;
let colorSelection = document.getElementById("color-picker").value;

addPixel();

function updateColor() {

}

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

    /// helps prevents mobile devices from accidentally scrolling during use
    this.container.addEventListener("touchstart", function(e) {
        if (e.touches.length == 1) {
            e.preventDefault();
        }
    });

    /// allows mobile gestures to work (adds black class on mobile/tablet)
    this.container.addEventListener("touchmove", function(e) {
        var touch = e.touches[0];
        var selected = document.elementFromPoint(touch.clientX, touch.clientY);
        if (selected) {
        selected.classList.add("black");
        }
    });

    /// adds black class on pc/laptop
    for (let i = 0; i < black.length; i++) {
        black[i].addEventListener("mouseover", function() {
            black[i].style.cssText = `background-color: ${colorSelection}`;
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