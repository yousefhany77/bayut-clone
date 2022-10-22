export const priceFormater = (price: number): string => {
  if (!price) return "";
  if (price <= 1000) return `AED ${price}`;
  if (price >= 1000_000) {
    const value = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "AED",
      maximumFractionDigits: 1,
    }).format(price / 1000_000);
    return `${value}M`;
  }
  const value = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(price / 1000)
  return value +"K";
};
