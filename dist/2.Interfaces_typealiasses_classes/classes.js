class Furniture {
}
const dinerTable = new Furniture();
dinerTable.name = "eet tafel";
dinerTable.unitPrice = 500;
class Order {
    constructor(furniture, quantity = 1) {
        this.furniture = furniture;
        this.quantity = quantity;
    }
    getTotal(discount) {
        const priceWithoutDiscount = this.furniture.unitPrice * this.quantity;
        const discountAmount = priceWithoutDiscount * (discount || 0);
        return priceWithoutDiscount - discountAmount;
    }
}
const orderByMe = new Order(dinerTable);
const orderByYou = new Order(dinerTable, 5);
class FurnitureWithDiscount extends Furniture {
}
class OrderWithDiscount extends Order {
    constructor(furniture, quantity) {
        super(furniture, quantity);
    }
}
class article {
    get unitPrice() {
        return this._unitPrice || 0;
    }
    set unitPrice(value) {
        if (value < 0) {
            value = 0;
        }
        this._unitPrice = value;
    }
}
//# sourceMappingURL=classes.js.map