const country = 'Australia';    // Constant variables cant be changed once they are declared
const continent = 'Australia';
let population = 300;   // Let variables can change 
const isIsland = true
const language = 'English'

console.log(country); // Printint out each of ther variables in the console
console.log(continent);
console.log(population);
console.log(isIsland)
console.log(language)


console.log(typeof isIsland);   // Seeing what type of data the variable is 
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

const finlandPop = 6

population ++   // Adding 1 to the population variable

console.log(population);    
console.log(population > 6);    // Getting console to print out if population is higher or lower 
console.log(population < 33);

const description1 =    
    country + ' is in ' + continent + ' and its ' + population + ' million people speak ' + language;   
    // Putting all the variables into a string and printing it out in console
console.log(description1);

const description = `${country} is in ${continent} and its ${population} million people speak ${language}`
    // Like using F strings in python 
console.log(description)

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million
    below average`
  );
}

const numNeighbours = Number(prompt ("How many neighbouring countries do you have ?"));

if (numNeighbours === 1) {
    console.log("Your country has 1 neighbour");
}
else if (numNeighbours > 1) {
    console.log("Your country has many neighbours");
}
else {
    console.log("No borders");
}



