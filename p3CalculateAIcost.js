function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }
  if (tokensUsed === 0 || tokensUsed < 500) {
    return 0;
  }

  if (tokensUsed >= 500) {
    return Math.floor((tokensUsed - 500) / 100) * 5;
  }
}

