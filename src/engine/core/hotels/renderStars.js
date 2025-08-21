function renderStars(starCount) {
    const fullStar = '★';
    const emptyStar = '☆';
    const maxStars = 5;
    return fullStar.repeat(starCount) + emptyStar.repeat(maxStars - starCount);
}
export default renderStars;