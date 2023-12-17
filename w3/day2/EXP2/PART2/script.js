// PART 2
const seriesWatched = ["black mirror", "money heist", "the big bang theory"];
const WatchedLength = seriesWatched.length

const seriesSentence = `${seriesWatched[0]}, ${seriesWatched[1]}, ${seriesWatched[2]}`
const sentence = `I've watched ${WatchedLength}, series: ${seriesSentence}`
console.log(sentence)

seriesWatched[2] = "friends"

seriesWatched.push("Family Guy")

seriesWatched.unshift("Simpsons")

delete seriesWatched[1]

const moneyHeist = seriesWatched[2]
console.log(moneyHeist[2])

console.log(seriesWatched)
