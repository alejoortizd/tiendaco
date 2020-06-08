const Carrito = () => {
    const view = `
        <div id="Listcarrito">
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

            <a href="/#/carrito" id="vaciar-carrito">Vaciar Carrito</a>
        </div>
    `;
    return view;
}

export default Carrito;