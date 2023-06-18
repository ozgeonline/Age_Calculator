const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

btnEl.addEventListener("click",calculateAge);

function calculateAge(){
    const birthdayValue = birthdayEl.value;

    if(birthdayValue === ""){
        alert("Please enter your birthday.");
    }else{
        let age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old `;
        
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    const day = currentDate.getDay() - birthdayDate.getDate();

    if(month < 0 || (month === 0 && currentDate.getDate()< birthdayDate.getDate())){
        age--;
    }
    return age;
}
