class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
     constructor(name, weapon, type) {
         super(name, weapon);
         this.type = type;
         console.log(this)
     }
}

const dolby = new Elf('Dolby', 'cloth', 'house')
console.log(dolby)

console.log(dolby instanceof Character)