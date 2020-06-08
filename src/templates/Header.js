const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        Pharo
                    </a>
                </h1>
            </div>
            <div class="Header-nav">
                <ul>
                    <li class=submenu>
                        <img src="img/cart.png" style="width:25px;">
                        <div id="list-carrito">
                            <table id="lista-carrito">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                            <a href="/#" id="vaciar-carrito">Vaciar Carrito</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `;
    return view;
}

export default Header;