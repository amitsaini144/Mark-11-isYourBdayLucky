const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const resultBox = document.querySelector("#result-box");

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        resultBox.innerText = "Your Birthday Is Lucky";
    }else{
        resultBox.innerText = "Your Birthday Is Not Lucky";
    }
}

function checkBirthdayLuck (){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(dob&&luckyNumber.value){
    compareValues(sum,luckyNumber.value);}
    else{
    resultBox.innerText = "Please fill both inputs";    
    }
}

function calculateSum(dob){
     dob = dob.replaceAll("-","");
     let sum=0;
     for( let i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
     }
     return sum;
}

checkNumber.addEventListener("click",checkBirthdayLuck )