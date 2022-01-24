// Meal Planning
let groceries = ["apples", "oranges", "cookies", "salad"]
groceries = []
groceries.push("apples")
groceries.push("oranges")
groceries.push("cookies")

groceries.push("salad")
console.log(groceries);

// What was the first item I added to my list?
// Output it.
console.log("first element in the list:", groceries[0]);

// What was the last item I added to my list?
// bad hardcoded solution below
// groceries[3]

// Output it.
console.log("last element:", groceries[groceries.length - 1]);

// Add cucumbers to the end of list
groceries.push("cucumbers")
// What is the index of the cucumbers entry?
console.log("cucumbers index:", groceries.indexOf("cucumbers"));

// I found another list in the utensil drawer.
// Combine it with what we have
const otherList = ["tomatoes", "crackers", "soup", "chips"]
const newList = groceries.concat(otherList)

// We already have tomatoes.
// If they're on the list, remove them
let tomatoesIndex = newList.indexOf("tomatoes")
if (tomatoesIndex >= 0) {
  //splice
  newList.splice(tomatoesIndex, 1)

  //slice
  // debugger
  // let firstHalfNewArray = newList.slice(0, tomatoesIndex)
  // let secondHalfNewArray = newList.slice(tomatoesIndex + 1)
  // const withNoTomatoes = firstHalfNewArray.concat(secondHalfNewArray)
}

// Provide a friendly output of the list
// Add a bullet before each item

//forEach
// let formattedList = ""
// newList.forEach((item) => {
//   formattedList += "* " + item + "\n"
// })
// console.log(formattedList);

// .map() && .join()
const formattedList = newList.map((item) => {
  return "* " + item
})
console.log(formattedList.join("\n"));

// Sort the list alphabetically
// Output the list

// Add items to your shopping list
// Loop until done

// console.log(groceries)

// I only have time to shop for items starting
// with the letter C
// Build a new array based off my list
