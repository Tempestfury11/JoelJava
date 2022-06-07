// let age = 18;
// let salary = 5000;
// let bonus = 500;

// if((age >=18) && (salary >= 5000)) {
//     salary += bonus;
//     console.log('Your salary: R'.concat(salary))
//     ;
// }else{
//     console.log('Please try again later')
// }

// let items = ['Banana', 'Mango', 'Orange', 'Laptop', 'Mouse',
// 'Keyboard'];
// Linking
// let ul = document.getElementById('items');
// Load items to an ul
// items.forEach( (item) => {
//     ul.innerHTML += `
//     <li class='bgDarkCyan'>${item}</li>
//     `;
//     ul
// });
// items.forEach(display);

// function display(item){
//     console.log(item);
// }
// items.forEach((e)=>{
// ul.innerHTML += `
// <li>${e}</li>
// `;
// });
/*
1. Please create an array called bestFriends with your friend names
2. Display the middle and last names*/
// let bestFriends = ['Anakin Luke Skywalker','Alex David Mason',' Desmond Ezio Auditore','Harry James Potter','Perseus Percy Jackson','Logan David Walker','Nate Julian Gavin', 'Chris Brian Tempest', 'Obi-Wan Ben Kenobi','Don Vito Corleone'];

// let ul = document.getElementById('bestFriends');

// b1 = bestFriends[5]
// console.log(b1);
// b2 = bestFriends[5].length
// console.log(b2);

// console.table(bestFriends);
// console.log(bestFriends[bestFriends.length/2]);
// console.log(bestFriends[bestFriends.length-1]);

// bestFriends.forEach((e)=>{
//     ul.innerHTML = `
//     <li>${b1}</li>
//     <li>${b2}</li>
//     `;
//     });

    // In JavaScript we don't have integer division like in Python (//) below is my plan B for JS
    // Collection
    // let items = ['Banana', 'Mango', 'Orange', 'Laptop', 'Mouse',
    // 'Keyboard'];
    // // 6 / 2 = 3
    // let middleIndex = Math.floor(items.length / 2) -1;
    // console.log(middleIndex);
    // console.log(items[middleIndex]);

    let marks = 90;
// >, >= , <, <=
// &&, ||, !
switch(marks) {
    case 100:
        console.log("A+");
    break;
    case 90:
        console.log("B+");
    break;
    case 80:
        console.log("Distinction");
    break;
    case 70:
        console.log("Pass");
    break;
    case 60:
        console.log("Fail");
    break;
    case 50:
        console.log("Out of range");
        break;
    case 40:
        console.log("Out of range");
        break;
    case 30:
        console.log("Out of range");
        break;
    case 20:
        console.log("Out of range");
        break;
    case 10:
        console.log("Out of range");
}
