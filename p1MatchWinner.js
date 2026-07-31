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
    return "Team A Won";
  } else if (teamAGoals < teamBGoals) {
    return "Team B Won";
  } else if (teamAGoals === teamBGoals) {
    return "Draw";
  } else {
    return "Invalid";
  }
}

