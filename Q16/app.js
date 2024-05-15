var guest_list = ["usman", "hina", "sana"];
//for (let i = 0; i < guest_list.length; i++) {
// console.log(
//   `Dear` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow.`);
//}
var notcoming = "usman";
var newguest = "saad";
guest_list[0] = newguest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear" + guest_list[i] + "\n\nYou are invited for a dinner tomorrow.");
}
console.log("Mr ".concat(notcoming, ", is not coming for dinner tomorrow."));
guest_list.unshift("raniya");
guest_list.splice(guest_list.length / 2, 2, "haniya");
guest_list.push("babar");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow"));
}
console.log("we have found a bigger dinner table so we invited more guests");
