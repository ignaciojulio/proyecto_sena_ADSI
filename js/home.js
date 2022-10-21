/* Seleccionando el elemento con la clase `cards-container` y almacenándolo en la variable
`cardsContainer`. */
const cardsContainer = document.querySelector('.cards-container');

/**
 * Agrega comas a un número.
 * @param x - El número a formatear.
 * @returns el valor de las partes variables.
 */
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
}

const productList = [];
productList.push({
    name: 'Pack Botellas De Tinta X2 Epson T544',
    price: 74900,
    image: 'https://http2.mlstatic.com/D_NQ_NP_695040-MCO50910272536_072022-O.webp',
});
productList.push({
    name: 'Monitor Dell P2417H led 23.8',
    price: 700000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_715182-MLA45733462217_042021-O.webp',
});
productList.push({
    name: 'Impresora Fotografica Eco-tank L805',
    price: 2500000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_619293-MCO51824442731_102022-O.webp',
});
productList.push({
    name: 'Mouse Gamer Cougar Minos XT RGB',
    price: 100000,
    image: 'https://speedlogic.com.co/wp-content/uploads/2020/12/19126.1.png',
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + numberWithCommas(product.price);
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/3523/3523887.png');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);