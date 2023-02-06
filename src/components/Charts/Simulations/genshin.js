import randomNumber from '../../../assets/utils'

const genshinData = {
  standartPity: [0.6, 0.3],
  softPity: [75, 1, 0.05],
  hardPityRolled: 90
}

const simualtionIterations = 1e2

let drops = []
let rolled = 0
let softPity = genshinData.softPity[1]
let standartPity = genshinData.standartPity[0]

function roll (randNumber) {
  rolled++
  if (rolled >= genshinData.hardPityRolled) {
    rolled = 0
    softPity = genshinData.softPity[1]
    dropCharacter(rolled, 100)
  } else if (rolled >= genshinData.softPity[0] && randNumber <= softPity) {
    softPity += genshinData.softPity[2]
    standartPity = genshinData.standartPity[0]
    dropCharacter(rolled, softPity)
  } else if (rolled >= 0 && randNumber <= standartPity) {
    standartPity += genshinData.standartPity[1]
    dropCharacter(rolled, standartPity)
  }
}

function dropCharacter(rolled, chance) {
  if (drops.some((drop) => drop[0] === rolled)) {
    drops.forEach((drop) => {
      if (drop[0] === rolled) {
        drop[1] = chance
      }
    })
  } else drops.push([rolled, chance])
  drops.sort((a, b) => a[0] - b[0])
  console.log(drops)
}

for (let i = 0; i < simualtionIterations; i++) {
  roll(randomNumber(0, 100, 100))
  // roll(i)
}