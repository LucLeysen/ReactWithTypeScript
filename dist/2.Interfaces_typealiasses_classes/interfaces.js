const table = {
    name: 'Table',
    unitPrice: 500
};
const chair = {
    name: 'Chair',
    unitPrice: 70
};
const order1 = {
    product: table,
    quantity: 1,
    getTotal(discount) {
        const priceWithoutDiscount = this.product.unitPrice * this.quantity;
        const discountAmount = priceWithoutDiscount * (discount || 0);
        return priceWithoutDiscount - discountAmount;
    }
};
const depthRaider = {
    name: 'depthraider',
    maxRunningDepth: 6
};
const specialTable = {
    name: "table",
    unitPrice: 500,
    discountCodes: [
        { code: "SUMMER10", percentage: 0.1 },
        { code: "BFRI", percentage: 0.2 },
    ]
};
//# sourceMappingURL=interfaces.js.map