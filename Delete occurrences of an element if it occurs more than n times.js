// Magic The Gathering is a collectible card game that features wizards battling against each other with spells and creature summons. The game itself can be quite complicated to learn. In this series of katas, we'll be solving some of the situations that arise during gameplay. You won't need any prior knowledge of the game to solve these contrived problems, as I will provide you with enough information.

// Creatures
// Each creature has a power and toughness. We will represent this in an array. [2, 3] means this creature has a power of 2 and a toughness of 3.

// When two creatures square off, they each deal damage equal to their power to each other at the same time. This only happens once. If a creature takes on damage greater than or equal to their toughness, they die.

// Examples:

// Creature 1 - [2, 3]
// Creature 2 - [3, 3]
// Creature 3 - [1, 4]
// Creature 4 - [4, 1]
// If creature 1 battles creature 2, creature 1 dies, while 2 survives. If creature 3 battles creature 4, they both die, as 3 deals 1 damage to 4, but creature 4 only has a toughness of 1.

// Write a function battle(player1, player2) that takes in 2 arrays of creatures. Each players' creatures battle each other in order (player1[0] battles the creature in player2[0]) and so on. If one list of creatures is longer than the other, those creatures are considered unblocked, and do not battle.

// Your function should return an object (a hash in Ruby) with the keys player1 and player2 that contain the power and toughness of the surviving creatures.

// Solution 1
function battle(player1, player2) {
  // Good luck!
  let p1 = []
  let p2 = []

  let length = Math.max(player1.length, player2.length)

  for (let i = 0; i < length; i++) {
    // console.log(`${player1[i]} 'vs' ${player2[i]}`)

    if (!player1[i]) {
      p2.push(player2[i])
      continue
    } else if (!player2[i]) {
      p1.push(player1[i])
      continue
    }

    if (player1[i][1] - player2[i][0] > 0) {
      p1.push(player1[i])
    }

    if (player2[i][1] - player1[i][0] > 0) {
      p2.push(player2[i])
    }

    if (player2[i][1] - player1[i][0] === 0 && player1[i][1] - player2[i][0] === 0) {
      continue
    }
  }

  return { player1: p1, player2: p2 }
}

// Solution 2

// function battle(player1, player2) {
//  let length =  player1.length > player2.length ? player2.length : player1.length

//   let result = {
//     'p1' : player1.filter((el, idx) => (idx < length) ? el[1] - player2[idx][0] > 0 : el ),
//     'p2' : player2.filter((el, idx) => (idx < length) ? el[1] - player1[idx][0] > 0 : el )
//   }
//    return result
// }
