//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guest_list: string[] = [`usman`, `hina`, `sana`];
//for (let i = 0; i < guest_list.length; i++) {
// console.log(
//   `Dear` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow.`);
//}
let notcoming: string = `usman`;
let newguest: string = `saad`;
guest_list[0] = newguest;
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    `Dear` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow.`
  );
}
console.log(`Mr ${notcoming}, is not coming for dinner tomorrow.`);

guest_list.unshift(`raniya`);
guest_list.splice(guest_list.length / 2, 2, `haniya`);
guest_list.push(`babar`);
for (let i = 0; i < guest_list.length; i++) {
  console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow`);
}
console.log(`we have found a bigger dinner table so we invited more guests`);
