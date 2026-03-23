
const list = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
            "Your perfect pack for everyday use and walks in the forest.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        rating: { rate: 3.9, count: 120 },
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description: "Slim-fitting style, light weight & soft fabric.",
        category: "men's clothing",
        image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        rating: { rate: 4.1, count: 259 },
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "Great outerwear jackets for all seasons.",
        category: "men's clothing",
        image:
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
        rating: { rate: 4.7, count: 500 },
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description: "Casual slim fit t-shirt.",
        category: "men's clothing",
        image:
            "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
        rating: { rate: 2.1, count: 430 },
    },
    {
        id: 5,
        title: "John Hardy Women's Bracelet",
        price: 695,
        description: "Luxury gold & silver bracelet.",
        category: "jewelery",
        image:
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
        rating: { rate: 4.6, count: 400 },
    },
    {
        id: 6,
        title: "Solid Gold Petite Micropave",
        price: 168,
        description: "Elegant gold jewelry.",
        category: "jewelery",
        image:
            "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
        rating: { rate: 3.9, count: 70 },
    },
    {
        id: 7,
        title: "White Gold Plated Princess Ring",
        price: 9.99,
        description: "Classic engagement ring.",
        category: "jewelery",
        image:
            "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
        rating: { rate: 3, count: 400 },
    },
    {
        id: 8,
        title: "Pierced Owl Rose Gold Earrings",
        price: 10.99,
        description: "Stylish stainless steel earrings.",
        category: "jewelery",
        image:
            "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
        rating: { rate: 1.9, count: 100 },
    },
    {
        id: 9,
        title: "WD 2TB External Hard Drive",
        price: 64,
        description: "Fast USB 3.0 portable storage.",
        category: "electronics",
        image:
            "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
        rating: { rate: 3.3, count: 203 },
    },
    {
        id: 10,
        title: "SanDisk 1TB SSD",
        price: 109,
        description: "High-speed internal SSD.",
        category: "electronics",
        image:
            "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
        rating: { rate: 2.9, count: 470 },
    },
    {
        id: 11,
        title: "Silicon Power 256GB SSD",
        price: 109,
        description: "Fast and reliable SSD.",
        category: "electronics",
        image:
            "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
        rating: { rate: 4.8, count: 319 },
    },
    {
        id: 12,
        title: "WD 4TB Gaming Drive",
        price: 114,
        description: "Portable gaming storage.",
        category: "electronics",
        image:
            "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
        rating: { rate: 4.8, count: 400 },
    },
    {
        id: 13,
        title: "Acer 21.5 inch Monitor",
        price: 599,
        description: "Full HD IPS display.",
        category: "electronics",
        image:
            "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
        rating: { rate: 2.9, count: 250 },
    },
    {
        id: 14,
        title: "Samsung 49 inch Gaming Monitor",
        price: 999.99,
        description: "Ultra-wide curved gaming monitor.",
        category: "electronics",
        image:
            "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
        rating: { rate: 2.2, count: 140 },
    },
    {
        id: 15,
        title: "Women's Snowboard Jacket",
        price: 56.99,
        description: "Warm winter jacket.",
        category: "women's clothing",
        image:
            "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
        rating: { rate: 2.6, count: 235 },
    },
    {
        id: 16,
        title: "Women's Leather Jacket",
        price: 29.95,
        description: "Stylish biker jacket.",
        category: "women's clothing",
        image:
            "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
        rating: { rate: 2.9, count: 340 },
    },
    {
        id: 17,
        title: "Women's Rain Jacket",
        price: 39.99,
        description: "Lightweight raincoat.",
        category: "women's clothing",
        image:
            "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_t.png",
        rating: { rate: 3.8, count: 679 },
    },
    {
        id: 18,
        title: "Women's Boat Neck T-Shirt",
        price: 9.85,
        description: "Soft and stretchable fabric.",
        category: "women's clothing",
        image:
            "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
        rating: { rate: 4.7, count: 130 },
    },
    {
        id: 19,
        title: "Women's Moisture T-Shirt",
        price: 7.95,
        description: "Breathable and lightweight.",
        category: "women's clothing",
        image:
            "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
        rating: { rate: 4.5, count: 146 },
    },
    {
        id: 20,
        title: "Women's Casual Cotton T-Shirt",
        price: 12.99,
        description: "Comfortable daily wear.",
        category: "women's clothing",
        image:
            "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
        rating: { rate: 3.6, count: 145 },
    },
];

export default list;