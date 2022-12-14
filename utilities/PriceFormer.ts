export const priceFormater = (
  price: number,
  short = true
): string => {
  if (!price) return "";
  if (price <= 1000) return `AED ${price}`;
  if (short) {
    if (price >= 1000_000) {
      const value = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "AED",
        maximumFractionDigits: 1,
      }).format(price / 1000_000);
      return `${value}M`;
    }
    const value = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "AED",
      maximumFractionDigits: 0,
    }).format(price / 1000);
    return value + "K";
  } else
    return new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "AED",
      maximumFractionDigits: 0,
    }).format(price);
};
