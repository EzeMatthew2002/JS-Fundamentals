const arg = process.argv[2];
const argArr = Number(arg);

if (arg === undefined || isNaN(argArr)) {
  console.log("Missing size");
} else {
  square(argArr);
}

function square(n) {
  for (let i = 0; i < n; i++) {
    console.log("X".repeat(n));
  }
}
