# Coding Challenge
Solutions to the coding challenges needed the recruitment process

## Challenge #1

### Problem
Given an array “people”, write:
1. A function “listByGender” that accepts “gender” and retruns an array of people that
falls under the given gender; and
2. A function “groupByDepartment” that returns people grouped by their department.

Write your solution without using any libraries and use ES6 or above as much as possible.

```javascript
const people = [
  {
    name: 'Arisa',
    department: 'BP',
    gender: 'F'
  },
  {
    name: 'Ham',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Alice',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Anna',
    department: 'DA',
    gender: 'F'
  },
  {
    name: 'Larry',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Ria',
    department: 'Sales',
    gender: 'F'
  },
  {
    name: 'JD',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Thor',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Karl',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Rachel',
    department: 'Sales',
    gender: 'F'
  }
];

function listByGender(gender) {
  // TODO: Your code here
}


function groupByDepartment() {
  // TODO: Your code here
}

```

### [Check the implementation here](./src/coding-challenge-1.js)


## Challenge #4
Write a function that accepts an integer and returns a “validation” number. This
validation number is calculated by adding all the digits in the input.
If the result of this sum has more than a single digit, another iteration is required, repeat
the process until a single digit number is calculated.


```javascript
function calculateValidationNumber(input){
  // TODO: Your code here
}


EXAMPLES:
Input : 44444

= 4 + 4 + 4 + 4 + 4 + 4
= 2 + 4
= 6



Input : 1234

= 1 + 2 + 3 + 4
= 1 + 0
= 1
```

### [Check the implementation here](./src/coding-challenge-4.js)


## Unit test
Execute the tests made for each solution
```javascript
npm run test
``` 