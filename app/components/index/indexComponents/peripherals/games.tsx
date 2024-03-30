import Image from "next/image";
import Link from "next/link";

const GamesComponents = () => {
    return(
        <div className="Juegos">
            <Link href=".././shoppingPage" > 
                    <Image
                            src="/images/src app/Steam.png" 
                            alt="Cables" 
                            width={300}  
                            height={200}
                        />     
             </Link>
                    <h4> Juegos </h4> 
        
        </div>
    )
};

export default GamesComponents;
