// 🧠 Objective:
// The goal of this assignment is to practice declaring, assigning, and accessing data in JavaScript Arrays.

// 📝 Reminder:
// Run your code using the command: node index.js

// ----------------------------------------------------------
// Part 1 [2 pts]
// ----------------------------------------------------------
// Create an array for each class with the following names:
// csRoster, mathRoster, elaRoster, ssRoster, electivesRoster (5 arrays total)
// Each should contain 3 unique student names (you can make them up or use classmates)

let csRosters = ["Michael", "Michaeler", "Michaelest"]
let mathRoster = ["Michaely", "Michaelear", "Michaelests"]
let elaRoster = ["The", "Wild", "Ben"]
let ssRoster = ["Ome", "Bee", "shenron"]
let electivesRoster = ["name", "theNamer", "namerest"]

// ----------------------------------------------------------
// Part 2 [2 pts]
// ----------------------------------------------------------
// Five new students enrolled at CSH: JP, Arnold, Peach, Laila, Jayden
// Use the push() method to add ONE of these students to each roster:
// Add JP → CS
// Add Arnold → Math
// Add Peach → ELA
// Add Laila → Social Studies
// Add Jayden → Electives

csRosters.push("JP")
mathRoster.push("Arnold")
elaRoster.push("Peach")
ssRoster.push("Laila")
electivesRoster.push("Jayden")


// ----------------------------------------------------------
// Part 3 [2 pts]
// ----------------------------------------------------------
// Jayden has unenrolled from CSH.
// Use an array method to remove Jayden from the electivesRoster.

electivesRoster.pop()

// ----------------------------------------------------------
// 💫 Extra Credit [2 pts]
// ----------------------------------------------------------
// Create a new array named cshRosters that stores all class rosters in this order:
// 0: csRoster 012
// 1: mathRoster 345
// 2: elaRoster 678
// 3: ssRoster 9 10 11
// 4: electivesRoster

let cshRosters = [csRosters, mathRoster, elaRoster, ssRoster, electivesRoster]



// Using ONLY cshRosters and list indexing, print the name of the
// second student in the ssRoster (index 3 in cshRosters)

console.log(cshRosters[])



// ✅ Done! 
