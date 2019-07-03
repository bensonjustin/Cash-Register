let calculator = (function(){

    let holdOp = '';
    let lastValue = 0;
    let currentValue = 0;
    let balValue = 0;

    let clickNum = document.querySelectorAll('.num');
    for (let i = 0; i<clickNum.length; i++){
    clickNum[i].addEventListener('click', dispNum);
    function dispNum(){
        if (inputBox.textContent.length < 10 && !holdOp && !inputBox.textContent.includes('$')){
            inputBox.textContent = inputBox.textContent + document.getElementsByClassName('num')[i].innerHTML;
            lastValue = inputBox.textContent
            console.log('lastValue ' + lastValue)
        }else if (inputBox.textContent.length < 10 && lastValue || lastValue === 0 && holdOp !== 'equal' && !inputBox.textContent.includes('$')){
            inputBox.textContent = inputBox.textContent + document.getElementsByClassName('num')[i].innerHTML;
            currentValue = inputBox.textContent;
            console.log('currentValue ' + currentValue)
        }
    }
    }

    let click0 = document.querySelector('#num0');
    click0.addEventListener('click', disp0);

    function disp0(){
        if (inputBox.textContent.length === 0 && !inputBox.textContent.includes('$')){
            inputBox.textContent = num0.innerHTML;
            lastValue = inputBox.textContent
            console.log('lastValue ' + lastValue)
        }else if (inputBox.textContent.length < 10 && !holdOp && !inputBox.textContent.includes('$')){
            inputBox.textContent = inputBox.textContent + num0.innerHTML;
            lastValue = inputBox.textContent
            console.log('lastValue ' + lastValue)
        }else if (inputBox.textContent.length < 10 && lastValue && !inputBox.textContent.includes('$')){
            inputBox.textContent = inputBox.textContent + num0.innerHTML;
            currentValue = inputBox.textContent;
            console.log('currentValue ' + currentValue)
        }
    }

    let click00 = document.querySelector('#num00');
    click00.addEventListener('click', disp00);

    function disp00(){
        if (inputBox.textContent.length === 0){

        }else if (inputBox.textContent.length < 9 && !holdOp && !inputBox.textContent.includes('$')){
            inputBox.textContent = inputBox.textContent + num00.innerHTML;
            lastValue = inputBox.textContent
            console.log('lastValue ' + lastValue)
        }else if (inputBox.textContent.length < 9 && lastValue && !inputBox.textContent.includes('$')){
            inputBox.textContent = inputBox.textContent + num00.innerHTML;
            currentValue = inputBox.textContent;
            console.log('currentValue ' + currentValue)
        }
    }

    let clickDecimal = document.querySelector('#decimal');
    clickDecimal.addEventListener('click', dispDecimal);

    function dispDecimal(){
        if (inputBox.textContent.length === 0){
            inputBox.textContent = 0 + '.';
        }else if (inputBox.textContent === '0' || inputBox.textContent.length > 0 && inputBox.textContent.length < 9 && !inputBox.textContent.includes('.')){
            inputBox.textContent = inputBox.textContent + '.';
        }
    }

    function calcOp(){
        inputBox.textContent = '';
        if (holdOp === 'add'){
            lastValue = Number(lastValue) + Number(currentValue)
            console.log("lastValue " + lastValue)
        }else if (holdOp === 'subtract'){
            lastValue = Number(lastValue) - Number(currentValue)
            console.log("lastValue " + lastValue)
        }else if (holdOp === 'multiply'){
            lastValue = Number(lastValue) * Number(currentValue)
            console.log("lastValue " + lastValue)
        }
        else if (holdOp === 'divide'){
            lastValue = Number(lastValue) / Number(currentValue)
            console.log("lastValue " + lastValue)
        }
    }

    let clickAdd = document.querySelector('#add');
    clickAdd.addEventListener('click', dispAdd);
        
    function dispAdd(){
        calcOp();
        if (lastValue){
            holdOp = 'add';
            console.log(holdOp)
        }
    }

    let clickSubtract = document.querySelector('#subtract');
    clickSubtract.addEventListener('click', dispSubtract);

    function dispSubtract(){
        calcOp();
        if (lastValue){
            holdOp = 'subtract';
            console.log(holdOp)
        }
    }

    let clickMultiply = document.querySelector('#multiply');
    clickMultiply.addEventListener('click', dispMultiply);

    function dispMultiply(){
        calcOp();
        if (lastValue){
            holdOp = 'multiply';
            console.log(holdOp)
        }
    }

    let clickDivide = document.querySelector('#divide');
    clickDivide.addEventListener('click', dispDivide);

    function dispDivide(){
        calcOp();
        if (lastValue){
            holdOp = 'divide';
            console.log(holdOp)
        }
    }

    let clickEqual = document.querySelector('#equal');
    clickEqual.addEventListener('click', dispEqual);

    function dispEqual(){
        if (holdOp === 'add'){
            inputBox.textContent = Number(lastValue) + Number(currentValue);
            console.log(holdOp)
        }else if (holdOp === 'subtract'){
            inputBox.textContent = Number(lastValue) - Number(currentValue);
            console.log(holdOp)
        }else if (holdOp === 'multiply'){
            inputBox.textContent = Number(lastValue) * Number(currentValue);
            console.log(holdOp)
        }
        else if (holdOp === 'divide'){
            inputBox.textContent = Number(lastValue) / Number(currentValue);
            console.log(holdOp)
        }
        if (lastValue && currentValue){
            holdOp = 'equal';
            lastValue = inputBox.textContent;
            console.log(holdOp)
        }
    }

    let clickClear = document.querySelector('#clear');
    clickClear.addEventListener('click', dispClear);

    function dispClear(){
        inputBox.textContent = '';
        lastValue = 0;
        currentValue = 0;
        holdOp = '';
    }

    let clickGetBal = document.querySelector('#getbal');
    clickGetBal.addEventListener('click', dispGetBal);

    let getBalDisp = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    function dispGetBal(){
        inputBox.textContent = getBalDisp.format(balValue);
    }

    let clickDeposit = document.querySelector('#deposit');
    clickDeposit.addEventListener('click', dispDeposit);

    function dispDeposit(){
        balValue = Number(balValue) + Number(inputBox.textContent);
        console.log(balValue)
        dispClear();
    }

    let clickWithdraw = document.querySelector('#withdraw');
    clickWithdraw.addEventListener('click', dispWithdraw);

    function dispWithdraw(){
        if (balValue < inputBox.textContent){
            window.alert('Not enough funds');
        }else{
            balValue = Number(balValue) - Number(inputBox.textContent);
            console.log(balValue)
            dispClear();
        }
    }

    let clickItem = document.querySelectorAll('.menuItem');
    for (let i = 0; i<clickItem.length; i++){
    clickItem[i].addEventListener('click', dispItem);
    function dispItem(){
            inputBox.textContent = document.querySelector(".menuItem").childNodes[5].textContent;
            lastValue = parseFloat(inputBox.textContent.substring(1));
            console.log(inputBox.textContent)
            console.log('lastValue ' + lastValue)
        
        // else if (inputBox.textContent.length < 10 && lastValue || lastValue === 0 && holdOp !== 'equal'){
        //     inputBox.textContent = inputBox.textContent + document.getElementsByClassName('menuItem')[i].innerHTML;
        //     currentValue = inputBox.textContent;
        //     console.log('currentValue ' + currentValue)
        // }
    }
    }

return {
    dispNum: dispNum,
    disp0: disp0,
    disp00: disp00,
    dispDecimal: dispDecimal,
    calcOp: calcOp,
    dispAdd: dispAdd,
    dispSubtract: dispSubtract,
    dispMultiply: dispMultiply,
    dispDivide: dispDivide,
    dispEqual: dispEqual,
    dispClear: dispClear,
    dispGetBal: dispGetBal,
    dispDeposit: dispDeposit,
    dispWithdraw: dispWithdraw
}

})();