let input = document.getElementById('input');
let btn =document.getElementById('btn');
let output = document.getElementById('result');



let number = Math.floor(Math.random()*100);
let count=0;
console.log(number);
btn.addEventListener('click',function(){
    count++;
    let input =document.getElementById('input').value;
    if(input == number){
        output.innerHTML =  'You guessed correct.The number was '+number+'. You guessed in '+ count + ' times.';
    }
    else if(number>input){
        output.innerHTML = 'You guessed worng.Think greater!';
    };
    if(number<input){
        output.innerHTML = 'You guessed worng.Think lower!'
    }
})