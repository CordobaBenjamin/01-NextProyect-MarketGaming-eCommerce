import Image from "next/image";
import { useMode } from "@/app/css/colors Switcher/modeSwitcher";
import Colors from "@/app/css/colors Switcher/colors";


const MouseComponents = () => {
  const { mode } = useMode();
  const { border, textMain, textSecondary, overlap, overlap2 } = Colors[mode];

  return (
    <div className={` ${overlap2} rounded-md w-fit m-3 my-6 xl:my-10 `}>
      <a href="/home">
      <div className="relative w-48 h-48 lg:w-64 lg:h-64">
          <Image
            src="/images/src app/mouse_icon.png"
            alt="Cables"
            layout="fill"
            objectFit="cover" 
            className="rounded-md" 
          />
        </div>
        <h4 className={`${textMain} w-fit mx-auto text-2xl font-semibold`}> Mouse </h4>{" "}
      </a>
    </div>
  );
};

export default MouseComponents;
