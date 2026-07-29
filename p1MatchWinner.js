function matchWinner(teamAGoals, teamBGoals) {
  if (
    typeof teamAGoals !== "number" ||
    typeof teamAGoals !== "number" ||
    !Number.isFinite(teamAGoals) ||
    !Number.isFinite(teamBGoals)
  ) {
    return "Invalid";
  }

  if (
    !Number.isInteger(teamAGoals) ||
    !Number.isInteger(teamBGoals) ||
    teamAGoals < 0 ||
    teamBGoals < 0
  ) {
    return "Invalid";
  }

  if (teamAGoals > teamBGoals) {
    return "Team A won";
  } else if (teamAGoals < teamBGoals) {
    return "Team B won";
  } else if (teamAGoals === teamBGoals) {
    return "Draw";
  } else {
    return "Invalid";
  }
}

console.log(matchWinner(1, 3));
console.log(matchWinner(3, 1));
console.log(matchWinner(3, 3));
console.log(matchWinner(1, "3"));
console.log(matchWinner(-1, 3));
console.log(matchWinner('nan', 3));
console.log(matchWinner(3.1416, 3));
console.log(matchWinner(0, 0));
