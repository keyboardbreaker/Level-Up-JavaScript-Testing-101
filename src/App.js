export const add = (x, y) => x + y;

export const total = (shipping, subtotal) => {
    return '£' + add(shipping, subtotal);
};