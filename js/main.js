const boxContainer = document.getElementById("container");

for (let i = 1; i < 101; i++) {
    let element = i;
    let classe = " ";

    if (element % 3 == 0 && element % 5 == 0) {
        element = "FizzBuzz";
        classe = "lightPink";

    } else if (element % 3 == 0) {
        element = "Fizz";
        classe = "cadet";

    } else if (element % 5 == 0) {
        element = "Buzz";
        classe = "coral";
    }

    boxContainer.innerHTML +=`<div class="box ${classe}" >${element}</div>`;
  
    }
    
