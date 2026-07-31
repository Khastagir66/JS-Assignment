function topRatedRestaurant(restaurants) {
  if (Array.isArray(restaurants) === false || restaurants.length === 0) {
    return "Invalid";
  }

  let topRating = 0;
  let topRestaurantName = null;

  for (let restaurant of restaurants) {
    if (restaurant.rating > topRating) {
      topRating = restaurant.rating;
      topRestaurantName = restaurant.name;
    }
  }

  return topRestaurantName.toUpperCase();
}


