'use client'
import { useMode } from "@/app/css/colors Switcher/modeSwitcher";
import Colors from "@/app/css/colors Switcher/colors";
import { ModeSwitcher } from "@/app/css/colors Switcher/modeSwitcher";

const Footer = () => {
    const { mode } = useMode();
    const {bg, textMain, textSecondary, textHover, borderY, borderB } = Colors[mode];
    return (
        <footer className={`${bg} pb-4`}>
            <div className={`${borderY} border-2 mx-2 py-4 flex flex-col justify-center xl:mx-0 xl:border-0`}> 
                <ul className={`mx-auto mb-4 w-fit`}>
                    <li className={`${textMain} ${textHover} ${borderB} border-2 pb-px font-bold text-lg w-fit mx-auto`}> <a  target="_blank" > Preguntas Frecuentes </a> </li>
                    <li className={`${textMain} ${textHover} ${borderB} border-2 pt-2 pb-px font-bold text-lg w-fit mx-auto `}> <a target="_blank"  > Contactanos </a> </li>
                    <li className={`${textMain} ${textHover} ${borderB} border-2 pt-2 pb-px font-bold text-lg w-fit mx-auto`}> <a  target="_blank" > Quienes Somos </a> </li>
                    <li className={`${textMain} ${textHover} ${borderB} border-2 pt-2 pb-px font-bold text-lg w-fit mx-auto`}> <a  target="_blank" > Terminos de uso </a> </li>
                </ul>
            
                <section className={`mx-auto  `}>
                    <address className={`${textSecondary}`}> © 2023 MarketGaming, todos los derechos reservados. </address>
                </section>
            </div>
        </footer>
    )
  
};

export default Footer;