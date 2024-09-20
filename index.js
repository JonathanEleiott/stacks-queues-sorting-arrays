class Stack {
  constructor() {
    this.currentStack = [];
  }

  add(value) {
    this.currentStack.push(value);
  }

  remove() {
    if(!this.isEmpty()) {
      this.currentStack.pop();
    } else {
      console.log('Stack already empty!');
    }
  }

  isEmpty() {
    return this.currentStack.length === 0;
  }

  peek() {
    return this.currentStack[this.currentStack.length - 1];
  }
}

const numbersStack = new Stack();
numbersStack.add(15);
numbersStack.add(22);
numbersStack.add(12);

numbersStack.remove();

// console.log(numbersStack.peek());





// Big O notation - WORST CASE SCENARIO
// how many operations does this function need to run based on the growth of the input


// Constant => O(1)

const addTwo = (num) => {
  const total = num + 2; // 1
  return total; // 2
}

const getFirstItem = (groceryList) => {
  return groceryList[0]; // 1
}


// Linear => O(n)

const logItems = (carItems) => {
  for(let i = 0; i < carItems.length; i++) { // O(n)
    console.log(carItems[i]); // O(1)
  }
}

const logStudentsTwice = (students) => {
  for(let i = 0; i < students.length; i++) { // O(n)
    console.log(students[i]) // O(1)
  }

  for(let i = 0; i < students.length; i++) { // O(n)
    console.log(students[i]) // O(1)
  }
}

// O(n) + O(n) = 2 * O(n)



// Quadratic => O(n^2)

const compareItems = (items) => {
  for(let i = 0; i < items.length; i++) { // O(n)
    for(let j = 0; j < items.length; j++) { // O(n)
      console.log(items[i][j]); // O(1)
    }
  }
}

// O(n) * O(n) = O(n^2)





// Logarithmic => O(log n)

// Find the number at Math.floor(length / 2)
// If it's not the target remove the unnecessary (left/right) part of the array
// Repeat

// find 7 in the following array

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [6, 7, 8, 9, 10]
// [6, 7]
// [7]




