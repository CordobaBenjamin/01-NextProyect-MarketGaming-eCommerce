import CablesComponents from "./peripherals/cables"
import Components from "./peripherals/components"
import GamesComponents from "./peripherals/games"
import HeadphonesComponents from "./peripherals/headphones"
import KeyboardComponents from "./peripherals/keyboard"
import MouseComponents from "./peripherals/mouse"


export const Article = () => {
  return (
    <article className="main" id="pages"> 

    <div className="one-file"> 
        <MouseComponents/>
        <KeyboardComponents/>
    </div>  

    <div className="two-file">
        <HeadphonesComponents/>
        <Components/>
    </div>

    <div className="three-file">
        <GamesComponents/>
        <CablesComponents/>
    </div>    
        
</article>
  )
}

export default Article;