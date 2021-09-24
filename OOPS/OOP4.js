// ES6 Class
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
console.log(peter instanceof Elf)
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())



// Using Object.create() is called as pure prototypal inheritance