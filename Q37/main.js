//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\" printed on it."));
}
// Call the function to make a large shirt with the default message
make_shirt();
// Call the function to make a medium shirt with the default message
make_shirt('M');
// Call the function to make a shirt of any size with a different message
make_shirt('S', 'JavaScript is fun!');
