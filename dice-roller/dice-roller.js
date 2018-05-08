function dice(number) {
  var rolls = [];
  for(var i = 0; i < number; i++){
    var roll = Math.floor(Math.random()*6)+1;
    rolls.push(roll);
  }
  return `Rolled ${number} dice: ${rolls.join(", ")}`;
}

console.log(dice(process.argv[2]));