const arg = process.argv[2];
if (arg === undefined) {
  console.log("No argument");
} else if (arg !== undefined) {
  console.log("Arguments found");
} else {
  console.log(arg);
}
