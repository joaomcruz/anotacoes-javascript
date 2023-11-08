/*

Challenge from the advent of code 

Link to the challenge : https://adventofcode.com/2015/day/1


*/


import * as fs from'fs';


fs.readFile('./santaChallenge-day1-input.txt', (err, data) => {
    console.time('challenge')


    question1Solution(data)
    question2Solution(data)


    console.timeEnd('challenge')

    
})





const question1Solution = (data) => {

    const dataString = data.toString();

    let level = 0;
    
    for(let i = 0; i < dataString.length; i++) {
       if(dataString.charAt(i) === '(') {
            level += 1
        }
        else if(dataString.charAt(i) === ')'){
            level -= 1
    }
}

console.log(`The ground level that he ends up on is : ${level}`)
}




const question2Solution = (data) => {

    const dataString = data.toString();

    let level = 0;
    
    for(let i = 0; i < dataString.length; i++) {
         if(level < 0) {
               return console.log(`The first time santa goes to the basement is at coordinate ${i}`)
            } else     if(dataString.charAt(i) === '(') {
            level += 1
        }
        else if(dataString.charAt(i) === ')'){
            level -= 1
    }
}

console.log(`The ground level that he ends up on is : ${level}`)
}
