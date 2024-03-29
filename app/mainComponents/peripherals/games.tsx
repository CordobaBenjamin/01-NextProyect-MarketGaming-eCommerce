import Image from "next/image";

const GamesComponents = () => {
    return(
        <div className="Juegos">
            <a href="./HTML Pagess/Marketproduct.html" > 
                <Image
                        src="/images/src app/Steam.png" 
                        alt="Cables" 
                        width={300}  
                        height={200}
                    /> 
            <h4> Juegos </h4> </a>
        </div>
    )
};

export default GamesComponents;
