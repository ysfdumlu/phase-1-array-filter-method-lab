// Code your solution here

const driverNames = ["Bobby", 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching( driverNames, name ) {
   return driverNames.filter( ( driver ) => {
      return driver.toLowerCase() === name.toLowerCase(); 
  })
}

console.log(findMatching(driverNames,"Bobby"))


function fuzzyMatch(drivers, name) {
   return drivers.filter(driver => {
    let nameLength = name.length // 3
    let fuzzyWord = driver.substring(0, nameLength) // Bob
    return name.toLowerCase() === fuzzyWord.toLowerCase()

  }) 
}

fuzzyMatch(driverNames, 'Sa');

const driversInfo = [
   {
     name: 'Bobby',
     hometown: 'Pittsburgh' },
   {
     name: 'Sammy',
     hometown: 'New York' } ,
   {
     name: 'Sally',
     hometown: 'Cleveland' },
   {
     name: 'Annette',
     hometown: 'Los Angeles' },
   {
     name: 'Bobby',
     hometown: 'Tampa Bay' }
 ];

function matchName (info , searchName){
   const match = info.filter(obj => {
      if(obj.name === searchName){
         return obj;
      }
   })
   return match;
}

console.log(matchName(driversInfo, "Bobby"))
