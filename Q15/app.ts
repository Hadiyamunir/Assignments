//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
let guest_list: string[] = [`usman`, `hina`, `sana`];
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    `Dear` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow.`
  );
}

let notcoming: string = `usman`;
let newguest: string = `saad`;
guest_list[0] = newguest;
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    `Dear` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow.`
  );
}
console.log(`Mr ${notcoming}, is not coming for dinner tomorrow.`);
