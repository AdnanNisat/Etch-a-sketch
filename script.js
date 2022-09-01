const container = document.querySelector("#container");

for(i=1;i<=16*16;i++){
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

pixels.forEach((pixel) => {pixel.addEventListener("click",() => {
    pixel.classList.add('onclick');  //Add color on click
})});