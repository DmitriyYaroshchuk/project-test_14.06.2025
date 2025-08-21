function filterHotels(hotels, filters) {
    const { countries, stars, priceRange, withPhone } = filters;
    return hotels.filter((hotel) => {
        const inCountry = countries.length === 0 || countries.includes(hotel.city);
        const inStars = stars.length === 0 || stars.includes(hotel.stars);
        const inPrice = hotel.price_per_night >= priceRange[0] && hotel.price_per_night <= priceRange[1];
        const hasPhone = !withPhone || Boolean(hotel.phone_number?.trim());

        return inCountry && inStars && inPrice && hasPhone;
    })
}
export default filterHotels;