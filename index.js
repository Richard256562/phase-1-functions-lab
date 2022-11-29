// Code your solution in this file!
// Should return  number of blocks of a given value
  function distanceFromHqInBlocks (someValue) {
    if (someValue<42) {
        return (42-someValue);
    } else {
        return (someValue-42);
    }
  }
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks (someValue) *264
  }
  function distanceTravelledInFeet(start, destination) {
    if (start>destination){
        return (start-destination) *264;
    } else if (destination>start) {
        return (destination-start) *264;
    }

  }
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <400) {
        return ("free")
    } if (distance >400 && distance<= 2000) {
        return (distance-400)* 0.02
        } 
     if (distance > 2000 && distance <2500) {
        return("flat fare")

     }  
     if (distance >2500) {
        return ("cannot travel that far")
     } 

    }
// calculates the distance from Hq block in feet
// calculates the distance travelled in feet by* by 264
//calculates  the fare price