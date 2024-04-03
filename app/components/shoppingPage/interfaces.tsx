export interface ProductProps {
    stock?:number,
    categoria:string,
    img:string,
    nombre:string,
    precio:number,
    arreglo?:string,
    id?:number,
  };

 export interface ProductCardProps {
    product?:  ProductProps;
    onAddToCart?: (product: ProductProps) => void;
  };
