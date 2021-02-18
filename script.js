let pixelsArea;
var colorSelection = document.getElementById("color").value;
var gridSize = document.getElementById("gridSize").value;

document.getElementById("color").onchange = function() {
    colorSelection = this.value;
}

document.getElementById("gridSize").onchange = function() {
    gridSize = this.value;
    resetPixels();
}

resetPixels();

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
    document.querySelector("#container").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.querySelector("#container").style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    addPixel();
    }

    /// adds divs
function addPixel() {
    pixelsArea = gridSize * gridSize;
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
            selected.style.cssText = `background-color: ${colorSelection}`;
        }
    });
    

    /// adds selected color on pc/laptop
    for (let i = 0; i < black.length; i++) {
        black[i].addEventListener("mouseover", function() {
            black[i].style.cssText = `background-color: ${colorSelection}`;
        });
    }
}