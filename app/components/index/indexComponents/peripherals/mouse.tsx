import Image from "next/image";

const MouseComponents = () => {
    return(
        <div className="Mouse">
            <a href="./HTML Pagess/Marketproduct.html"  > 
                    <Image
                        src="/images/src app/Mouse.png" 
                        alt="Cables" 
                        width={300}  
                        height={200}
                    /> 
            <h4> Mouse </h4> </a>
        </div>
    )
};

export default MouseComponents;