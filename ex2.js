let number = parseInt(prompt("Enter the number of rows: "));
for (let i = 0; i <= number-1; i++) {

if(i == 0) {
    console.log(i+1)
}else {
     let str = 1 + ' ' ;
    let initialVal = 1
    
    for(let j = 0 ; j < i ; j++) {
        initialVal += 2
        str += initialVal + " "
    }
    console.log(str)
}
  
}

