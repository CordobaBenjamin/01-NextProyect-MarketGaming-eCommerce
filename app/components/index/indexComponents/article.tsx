'use client'
import { useMode } from "@/app/css/colors Switcher/modeSwitcher"
import Colors from "@/app/css/colors Switcher/colors"
import CablesComponents from "./peripherals/cables"
import Components from "./peripherals/components"
import GamesComponents from "./peripherals/games"
import HeadphonesComponents from "./peripherals/headphones"
import KeyboardComponents from "./peripherals/keyboard"
import MouseComponents from "./peripherals/mouse"


export const Article = () => {

  const { mode } = useMode();
  const {bg, textMain, textSecondary, overlap } = Colors[mode];

  return (
    <article className={`${bg}`} id="pages">  

    <section className={`flex mx-auto flex-col w-fit lg:flex-row animate__animated animate__fadeIn animate__slow `}> 
      <div className={`flex flex-row mx-10 xl:flex-col glow `}> 
          <MouseComponents/>
          <KeyboardComponents/>
      </div>  

      <div className={`flex flex-row mx-10 xl:flex-col glow `}>
          <HeadphonesComponents/>
          <Components/>
      </div>

      <div className={`flex flex-row mx-10 xl:flex-col glow `}>
          <GamesComponents/>
          <CablesComponents/>
      </div>    
    </section>
        
</article>
  )
}

export default Article;