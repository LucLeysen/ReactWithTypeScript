interface Product {
    name: string;
    unitPrice: Number;
}

const table: Product = {
    name: 'Table',
    unitPrice: 500
}

const chair: Product = {
    name: 'Chair',
    unitPrice: 70
}

interface OrderDetail {
    product: Product;
    quantity: number;
    dateAdded?: Date;
    getTotal(discount?: number): number;
}

const order1: OrderDetail = {
    product: table,
    quantity: 1,

    getTotal(discount: number) {
        const priceWithoutDiscount = this.product.unitPrice * this.quantity;
        const discountAmount = priceWithoutDiscount * (discount || 0);
        return priceWithoutDiscount - discountAmount;
    }
}

// readonly
interface Lure {
    readonly name: string;
    maxRunningDepth: number;
}

const depthRaider: Lure = {
    name: 'depthraider',
    maxRunningDepth: 6
}

// extending interfaces
interface DiscountCode {
    code: string;
    percentage: number;
}

interface ProductWithDiscountCodes extends Product {
    discountCodes: DiscountCode[];
}

const specialTable: ProductWithDiscountCodes = {
    name: "table",
    unitPrice: 500,
    discountCodes: [
        { code: "SUMMER10", percentage: 0.1 },
        { code: "BFRI", percentage: 0.2 },
    ]
}
