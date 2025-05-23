const arg = process.argv[2];
const argArr = Number(arg);

function square(n) {
  if (argArr === undefined || isNaN(argArr)) {
    console.log("Missing size");
  } else {
    for (let i = 0; i <= n; i++) {
      console.log("X".repeat(n));
    }
  }
}
square(argArr);
