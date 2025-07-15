
export function formatDiscountedPrice(price: number) {
    return Math.floor(price);
}

 export function renderStars(score: number): string {
  const stars = Math.ceil(score);
  return '⭐'.repeat(stars);
}

export function formarDate(date: string): string {
    return new Intl.DateTimeFormat('es-ES', { 
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(new Date(date));
}