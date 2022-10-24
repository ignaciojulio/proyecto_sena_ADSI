/* Seleccionando los elementos del DOM. */
// selectores de productos
const cardsContainer = document.querySelector('.cards-container');
// selectores de menu
const menuContent = document.querySelector('.menu-content');
const buttonMenu = document.querySelector('.button_menu-item');
const buttonCloseMenu = document.querySelector('.button-close');
// selectores de posición
// botones
const buttonItems = document.querySelector('.content_footer-content_items');
const buttonInventario = document.querySelector('.content_footer-content_inventory');
const buttonEstadísticas = document.querySelector('.content_footer-content_levels');
const presentPosition = document.querySelector('.present_position');
// 

/* Agregar un detector de eventos */
// menu
buttonMenu.addEventListener('click', cambio => toggleElement(menuContent,'transición'));
buttonCloseMenu.addEventListener('click', cambio => toggleElement(menuContent,'transición'));



// footer
buttonItems.addEventListener('click', selección => { positionSelectors('Items') });
buttonInventario.addEventListener('click', selección => { positionSelectors('Inventario') });
buttonEstadísticas.addEventListener('click', selección => { positionSelectors('Estadísticas') });

function positionSelectors(selección) {
    Position = elem => elem.querySelector('.footer_nav-linea_decorativa');

    if (selección == 'Items') {
        buttonItems.lastElementChild.classList.remove('inactive')
        Position(buttonItems).previousElementSibling.classList.add('present_position')

        buttonInventario.lastElementChild.classList.add('inactive')
        Position(buttonInventario).previousElementSibling.classList.remove('present_position')

        buttonEstadísticas.lastElementChild.classList.add('inactive')
        Position(buttonEstadísticas).previousElementSibling.classList.remove('present_position')

    } else if (selección === 'Inventario') {
        buttonItems.lastElementChild.classList.add('inactive')
        Position(buttonItems).previousElementSibling.classList.remove('present_position')

        buttonInventario.lastElementChild.classList.remove('inactive')
        Position(buttonInventario).previousElementSibling.classList.add('present_position')

        buttonEstadísticas.lastElementChild.classList.add('inactive')
        Position(buttonEstadísticas).previousElementSibling.classList.remove('present_position')

    } else if (selección === 'Estadísticas') {
        buttonItems.lastElementChild.classList.add('inactive')
        Position(buttonItems).previousElementSibling.classList.remove('present_position')

        buttonInventario.lastElementChild.classList.add('inactive')
        Position(buttonInventario).previousElementSibling.classList.remove('present_position')

        buttonEstadísticas.lastElementChild.classList.remove('inactive')
        Position(buttonEstadísticas).previousElementSibling.classList.add('present_position')
    };
};


function toggleElement(elemento,propiedad) {
        elemento.classList.toggle(propiedad);
};

// area productos
const productList = [];

for (var i = 0; i < 50; i++) {
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
};



/**
 * Toma una matriz de objetos, crea un div para cada objeto y agrega el div al DOM.
 * @param arr - una matriz de objetos
 */
function renderProducts(arr) {
    /**Agrega comas a un número.
    * @param x - El número a formatear.
    * @returns el valor de las partes variables.*/
    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts.join(".");
    }
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // const v = 1 + arr.lastIndexOf(product)
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + numberWithCommas(product.price);// + '[' + v + ']';
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        productInfo.appendChild(productInfoDiv);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);