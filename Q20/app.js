//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var mountain_list = ["K2", "Mount everest", "Himalya", "Nanga parbat"];
console.log("\nlist of mountains");
for (var i = 0; i < mountain_list.length; i++) {
    console.log("".concat(mountain_list[i]));
}
