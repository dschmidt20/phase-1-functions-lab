// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
   if (someValue >= 42) {
     someValue -=42
   } else if (someValue < 42){
     someValue = 42 - someValue
   }
    //returns the number of blocks given a value
    return someValue
  }
  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    

    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  return distanceFromHqInBlocks(someValue) * 264  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
      let distance = Math.abs(destination - start)
      distance *=264
    //returns the number of feet traveled
    return distance
  }
  function calculatesFarePrice(start, destination) {
      let distance = Math.abs(destination - start)
      distance *=264
      let fare = 0
      if (distance < 400){
         return fare = 0
      } else if (distance >2500){
          return 'cannot travel that far'
      } else if(distance >2000){
         return fare = 25
      }else{

    //returns the fare for the customer
   
  fare = (distance -400)*(.02)
   
}
return fare
  }