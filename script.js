function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

const products = [
    new Product(1, "iPhone 15 Pro", 29990000, 50, "DienThoai", true),
    new Product(2, "Samsung Galaxy S24", 24990000, 40, "DienThoai", true),
    new Product(3, "MacBook Air M3", 32990000, 20, "Laptop", true),
    new Product(4, "Tủ Lạnh LG Inverter", 18990000, 15, "GiaDung", true),
    new Product(5, "Máy Giặt Panasonic", 15990000, 18, "GiaDung", true),
    new Product(6, "Tai Nghe AirPods Pro", 6490000, 60, "Accessories", true),
];


const productNamesAndPrices = products.map(p => ({
    name: p.name,
    price: p.price
}));

console.log("Câu 3:", productNamesAndPrices);


const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

const hasProductOver30M = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasProductOver30M);


const accessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

console.log("Câu 6:", accessoriesAvailable);

const totalInventoryValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
);

console.log("Câu 7:", totalInventoryValue.toLocaleString("vi-VN"));


console.log("Câu 8:");
for (const p of products) {
    console.log(
        `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`
    );
}


console.log("Câu 9:");
for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}


const sellingAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log("Câu 10:", sellingAndInStockNames);
