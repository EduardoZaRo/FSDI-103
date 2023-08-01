function getUserAge(){
    let userBirthYear = Number(prompt("Enter user birth year: "));
    let todayDate = new Date();
    let currentYear = todayDate.getFullYear();
    let age  = currentYear - userBirthYear;
    displayAge(age);
    errorMessage("404", "Page not found")
    // ageVerifications(userBirthYear, age);
}

function displayAge(age){
    let ageElement = document.getElementById("user-age");
    ageElement.textContent = `The user is ${age} years old`;
}


function errorMessage(title, message){
    let errorElement = document.getElementById("error-message");
    errorElement.innerHTML = `
        <h2 style="color:red;text-transform:uppercase;">${title}</h2>
        <h5>${message}</h5>
    `;
}
