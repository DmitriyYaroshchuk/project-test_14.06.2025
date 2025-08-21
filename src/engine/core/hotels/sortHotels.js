function sortHotels(items, sortValue) {
    switch (sortValue) {
        case 'price-up': {
            return items.sort((a, b) => a.price_per_night - b.price_per_night)
        }
            case 'price-down': {
                return items.sort((a, b) => b.price_per_night - a.price_per_night);
            }
        case 'rating-up': {
            return items.sort((a, b) => (a.hotel_rating || 0) - (b.hotel_rating || 0));
        }
        case 'rating-down': {
            return items.sort((a, b) => (b.hotel_rating || 0) - (a.hotel_rating || 0))
        }
        default: {
            return items;
        }
    }
}
export default sortHotels;