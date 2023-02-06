export default function randomNumber (min = 0, max = 100, multiplyBy = 1) {
  return (Math.random(max - min) + min) * multiplyBy
}