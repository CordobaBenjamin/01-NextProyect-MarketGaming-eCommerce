import React from 'react'

export const Aside = () => {
  return (
    <>
        <aside className='asideproduct'>
            <h2 className="h2aside">Total Del Precio </h2>
                        <div className="carritoproduct">

                            <h5 id="pagarx"> Pagar </h5>
                            <a href="../HTML Pagess/pageform.html" target="_blank" id="pageForPay">
                                <img src="/images/carrito.png" alt="Carrito" className="carritoicon"/>
                            </a>
                            <h4 className="h4carrito" id="totalprice"> </h4>

                            <div className="filterCategory">

                                <div>
                                    <label htmlFor="keyboard">T</label>
                                    <input type="checkbox" id="keyboard" data-categoria="keyboards"/>
                                </div>

                                <div>
                                    <label htmlFor="wires">W</label>
                                    <input type="checkbox" id="wires" data-categoria="wires"/>
                                </div>

                                <div>
                                    <label htmlFor="headphones">A</label>
                                    <input type="checkbox" id="headphones" data-categoria="headphones"/>
                                </div>

                                <div>
                                    <label htmlFor="components" id="componentsLabel">C</label>
                                    <input type="checkbox" id="components" data-categoria="components"/>
                                </div>

                                <div>
                                    <label htmlFor="games">J</label>
                                    <input type="checkbox" id="games" data-categoria="games"/>
                                </div>

                                <div>
                                    <label htmlFor="mouse">M</label>
                                    <input type="checkbox" id="mouse" data-categoria="mouse"/>
                                </div>

                            </div>
                        </div>
        </aside>
    </> )};

export default Aside;