import Header from '../templates/Header';
import Home from '../pages/Home';
import Carrito from '../pages/Carrito';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


const routes = {
    '/': Home,
    '/carrito': Carrito,
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

    const car = document.getElementById('list-carrito');
    const ropas = document.getElementById('Ropas');
    const added = document.querySelector('#lista-carrito tbody');
    const vaciarCarrito = document.getElementById('vaciar-carrito')

    await cargarEventListeners();

    function cargarEventListeners(){
        ropas.addEventListener('click', comprar);
        car.addEventListener('click', eliminar);
        vaciarCarrito.addEventListener('click', vaciarCarritoBtn);
        document.addEventListener('DOMContentLoaded', leerLS);
    }

    function comprar(e) {
        e.preventDefault();
        if(e.target.classList.contains('carrito')){
            const ropa = e.target.parentElement.parentElement.parentElement;
            leerDatosCompra(ropa);
        };
    }

    function leerDatosCompra(ropa) {
        const infoRopa = {
            image: ropa.querySelector('img').src,
            description: ropa.querySelector('h3').textContent,
            price: ropa.querySelector('h2').textContent,
            id: ropa.querySelector('a').getAttribute('data-id')
        }

        insertarCarrito(infoRopa);

        function insertarCarrito(ropa) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${ropa.image}" width=100>
                </td>
                <td>${ropa.description}</td>
                <td>${ropa.price}</td>
                <td>
                    <a href="/#" class="borrar" data-id="${ropa.id}">X</a>
                </td>
            `;
            added.appendChild(row);
            guardarInfoLS(ropa);
        }
    }
    function eliminar(e) {
        e.preventDefault();
        let ropaEli;
        if (e.target.classList.contains('borrar')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    function vaciarCarritoBtn() {
        while(added.firstChild) {
            added.removeChild(added.firstChild);
        };
        vaciarLocalStorage();
    }
    function guardarInfoLS(ropa) {
        let clothes;
        clothes = obtenerRopaLS();
        clothes.push(ropa);
        localStorage.setItem('clothes', JSON.stringify(clothes));
    }
    function obtenerRopaLS() {
        let rls;
        // Comprobamos si hay algo en LS
        if (localStorage.getItem('clothes') === null) {
            rls = [];
        } else {
            rls = JSON.parse(localStorage.getItem('clothes'));
        }
        return rls;
    }
    function leerLS() {
        let rls;
        rls = obtenerRopaLS();
        rls.forEach(ropa => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${ropa.image}" width=100>
                </td>
                <td>${ropa.description}</td>
                <td>${ropa.price}</td>
                <td>
                    <a href="/#" class="borrar" data-id="${ropa.id}">X</a>
                </td>
            `;
            added.appendChild(row);
        });
    }
    function vaciarLocalStorage() {
        localStorage.clear();
    }
};

export default router;