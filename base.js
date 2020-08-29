let length;
let width;
let depth;
let total;
let waste;
let calc;
let grandTotal;

function volume() {
    let ft3 = document.getElementById("cubic_ft");
    let yd3 = document.getElementById("cubic_yd");
    let total = document.getElementById("total");
    let waste = document.getElementById("waste");
    let grandTotal = document.getElementById("grandTotal");
    let length = document.getElementById("length");
    let width = document.getElementById("width");
    let depth = document.getElementById("depth");
    let cubicfeet = (length.value * width.value * (depth.value / 12)).toFixed(2);
    let cubicyard = (length.value * width.value * (depth.value / 12) / 27).toFixed(2);
    let overage = (cubicyard * .1).toFixed(2);
        
    // 'toFixed(#)' specifies the maximum decimal spaces
    ft3.innerHTML = cubicfeet + " cubic feet";
    yd3.innerHTML = cubicyard + " cubic yards";
    total.innerHTML = yd3.innerHTML;
    waste.innerHTML = overage + " waste";
    grandTotal.innerHTML = (+overage + +cubicyard).toFixed(2) + " cubic yards";
    // the extra '+' signs are converting the string value into numbers. because without them, it would concatenate the strings instead of adding the numbers as intended

    cubic_ft.style.display = "block";
    cubic_yd.style.display = "block";
    total.style.display = "block";
    waste.style.display = "block";
    grandTotal.style.display = "block";
}




