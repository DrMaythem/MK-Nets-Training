// The difference between innerHTML and innerText
// With innerHTML we can change a whole HTML element with another
//document.querySelector("h1").innerHTML = "<h6>LLL</h6>"

// With innerText we can change the contents of an HTML element
// document.querySelector("h1").innerText = "<h4>LLL</h4>"

// document.querySelectorAll("h1")[0].innerHTML = "<h6>LLL</h6><h5>LLL</h5><h4>LLL</h4><h3>LLL</h3><h2>LLL</h2><h1>LLL</h1>"

let newHTML = "";
for (let i = 1; i < 7; i++) {
    newHTML = newHTML + ("<h" + i + ">LLL</h" + i + ">");
    // alert(newHTML);
}
document.querySelectorAll("h1")[0].innerHTML = newHTML;

// set Attribute
document.querySelector("img").setAttribute("src", "./Images/Tick.png");

// Math Library: Random Function
let X;
for (let i = 0; i < 10; i++) {
    X = Math.floor(Math.random() * 6) + 1;
    // alert(X);
}

document.querySelector("h1").addEventListener("click", function () {
    document.querySelector("img").setAttribute("src", "./Images/Heart.png")
}
)