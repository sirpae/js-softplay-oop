# Soft Play OOP

## Setup

1. Fork this repository to your GitHub account
2. Clone your forked repository to your machine
3. Change directory into the project.
4. Install the project dependencies

```sh
$ npm install
```

## Requirements
In this exercise, you are required to implement the same functionality as the [Soft Play](https://github.com/boolean-uk/js-softplay) exercise, but using a class inside the `src/soft-play-oop.js` file. Your class should have the following methods:
 
 * `enter(numChildren, numAdults)` - as defined in [Soft Play](https://github.com/boolean-uk/js-softplay#function-enternumchildren-numadults)
 * `leave(numChildren, numAdults)` - as defined in [Soft Play](https://github.com/boolean-uk/js-softplay#function-leavenumchildren-numadults)
 * `occupancy(numChildren, numAdults)` - as defined in [Soft Play](https://github.com/boolean-uk/js-softplay#function-occupancy)

Your class should also contain `adult` and `children` counters as properties which are updated by your functions.

## Tips
Remember you can set up any initial state within the constructor:

```javascript
class Car {
  constructor() {
    this.mileage = 0
  }
}
```

See [MDN Class Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## Testing
A test has already been created for your function inside
`spec/soft-play-oop.spec.js`. You should not need to modify this file. You can run the tests using npx:

```sh
$ npx jasmine spec/soft-play-oop.spec.js
```

You can focus on passing one test at a time by implementing your functions step by step. When all the tests pass, you know your functions are complete. You can look at the test cases in the `spec/soft-play-oop.spec.js` file, but you should not change any of the code.

## Extension
Once you have finished the core functionality you can extend the exercise with the following additional features. For both of these extensions, add your own test cases to `spec/soft-play-oop.spec.js`

### Max Occupancy
Implement a constructor argument to your class, `maxOccupancy`. This value determines the total number of people (adults and children combined) that can be in the soft play center at the same time. If this value is not provided, then the occupancy is unlimited. If the value is provided, then any calls to `enter` that would exceed this value should return `false`.

### Children per Adult
Implement another constructor argument to your class, `childrenPerAdult`. This value determines the maximum number of children that an adult can be responsible for. Update your `enter` and `leave` functions to check this value against the current totals and fail if number of children per adult would exceed this value.

## Reflection
Once you have completed the exercise, consider the following:
* In your `enter` and `leave` methods, you check certain conditions are true before changing the counters. For example, you make sure that a child cannot enter on their own. However, for someone else using your class in their code, it would be possible to modify the counters directly and by-pass these checks! How could you prevent access to these properties to ensure that only your `leave` and `enter` methods could modify them?
* `enter` and `leave` can fail for many reasons. Currently, they just return `false` whenever any of the checks fail. For someone else using your class, how could you better communicate the specific reason for `false` being returned from your method?