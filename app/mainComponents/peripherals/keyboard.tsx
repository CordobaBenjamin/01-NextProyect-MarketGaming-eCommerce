import Image from "next/image";

const KeyboardComponents = () => {
    return(
        <div className="teclados">
            <a href="./HTML Pagess/Marketproduct.html" id="tecladolink" data-categoria="Teclados" > 
                    <Image
                        src="/images/src app/Teclado.png" 
                        alt="Cables" 
                        width={300}  
                        height={200}
                    /> 
            <h4> Teclados </h4> </a>
        </div>
    )
};

export default KeyboardComponents;