import productsBaseData from "./dataBase_products";

interface Product {
    stock:number,
    categoria:string,
    img:string,
    nombre:string,
    precio:number,
    arreglo?:string,
    id:number,
  };

export const productsCards = () => {

    let productosConteiner = document.getElementById("product_div");
    let filter_array = [];

    // Metodo para crear un "section" utlizando los datos de "../dataBase_products.tsx"
    const crearproductos = (data:Product[]) => {

      if (productosConteiner !== null) 
      {productosConteiner.innerHTML = "<id='product_div'></>";}  

      data.forEach((producto) => {
        let productblock = document.createElement("section");
        productblock.classList.add("productosdiv");
        productblock.setAttribute("id", `${producto?.categoria}`);
    
        productblock.innerHTML = ` 
                                    <div class="imgDiv">
                                    <img src="${producto?.img}" alt="${producto?.nombre}" id="${producto?.arreglo}">
                                    </div>
                                    <div class="priceticket"> 
                                        <h5>${producto?.nombre}</h5>
                                        <h5>$${producto?.precio}</h5>
                                        <button data-nombre="${producto?.nombre}" data-precio="${producto?.precio}" onclick=buyitem(event) class="buttonshop">Sumar al carrito</button>
                                    </div>
            
            `;

        if (productosConteiner !== null) 
        {productosConteiner.appendChild(productblock);}    

      });
    };
    
    crearproductos(productsBaseData);
};

export default productsCards;