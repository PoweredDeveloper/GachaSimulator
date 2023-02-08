// Code written by: 
// Powered Developer <https://github.com/PoweredDeveloper>
// (Istomin Mikhail) Check my profile for more info.
// MIT LICENSE

// Вспомогательные функции

export default function randomNumber (min = 0, max = 100, multiplyBy = 1) {
  return (Math.random(max - min) + min) * multiplyBy
}