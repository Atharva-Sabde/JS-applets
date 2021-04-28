var screen = document.getElementById('screen');     // Fetching the screen element.

var buttons = document.querySelectorAll('button');  // this will check the input from all the available selectors (button)

let screenValue = '';              //variable which is responsible for holding the data , which is to be put on screen

// screen.value = screenValue;          //passing the data variable to the screen element.



for (item of buttons) {
  item.addEventListener('click', (e)=>{
    btntext = e.target.innerText;
    console.log("button : "+ btntext);

     
    if (btntext == 'x') {                     // multiplication
       btntext = '*';
       screenValue += btntext;
        screen.value = screenValue;
    }
    
    else if(btntext == '÷'){                  // division
      btntext = '/' ;
      screenValue += btntext;
      screen.value = screenValue;
    }  
    else if(btntext == 'x²'){                               // square of the operand 
      btntext = '²' ;
      temp = screenValue.substr(0 , screenValue.length);
      screen.value += '²';
      screenValue = temp * temp ;
    }


    else if(btntext == 'C'){            //clear all
      screenValue= '';
      screen.value = screenValue;
    }
    
    else if(btntext == 'DEL'){                   // backspace
      screenValue = screenValue.substr(0, screenValue.length-1);
      screen.value =  screenValue;
    }

    else if(btntext == '='){                        //evaluation
      screen.value = eval(screenValue);
    }
    else{                                    // no evaluation then add more numbers
      screenValue += btntext;
      screen.value = screenValue;
    }
  })
}





//================================================
//========================Alternative ========================