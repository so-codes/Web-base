function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    document.write("Factorial of " + num + " is " + fact);
    return fact;
}

function fibonacci(num) {
    var fib = [0, 1];
    for (var i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.write("Fibonacci of " + num + " is " + fib[num]);

    document.write("<br> <br>");

    document.write("Fibonacci Series: ");
    for (var i = 0; i <= num; i++) {
        document.write(fib[i] + " ");
    }
    return fib;
}

function back() {
    const button = document.createElement("button");
    button.innerHTML = "Return to Main Page";
    button.onclick = function () {
        window.location.href = "/Mix/JS/js base/fact.html";
    }
    document.body.appendChild(button);
}
