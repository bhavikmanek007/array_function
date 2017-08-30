// var language = ["c", "c++", "Node Js", "Java", "Android", "php", "c", "c++"];
//
// console.log(language);

// Accessing index of array
          // var first = language[0];
          // var last = language[language.length - 1]
          // console.log("first : ", first);
          // console.log("last : ", last);

// for each loop param(value, key, array)
          // language.forEach(function(item,index,array){
          // console.log(array);
          // });

// push
          // language.push(".net");
          // console.log(language);

// pop
          // language.pop();
          // console.log(language);

// unshift
          // language.unshift(".net");
          // console.log(language);

// shift
          // language.shift();
          // console.log(language);

// Find position (index)
          // var pos = language.indexOf('Node Js');
          // console.log(pos+1);

// remove using position param(from, no of emement)
          // var removedItem = language. splice(1,3);
          // console.log(language);
          // console.log(removedItem);

// Copy an array
          // var array = language.slice();
          // console.log(array);

// Accessing array element
          // console.log(language[2]);

// array of index (key) and position
          // console.log(Object.values(language));
          // console.log(language.length);
          // language[10] = ".net";
          // console.log(language);
          // console.log(Object.keys(language));
          // console.log(language.length);

// array from
          // var array = Array.from(language, k => {
          //   if (k == "c") return k;
          // });
          // console.log(array);

// argument Object
          // function f() {
          //   console.log(arguments[0].name);
          // }
          //
          // f({id: 1, name : "bhavik"});

// Generate sequence
          // var array = Array.from({length: 10}, (h , i) => 11+i);
          // console.log(array);

// Array.isArray() function
          // console.log(Array.isArray([]));
          // console.log(Array.isArray([1]));
          // console.log(Array.isArray(new Array()));
          // // Little known fact: Array.prototype itself is an array:
          // console.log(Array.isArray(Array.prototype));
          //
          // // all following calls return false
          // console.log(Array.isArray());
          // console.log(Array.isArray({}));
          // console.log(Array.isArray(null));
          // console.log(Array.isArray(undefined));
          // console.log(Array.isArray(17));
          // console.log(Array.isArray('Array'));
          // console.log(Array.isArray(true));
          // console.log(Array.isArray(false));
          // console.log(Array.isArray({ __proto__: Array.prototype }));
          // console.log(Array.isArray([{name: "abc", age: 10}]));

// Array.of function
          // var arr = Array.of(language[0]);
          // console.log(arr);

// Array.fill() function param(no which you want to fill)
          // var numbers = [1,2];
          // numbers.length = 10;
          // numbers.fill(20);
          // console.log(numbers);
          //
          // console.log([1, 2, 3].fill(4));
          // console.log([1, 2, 3].fill(4, 1));
          // console.log([1, 2, 3].fill(4, 1, 2));
          // console.log([1, 2, 3].fill(4, 1, 1));
          // console.log([1, 2, 3].fill(4, -3, -2));
          // console.log(Array(3).fill(4));

// reverse function
          // language.reverse();
          // console.log(language);

// array concat
          // var arr1 = [{id: 1, name: "Bhavik"}];
          // var arr2 = [{id: 2, name:"Nikunj"}];
          // console.log(arr1.concat(arr2));

// search function param (search element), param(search element, from)
          // console.log([1, 2, 3].find(i => {
          //   return i>1;
          // }));
          // console.log([1, 2, 3].includes(4));
          // console.log([1, 2, 3].includes(3, 3));
          // console.log([1, 2, 3].includes(3, -1));
          // console.log([1, 2, NaN].includes(NaN));

// join function param (delimeter)
          // console.log(language.join());
          // console.log(language.join('#'));

// lastIndexOf param(element)
          // console.log(language.lastIndexOf("c"));
          // console.log(language.lastIndexOf("c++"));

// to string function
          // console.log(language.toString());

// toLocalString
          // console.log(language.toLocaleString());

// .entries function
          // var iterator = language.entries();
          // console.log(iterator.next().value); // [0, 'a']
          // console.log(iterator.next().value); // [1, 'b']
          // console.log(iterator.next().value); // [2, 'c']
          // for (let e of language) {
          //   console.log(e);
          // }


// .every function
          // function isBigEnough(element, index, array) {
          // return element >= 5;
          // }
          //
          // console.log([12, 5, 8, 130, 44].every(isBigEnough));
          // console.log([12, 54, 18, 130, 44].every(isBigEnough));

// .filter
          // var longWords = language.filter(function(word){
          //   return word.length < 2;
          // });
          // console.log(longWords);

// .find function
          // var inventory = [
          //     {name: 'apples', quantity: 2},
          //     {name: 'bananas', quantity: 0},
          //     {name: 'cherries', quantity: 5}
          // ];
          //
          // function findCherries(fruit) {
          //     return fruit.name === 'bananas';
          // }
          //
          // console.log(inventory.find(findCherries));
          //
          // function isBigEnough(element) {
          //   return element >= 15;
          // }
          //
          // console.log([120, 5, 8].find(isBigEnough));

// .findIndex function
          // function isBigEnough(element) {
          //   return element.length >= 4;
          // }
          //
          // console.log(language.findIndex(isBigEnough));

// .keys function
          // var iterator = language.keys();
          //
          // console.log(iterator.next());
          // console.log(iterator.next());
          // console.log(iterator.next());
          // console.log(iterator.next());

// .map function
          // var numbers = [1, 5, 10, 15];
          // var doubles = numbers.map(function(x) {
          //     // console.log(i);
          //    return this * x;
          // }, 5);
          // console.log(doubles);

// .reduce function
          // var total = [0, 1, 2, 3].reduce(function(i, j) {
          //   return i+j;
          // }, 1);
          // console.log(total);
          //
          // var flattened = [[0, 100], [2, 3], [4, 5]].reduce(function(a, b) {
          //   return a+" "+b; })
          //   console.log(flattened);

// .reduceRight function
          // var total = [0, 1, 2, 3].reduceRight(function(sum, value) {
          //   return sum + value;
          // }, 0);
          // // total is 6
          //
          // var flattened = [[0, 100], [2, 3], [4, 5]].reduce(function(a, b) {
          //   return a+" "+b; })
          //   console.log(flattened);

// .some function
          // function isBiggerThan10(element, index, array) {
          //   return element > 10;
          // }
          //
          // console.log([12, 5, 8, 1, 4].some(isBiggerThan10));
          // console.log([12, 5, 8, 1, 4].some(isBiggerThan10));

// Iteration using for...of loop         ****   not workimng   ****
          // var arr = ['w', 'y', 'k', 'o', 'p'];
          // var eArr = arr[Symbol.iterator]();
          // // your browser must support for..of loop
          // // and let-scoped variables in for loops
          // for (let letter of eArr) {
          //   console.log(letter);
          // }

// sort
          // var items = [
          //   { name: 'Edward', value: 21 },
          //   { name: 'Sharpe', value: 37 },
          //   { name: 'And', value: 45 },
          //   { name: 'The', value: -12 },
          //   { name: 'Magnetic', value: 13 },
          //   { name: 'Zeros', value: 37 }
          // ];
          //
          // // sort by value
          // items.sort(function (a, b) {
          //   return a.value - b.value;
          // });
          // console.log(items);

// arr.copyWithin(target, start, end)
          // console.log(['alpha', 'bravo', 'charlie', 'delta'].copyWithin(2, 0));








// ES6

// || operator
          // var height = height || 50
          // var color = 'color' || 'red'
          // var url = url || 'http://azat.co'
          // console.log(height);
          // console.log(color);
          // console.log(url);

// let
          // function calculateTotalAmount (vip) {
          //   var amount = 0
          //   if (vip) {
          //     let amount = 1
          //   }
          //   { // more crazy blocks!
          //     let amount = 100
          //     {
          //       let amount = 1000
          //       }
          //   }
          //   return amount
          // }
          //
          // console.log(calculateTotalAmount(true))

// const
          // function calculateTotalAmount (vip) {
          //   const amount = 0
          //   if (vip) {
          //     const amount = 1
          //   }
          //   { // more crazy blocks!
          //     const amount = 100
          //     {
          //       const amount = 1000
          //       }
          //   }
          //   return amount
          // }
          //
          // console.log(calculateTotalAmount(true))

// promises
          // var wait1000 =  new Promise((resolve, reject)=> {
          //     var i = 2;
          //     if (i == 0){
          //       resolve("yes");
          //     }
          //       else{
          //         reject("no")
          //       }
          // }).then(function(msg){
          //   console.log(msg);
          // }).catch(function(msg){
          //   console.log(msg);
          // })

// ... operator

// -->   avoid the use of apply
          // function doStuff (x, y, z) {
          //   console.log("x : ",x," y : ",y," z : ",z);
          //  }
          // var args = [0, 1, 2];
          //
          // // Call the function, passing args
          // doStuff(args);

// -->    combaining array
          // var arr1 = [2,3];
          // var arr2 = [1,...arr1,4,5];
          // console.log(arr2);

// -->   copy array
          // var arr1 = [1,2,3];
          // var arr2 = [...arr1];
          // console.log(arr2);

// --> with math function
          // let numbers = [9, 4, 7, 1];
          //
          // console.log(Math.min(...numbers));

// --> Destructuring Fun
          // let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
          // console.log(x);
          // console.log(y);
          // console.log(z);

// --> Marge two object
          // const person1 = { name: 'David Walsh', age: 33 };
          // const person2 = { name: 'David Walsh Jr.', role: 'kid' };
          //
          // const merged = {...person1, ...person2}
          // console.log(merged);

          // const person = { name: 'David Walsh', gender: 'Male' };
          // const tools = { computer: 'Mac', editor: 'Atom' };
          //
          // const summary = {...person, ...tools};
          // console.log(summary);
