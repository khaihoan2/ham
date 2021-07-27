function sum(number) {
    let result = number * number;
    return result;
}

function calculate() {
    let input = parseInt(document.getElementById("input").value);
    let result = sum(input);
    document.getElementById('result').innerHTML= result;
}