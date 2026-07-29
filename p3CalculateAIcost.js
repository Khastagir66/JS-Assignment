function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed === "number" && tokensUsed > 0) {
    if (tokensUsed > 500) {
      return Math.floor((tokensUsed - 500) / 100) * 5;
    }
  } else {
    return "Invalid";
  }
}

console.log(calculateAiCost(1100));
