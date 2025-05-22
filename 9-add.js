const arg = process.argv.slice(2);
const arr1 = Number(arg[0]);
const arr2 = Number(arg[1]);

function add(a, b) {
  console.log(a + b);
}
add(arr1, arr2);
