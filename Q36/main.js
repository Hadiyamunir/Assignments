//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\" printed on it."));
}
// Call the function with example arguments
make_shirt('L', 'Hello World');
make_shirt('M', 'TypeScript is awesome!');
make_shirt('S', 'Code with passion');
