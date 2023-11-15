//curried add (part 3 js tricky parts)


function curriedAdd() {
  let sum = 0;


//

function add(num) {
if (num === undefined) {
      return sum;
 } else {
      sum += num;
      return add;
    }
}

  return add;
}

// Create three instances of curriedAdd
let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

console.log(firstAdder()); // 0
console.log(secondAdder(1)(2)()); // 3
console.log(thirdAdder(2)(8)(5)(1)()); // 16
