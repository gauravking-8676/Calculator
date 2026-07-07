let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
console.log(buttons);
let string= " ";
// let arr = Array.from(button);
buttons.forEach(button => {
    button.addEventListener('click',(e) =>{
        console.log(e.target.value);
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value =string;
        }
        else if (e.target.innerHTML == 'AC'){
            string = ""
            input.value = string;

        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{string += e.target.value;
        input.value = string;
        }

        
    })
})