function isElevatorSafe(weights) {
  let sumOfArray = 0;

  if (Array.isArray(weights)) {
    for (let elem of weights) {
      sumOfArray += elem;
    }
    return sumOfArray <= 400;
  } else {
    return "Invalid";
  }
}


