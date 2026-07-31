function averageResponseTime(times) {
  let total = 0;
  if (Array.isArray(times) === false) {
    return "Invalid";
  } else if (times.length === 0) {
    return "Invalid";
  }
  for (let elem of times) {
    if (Number.isFinite(elem) === false || elem < 0) {
      return "Invalid";
    }
    total += elem;
  }
  return Number((total / times.length).toFixed(2));
}

// console.log(averageResponseTime([]));
