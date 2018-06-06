const getNthElement = (array, n) => {
    // your code here
    if (array === 0) {
        return undefined;

    } else {
        return array [n];
    }
  }

  let output = getNthElement([1, 3, 5], 1);
  console.log(output); // --> 3