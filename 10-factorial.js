const arg = process.argv.slice(2);
const argvalue = Number(arg);
function factoria(n) {
  if (n < 1) {
    return 1;
  } else {
    return n * factoria(n - 1);
  }
}
console.log(factoria(argvalue));
