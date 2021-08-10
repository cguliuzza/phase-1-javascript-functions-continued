// Your code here

// razzle();
function razzle() {
    console.log("You've been razzled!");
}
// razzle();


// function saturdayFun(activity="roller-skate") {
//     console.log(`This Saturday, I want to ${activity}!`)
// }

// saturdayFun();


function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(commute="go to the office") {
    return `This Monday, I will ${commute}.`
}

function wrapAdjective(highlight='*') {
    return function(pro="a hard worker") {
        return `You are ${highlight}${pro}${highlight}!` 
    }
}

