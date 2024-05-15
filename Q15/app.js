var guest_list = ["usman", "hina", "sana"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear" + guest_list[i] + "\n\nYou are invited for a dinner tomorrow.");
}
var notcoming = "usman";
var newguest = "saad";
guest_list[0] = newguest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear" + guest_list[i] + "\n\nYou are invited for a dinner tomorrow.");
}
console.log("Mr ".concat(notcoming, ", is not coming for dinner tomorrow."));
