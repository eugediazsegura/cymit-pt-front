
export function formatDiscountedPrice(price: number) {
    return Math.floor(price);
}

 export function renderStars(score: number): string {
  const stars = Math.ceil(score);
  return '⭐'.repeat(stars);
}