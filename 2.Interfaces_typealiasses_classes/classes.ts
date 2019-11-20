class Furniture {
    name: string;
    unitPrice: number;
}

const dinerTable = new Furniture();
dinerTable.name = "eet tafel";
dinerTable.unitPrice = 500;

class Order implements IOrderDetail {
    furniture: Furniture;
    quantity: number;

    constructor(furniture: Furniture, quantity: number = 1) {
        this.furniture = furniture;
        this.quantity = quantity;
    }

    getTotal(discount: number): number {
        const priceWithoutDiscount = this.furniture.unitPrice * this.quantity;
        const discountAmount = priceWithoutDiscount * (discount || 0);
        return priceWithoutDiscount - discountAmount;
    }
}

interface IOrderDetail {
    furniture: Furniture;
    quantity: number;

    getTotal(discount: number): number;
}

const orderByMe = new Order(dinerTable);
const orderByYou = new Order(dinerTable, 5);

class FurnitureWithDiscount extends Furniture {
    discountCodes: DiscountCode[];
}

class OrderWithDiscount extends Order {

    constructor(furniture: Furniture, quantity?: number) {
        super(furniture, quantity)
    }

    discountCode: DiscountCode;
}

class article {
    private _unitPrice: number;
    get unitPrice(): number {
        return this._unitPrice || 0;
    }

    set unitPrice(value: number) {
        if (value < 0) {
            value = 0;
        }
        this._unitPrice = value;
    }
}