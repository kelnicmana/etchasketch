let pixelsArea;
let colorSelection = document.getElementById("color").value;
let randomColors;
let gridSize = document.getElementById("gridSize").value;
let rainbow = false;
const checkbox = document.querySelector("input[name=rainbowCheck]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    rainbow = true;
  }
  else {
    rainbow = false;
  }
});

function rainbowToggle() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    randomColors = `rgb(${r},${g},${b})`;
}

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
        const clear = document.querySelector(".pixel");
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
    container.addEventListener("touchstart", function(e) {
        if (e.touches.length == 1) {
            e.preventDefault();
        }
    });

    /// allows mobile gestures to work (adds black class on mobile/tablet)
    
    container.addEventListener("touchmove", function(e) {
        let touch = e.touches[0];
        let selected = document.elementFromPoint(touch.clientX, touch.clientY);
        if (selected) {
            if (rainbow === true) {
                rainbowToggle();
                selected.style.cssText = `background-color: ${randomColors}`;
            }
            else {
            selected.style.cssText = `background-color: ${colorSelection}`;
            }
        }
    });
    
    /// adds selected color on pc/laptop
    for (let i = 0; i < black.length; i++) {
        black[i].addEventListener("mouseover", function() {
            if (rainbow === true) {
                rainbowToggle();
                black[i].style.cssText = `background-color: ${randomColors}`;
            }
            else {
                black[i].style.cssText = `background-color: ${colorSelection}`;
            }
        });
    }
}