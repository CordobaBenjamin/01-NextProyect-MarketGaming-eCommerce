import Image from "next/image";

const CablesComponents = () => {
    return (
        <div className="Cables">
            <a href="./HTML Pagess/Marketproduct.html">
                <div className="image-wrapper">
                    <Image 
                        src="/images/src app/Cables.png" 
                        alt="Cables" 
                        width={300}  
                        height={200}
                    />
                </div>
            </a>
            <h4> Cables </h4> 
        </div>
    );
};

export default CablesComponents;