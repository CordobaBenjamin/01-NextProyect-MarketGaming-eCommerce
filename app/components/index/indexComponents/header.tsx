'use client'
import { useMode } from "@/app/css/colors Switcher/modeSwitcher";
import Colors from "@/app/css/colors Switcher/colors";
import { ModeSwitcher } from "@/app/css/colors Switcher/modeSwitcher";

const Header = () => {

    const { mode } = useMode();
    const {bg, borderY, textMain, textSecondary, overlap } = Colors[mode];

    return(
            <header className={`${bg} ${overlap}`}>
                <div className={`flex flex-col`}> 
                    {/* <ModeSwitcher/> */}
                    <div className={` ${borderY} border-4 flex flex-col mx-auto mt-5 mb-2 p-4 xl:mx-0 xl:border-0`}> 
                        <h1 className={` ${textSecondary} text-5xl font-semibold mx-4 mb-2 sm:mx-auto xl:text-9xl`}> MarketGaming </h1> 
                        <h4 className={` ${textMain} text-md xl:text-lg mx-auto font-semibold`}> Tu pagina favorita de productos Gamers</h4>
                        <h4 className={` ${textMain} text-md xl:text-lg mx-auto font-semibold`}> De los creadores de 'MarketPlace' </h4>
                    </div>
                </div>
            </header>
    )
};

export default Header;