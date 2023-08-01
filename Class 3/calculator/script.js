function calculateResult(){
    let n1 = Number(document.getElementById("input-n1").value);
    let n2 = Number(document.getElementById("input-n2").value);
    let operation = document.getElementById("operation-type").value;
    let result;
    if(operation == "+") result = n1 + n2;
    else if(operation == "-") result = n1 - n2;
    else if(operation == "*") result = n1 * n2;
    else if(operation == "/") {
        if(n2 == 0) result = "Division by 0, go sleep";
        else result = n1 / n2;
    }
    else result = "Invalid operation, go sleep";

    document.getElementById("result").innerHTML += `
        <p>${n1} ${operation} ${n2} = ${result} </p>
    `;
}