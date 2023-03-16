// Code your solution in this file!
const start = 42;
function distanceFromHqInBlocks(someValue){
     return Math.abs(someValue - start);
}
//let someValue = 50;
distanceFromHqInBlocks(someValue);

function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue) * 264;
    
}
//distanceFromHqInFeet(someValue);

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start)* 264;
  }
 
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0;
    }
    if (distance > 400 && distance <= 2000){
         return (distance - 400) * .02;
    }
    if (distance > 2000 && distance< 2500) {
         return 25;
    }
    if (distance >= 2500){
        return 'cannot travel that far';
    }
  } 
  calculatesFarePrice(start, destination);