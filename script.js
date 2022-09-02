const container = document.querySelector("#container");

let gridSize = 16;


for(i=1;i<=gridSize*gridSize;i++){
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.setAttribute("id","pixel")
    container.appendChild(pixel);
}

const pixels = document.querySelectorAll("#pixel");


pixels.forEach((pixel) => {pixel.addEventListener("mouseover",() => {
    pixel.classList.add("hover"); //Mouseover effect
})});

pixels.forEach((pixel) => {pixel.addEventListener("mouseleave",() => {
    if(pixel.classList.contains('hover'))  //Remove mouseover effect
    pixel.classList.remove('hover');
})});

let isDrawing = false; //isDrawing variable

pixels.forEach((pixel) => {pixel.addEventListener("mousedown",() => {
    pixel.classList.add('onclick');  //Add color on click
    isDrawing = true;
})});

pixels.forEach((pixel) => {pixel.addEventListener("mousemove",() => {
    if(isDrawing) pixel.classList.add('onclick');  //Add color on drag
})});

pixels.forEach((pixel) => {pixel.addEventListener("mouseup",() => {
    isDrawing = false;  //Stop drawing on mouse up
})});

const eraseButton = document.getElementById("eraseButton");
eraseButton.addEventListener("click",() => {
    pixels.forEach((pixel) => {
        if(pixel.classList.contains('onclick'))  //erase 
        pixel.classList.remove('onclick');
    });
});