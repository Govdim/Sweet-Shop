let cakes = [
    {src: "images/catalog/cake-1.jpg", name: "Рыжик с ягодой", price: "1200"},
    {src: "images/catalog/cake-2.jpg", name: "Красный бархат", price: "1540"},
    {src: "images/catalog/cake-3.jpg", name: "Розовое безе", price: "1650"},
    {src: "images/catalog/cake-4.jpg", name: "Морковный", price: "1550"},
    {src: "images/catalog/cake-5.jpg", name: "Оникс", price: "1680"},
    {src: "images/catalog/cake-6.jpg", name: "Фундучитто", price: "1540"},
    {src: "images/catalog/cake-7.jpg", name: "Персиковый", price: "950"},
    {src: "images/catalog/cake-8.jpg", name: "Птичье молоко", price: "700"},
    {src: "images/catalog/cake-9.jpg", name: "Чизкейк", price: "1400"},
    {src: "images/catalog/cake-10.jpg", name: "Сластёна", price: "2000"}
];

let catalog = document.querySelector(".catalog");
for(let index = 0; index < cakes.length; index++){
    let catalogItem = document.createElement("div");
    catalogItem.style.position = "relative"

    catalogItem.innerHTML =
        "<svg width='200' height='400'>\n" +
        "<rect width='100%' height='100%' rx='40' fill='#a22633'/>\n" +
        "<rect width='97%' height='85%' x='1.5%' y='0.7%' rx='38' fill='white'/>\n" +
        "<rect width='97%' height='15%' x='1.5%' y='71%' fill='white'/>\n</svg>";

    let item = cakes[index];
    catalogItem.innerHTML += "<img class='catalog-item-image' src='" + item["src"] + "' alt='" + item["name"] + "'>";
    catalogItem.innerHTML += "<p class='catalog-item-name'>\n<span> " + item["name"] + " </span>\n</p>";
    catalogItem.innerHTML += "<p class='catalog-item-price'>\n<span> " + item["price"] + "₽ </span>\n</p>"
    catalogItem.innerHTML += "<a class='catalog-item-buy' href onclick='buyItem()'> КУПИТЬ </a>";

    catalog.append(catalogItem);
}

function buyItem(){
    alert("СПАСИБО ЗА ПОКУПКУ :)")
}