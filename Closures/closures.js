function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father';
        return function c() {
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

const one = a();
one()();

// Exercise
function callMeMaybe() {
    const callMe = 'Hi! I am now here'
    setTimeout(function() {
        console.log(callMe);
    }, 4000);
}

callMeMaybe();



// Closures are Memory efficient

function heavyDuty(index) {
    const bigArray = new Array(7000).fill(';)')
    console.log('created!')
    return bigArray[index]
}
heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
// Output:
// created!
// created!
// created!
// ";)"



// After Closure is applied:
const getHeavyDuty = heavyDuty2();
getHeavyDuty(688)
getHeavyDuty(700)
getHeavyDuty(800)

function heavyDuty2() {
    const bigArray = new Array(7000).fill(';)')
    console.log('created Again!')
    return function(index) {
        return bigArray[index]
    }
}

// Output:
// created Again!
// ";)"


// Closure's another benifit:
// Encapsulation

const makeDramaticEntrance = () =>  {
    let timer = 0
    const passTime = () => timer++;
    const totalPeaceTime = () => timer;
    const entrance = () => {
        timer = -1;
        return 'boom'
    }
    setInterval(passTime, 1000)
    return {
        totalPeaceTime: totalPeaceTime
    }
}

const omg = makeDramaticEntrance();
omg.totalPeaceTime()

omg.entrance() // Error


// MOST ASKED JS INTERVIEW QUESTION
// ON CLOSURES

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
    setTimeout(function(){
        console.log('I am at index ' + array[i]);
    }, 3000);
}

// 1) Easy fix is to replace var with let keyword
// 2) Use Closures:
const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
    (function(closureI) {
        setTimeout(function(){
            console.log('I am at index ' + array[closureI]);
        }, 3000);
    })(i)
}
