let product: [string, number];
product = ["Table", 500];

let flag: [string, boolean];
flag = ["active", true];

type Scores = [string, ...number[]];
const billyScores: Scores = ["Billy", 60, 70, 80];
const sallyScores: Scores = ["Sally", 60, 70, 75, 70];

function logScores(...scores: Scores){
    if(scores.length == 4){
        console.log("thx for logging all scores");
    }
    console.log(scores);
}