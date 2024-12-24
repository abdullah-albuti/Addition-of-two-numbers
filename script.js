

run=()=>{

    var  num1 = Number(document.getElementById('number1').value);

    var num2 = Number(document.getElementById('number2').value);
    var Sumd  = document.getElementById('sum');
    
    var s = num1+num2;
    Sumd.innerHTML = s+" :الناتج";
    
  }