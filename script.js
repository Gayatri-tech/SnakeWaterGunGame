const choices = ["S", "W", "G"];
let index = Math.floor(Math.random() * 3);
let info = alert(
  "Enter 'S' for Snake, 'W' for Water and 'G' for Gun. Snake will drink the water, Water will sink the gun and Gun will kill the snake."
);
let userInput = prompt("Enter your choice:");
if (userInput === choices[index]) {
  console.log("Match tie");
} else if (userInput === "S") {
  if ((choices[index] = "W")) {
    console.log("Yay! Your Snake drank the Water.");
  } else if (choices[index] === "G") {
    console.log("Alas! The Gun killed your Snake.");
  }
} else if (userInput === "W") {
  if ((choices[index] = "S")) {
    console.log("Alas! The Snake drank your Water.");
  } else if (choices[index] === "G") {
    console.log("Yay! Your Water sunk the Gun.");
  }
} else if (userInput === "G") {
  if ((choices[index] = "W")) {
    console.log("Alas! The Water sank your Gun.");
  } else if (choices[index] === "S") {
    console.log("Yay! The Gun killed the Snake.");
  }
}
