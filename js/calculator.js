let calculator = (function(){

    let holdOp = '';
    let lastValue = 0;
    let currentValue = 0;

    let clickNum = document.querySelectorAll('.num');
    for (let i = 0; i<clickNum.length; i++){
    clickNum[i].addEventListener('click', dispNum);
    function dispNum(){
        if (inputBox.textContent.length < 10 && inputBox.textContent !== '0' && lastValue != inputBox.textContent && currentValue != inputBox.textContent){
            inputBox.textContent = inputBox.textContent + document.getElementsByClassName('num')[i].innerHTML;
        }else if (lastValue == inputBox.textContent || currentValue == inputBox.textContent){
            inputBox.textContent = '';
            inputBox.textContent = inputBox.textContent + document.getElementsByClassName('num')[i].innerHTML;
        }
    }
    }

    let click0 = document.querySelector('#num0');
    click0.addEventListener('click', disp0);

    function disp0(){
        if (inputBox.textContent.length === 0){
            inputBox.textContent = num0.innerHTML;
        }else if (inputBox.textContent.length < 10 && inputBox.textContent !== '0'){
            inputBox.textContent = inputBox.textContent + num0.innerHTML;
        }
    }

    let click00 = document.querySelector('#num00');
    click00.addEventListener('click', disp00);

    function disp00(){
        if (inputBox.textContent.length === 0){

        }else if (inputBox.textContent.length < 9 && inputBox.textContent !== '0'){
            inputBox.textContent = inputBox.textContent + num00.innerHTML;
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

    let clickAdd = document.querySelector('#add');
    clickAdd.addEventListener('click', dispAdd);
        
    function dispAdd(){
        currentValue = inputBox.textContent;
        if (!lastValue){
            lastValue = Number(inputBox.textContent);
            console.log('firstadd')
        }else if (lastValue && holdOp === 'add'){
            lastValue = Number(lastValue) + Number(inputBox.textContent);
            console.log(lastValue)
        }
        holdOp = 'add';
    }

    let clickSubtract = document.querySelector('#subtract');
    clickSubtract.addEventListener('click', dispSubtract);

    function dispSubtract(){
        currentValue = inputBox.textContent;
        if (!lastValue){
            lastValue = Number(inputBox.textContent)
            console.log('firstsubtract')
        }else if (lastValue && holdOp === 'subtract'){
            lastValue = Number(lastValue) - Number(inputBox.textContent);
            console.log(lastValue)
        }
        holdOp = 'subtract';
    }

    let clickEqual = document.querySelector('#equal');
    clickEqual.addEventListener('click', dispEqual);

    function dispEqual(){
        if (holdOp === 'add'){
            inputBox.textContent = Number(lastValue) + Number(inputBox.textContent);
            console.log(holdOp)
        }else if (holdOp === 'subtract'){
            inputBox.textContent = Number(lastValue) - Number(inputBox.textContent);
            console.log(holdOp)
        }
    }

    let clickClear = document.querySelector('#clear');
    clickClear.addEventListener('click', dispClear);

    function dispClear(){
        inputBox.textContent = '';
        lastValue = 0;
    }

// return {
//     dispNum: dispNum,
//     disp0: disp0,
//     disp00: disp00,
//     dispAdd: dispAdd,
//     dispEqual: dispEqual,
//     dispClear: dispClear
// }

})();