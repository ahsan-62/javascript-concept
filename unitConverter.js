function inchToFeet(inch){

    let feet=inch/12;
    return feet;
}

let ahsan=inchToFeet(60);
let jun=inchToFeet(50);
console.log('Ahsan Height:',ahsan,'Jun Height:',jun.toFixed(2));