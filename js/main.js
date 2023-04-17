for (let i = 1; i < 101; i++) {
    let element = i;
    
    if (element % 3 == 0 && element % 5 == 0){
        element = "FizzFazz";

    } else if(element % 3 == 0 ) {
        element = "Fizz";
    }

    console.log(element);

    
}