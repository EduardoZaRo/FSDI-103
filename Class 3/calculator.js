function calculate(){
    let num1 = Number(prompt("Enter 1st number: "));
    let num2 = Number(prompt("Enter 2nd number: "));
    let option = prompt("Enter the option ( + - * /): ");
    let result = "Nothing bruh";
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("result").innerHTML = `Invalid numbers, go sleep`;
        return;
    }
    if(option == "+"){
        result = num1 + num2;
    }
    if(option == "-"){
        result = num1 - num2;
    }
    if(option == "*"){
        result = num1 * num2;
    }
    if(option == "/"){
        if(num2 == 0){
            document.getElementById("result").innerHTML += `Division by 0, go sleep`;
            return;
        }
        else result = num1 / num2;
    }
    if(result != "Nothing bruh"){
        document.getElementById("result").innerHTML = `
            <p>${num1} ${option} ${num2} = ${result}</p>
        `;
    }
    else{
        document.getElementById("result").innerHTML = `Not a valid  operation, go sleep`;
    }

}