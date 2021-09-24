// factory functions
function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return 'attack with ' + elf.weapon
        }
   }
}

const peter = createElf('Peter', 'stones')
peter.attack()




// Inefficient: Not DRY
// const elf = {
//     name: 'Orwell',
//     weapon: 'bow',
//     attack() {
//         return 'attack with ' + elf.weapon
//     }
// }

// const elf2 = {
//     name: 'Sally',
//     weapon: 'bow',
//     attack() {
//         return 'attack with ' + elf.weapon
//     }
// }

// elf.attack()
// elf2.attack()
