let calculator = (function(){

    inputBox.value = '';

    let click1 = document.querySelector('#num1');
    click1.addEventListener('click', disp1);

    function disp1(){
        if (inputBox && inputBox.value.length < 10){
            inputBox.value = inputBox.value + 1;
        }
        return inputBox.value
    }

    let click2 = document.querySelector('#num2');
    click2.addEventListener('click', disp2);

    function disp2(){
        console.log("2")
        inputBox.value = 2
    }

return {
    disp1: disp1,
    disp2: disp2
}

})();

console.log(calculator.disp1())