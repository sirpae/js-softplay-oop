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
You need to write a program that **maintains counts** of both the number of children and adults inside a soft play center, using a class inside the `src/soft-play-oop.js` file. Your class should have the following methods:


### SoftPlay#occupancy()
This function should return an object with two keys - `adults` should contain the number of children currently inside the soft play center and `children` the number of children.
```js
//counts start at 0
> softPlay.occupancy()
{ adults: 0, children: 0 }
```

### SoftPlay#enter(numAdults, numChildren)
This function is used to register adults and children entering the soft play center. The function should check for the following conditions:

* Every child entering the soft play center is accompanied by at least 1 adult.

If any of these checks fail, the function should return `false`. Otherwise, the function should return `true` and `numAdults` and `numChildren` should be added to the current totals.

```js
//2 adults and 1 child enter
> softPlay.enter(2, 1)
true
```
```js
//a child attempts to enter on their own, enter returns false
> softPlay.enter(0,1)  
false
```
### SoftPlay#leave(numAdults, numChildren)
This function is used to register adults and children leaving the soft play center. The function should check for the following conditions:

* A child is not attempting to leave without an adult
* The number of adults and children left inside the center will not cause there to be more children than adults (there must be at least 1 adult for 1 child inside the center at all times)
* Every child leaving the soft play center is accompanied by at least 1 adult.
* The number of adults and children attempting to leave is not greater than the number currently inside the center

If any of these checks fail, function should return `false`. Otherwise, the function should return `true` and `numAdults` and `numChildren` should be deducted from the current totals.

```js
// eg, if count starts at: { adults: 2, children: 1 }
//1 adult leaves
> softPlay.leave(1, 0)
true

//Only 1 adult and 1 child remain
> softPlay.occupancy()
{ adults: 1, children: 1 }

//the last adult attempts to leave so false is returned (as child would be on their own in soft play)
> softPlay.leave(1,0)
false

//the last child and adult leave together
> softPlay.leave(1,1)
true
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
