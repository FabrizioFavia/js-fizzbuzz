const boxContainer = document.getElementById("container");

for (let i = 1; i < 101; i++) {
    let element = i;

    if (element % 3 == 0 && element % 5 == 0) {
        element = "FizzBuzz";

    } else if (element % 3 == 0) {
        element = "Fizz";

    } else if (element % 5 == 0) {
        element = "Buzz";
    }
    
    boxContainer.innerHTML +=`<div class="box">${element}</div>"`;
  
    }
    
