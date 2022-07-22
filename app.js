function main(){

    const height = parseFloat(document.getElementById('Height').value);
    const weight = parseFloat(document.getElementById('Weight').value);

    let imc = weight / (height/100)**2;
    imc = imc.toFixed(2);
    //the formula is imc = weight/(height*height)
    //  IMC In French which means “Indice de Masse Corporelle”, is a measure used to evaluate body weight for adults and to evaluate the health risks associated with being overweight or underweight.

    if(imc > 0 && imc <= 15){
        document.getElementById('output').innerHTML = 
        `Your BMI is: <b>${imc}</b> </br> Your weight is <span>very severely underweight</span>
        `;
    }
    else if(imc > 15 && imc <= 16){
        document.getElementById('output').innerHTML = 
        `Your BMI is: <b>${imc}</b> </br> Your weight is <span>severely underweight</span>
        `;
    }
    else if(imc > 16 && imc <= 18.5){
        document.getElementById('output').innerHTML = 
        `Your BMI is: <b>${imc}</b> </br> Your weight is <span>underweight</span>
        `;
    }
    else if(imc > 18.5 && imc <= 25){
        document.getElementById('output').innerHTML = 
        `Your BMI is: <b>${imc}</b> </br> Your weight is <span>Normal(healthy weight)</span>
        `;
    }
    else if(imc > 25 && imc <= 30){
        document.getElementById('output').innerHTML = 
        `Your BMI is: <b>${imc}</b> </br> Your weight is <span>over weight</span>
        `;
    }
    else if(imc > 30 && imc <= 35){
        document.getElementById('output').innerHTML = 
        `Your BMI is: <b>${imc}</b> </br> Your weight is <span>obese class 1</span>
        `;
    }
    else if(imc > 35 && imc <= 40){
        document.getElementById('output').innerHTML = 
        `Your BMI is: <b>{imc}</b> </br> Your weight is <span>obese class 2</span>
        `;
    }
    else if(imc > 40 && imc <= 45){
        document.getElementById('output').innerHTML = 
        `Your BMI is: <b>${imc}</b> </br> Your weight is <span>obese class 3</span>
        `;
    }
    else if(imc > 45 && imc <= 50){
        document.getElementById('output').innerHTML = 
        `Your BMI is: <b>${imc}</b> </br> Your weight is <span>obese class 4</span>
        `;
    }
    else if(imc > 50 && imc <= 60){
        document.getElementById('output').innerHTML = 
        `Your BMI is: <b>${imc}</b> </br> Your weight is <span>obese class 5</span>
        `;
    }
    else if(imc > 60){
        document.getElementById('output').innerHTML = 
        `Your BMI is: <b>${imc}</b> </br> Your weight is <span>obese class 6</span>
        `;
    }
    //showing result box
    document.getElementById('modal').style.display = 'block';
    document.getElementById('close').onclick = function() {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('myform').reset(); 
    }
}