
const arg = process.argv.slice(2);
arg[0] = 'C is fun'
arg[1] = 'Python is cool'
arg[2] = 'JavaScript is amazing'
for (let i = 0; i < arg.length; i++) {
  console.log(arg[i]);
}
