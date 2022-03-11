function display() {
    document.write("Hello World");
}

function add(a, b) {

    const c = a + b;
    document.write("Total of a & b: " + c);
}

function area(length, width) {

    const area = length * width;
    document.write("Area of rectangle: " + area);

    document.write("<br> <br>");

}

function back() {
    const button = document.createElement("button");
    button.innerHTML = "Return to Main Page";
    button.onclick = function () {
        window.location.href = "../JS/start.html";
    }
    document.body.appendChild(button);
}
