// Parent character
function Character(characterName, health, strenght){
    this.characterName = characterName;
    this.health = health;
    this.strenght = strenght;
}

// character warrior

const Warrior = function(characterName, health, strenght, weapon, power){
Character.call(this, characterName, health, strenght)
this.weapon = weapon;
this.power = power
this.attack= function (prey){
    console.log(prey, "health is reduced")
}
this.specialAbility(character){
    console.log(character, "has a special ability")
}
}
//  Testing
const warrior = new Warrior("gondaf", 10, 20, "sword", 50)
console.log(warrior.specialAbility("wizard"))