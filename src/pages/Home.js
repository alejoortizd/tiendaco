import getData from '../utils/getData';

const Home = async () => {
    const ropas = await getData();
    const view = `
        <div class="Ropas" id="Ropas">
            ${ropas.results.map(ropa => `
                <div class="Ropas-item" id="Ropas-item">
                    <img src="${ropa.image}" alt="${ropa.category}">
                    <div class="info">
                        <h3>${ropa.description}</h3>
                        <h2>${ropa.price}</h2>
                        <a href="/#" data-id="${ropa.id}">
                            <button class="carrito" style="border-radius:20%; margin-left: 150px; background-color: #89AAFF" id="carrito">Agregar al carrito</button>
                        </a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    return view;
};

export default Home;