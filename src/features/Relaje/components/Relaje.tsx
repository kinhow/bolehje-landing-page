import Image from "next/image";
import EventImage from "../assets/event.png";
import EcologyEarthImage from "../assets/ecology-earth.svg";
import YoungBoyYoungGirlImage from "../assets/young-boys-young-girl.svg";
import { RELAJE_ARR } from "../constants";
import { FramerMotion } from "@/components";

const Relaje = () => {
  return (
    <FramerMotion
      delay={0.9}
      id="relaje"
      className="bg-pink border-dark-pink md:h-[316px] mt-0 md:mt-6"
    >
      <div className="flex flex-col-reverse md:flex-row-reverse gap-6">
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="font-playfair-display text-5xl font-semibold">RelaJe</h3>
          <h4 className="font-playfair-display text-2xl font-semibold block md:hidden">Browse the exciting :</h4>
          <h4 className="font-playfair-display text-2xl font-semibold hidden md:block">Browse the <br /> exciting :</h4>
          <ul className="list-disc ml-6">
            {RELAJE_ARR?.map(text => (
              <li key={text} className="font-alegreya-sans font-medium text-xl">{text}</li>
            ))}
          </ul>
        </div>

        <div className="block md:hidden">
          <Image src={EventImage} width={380} height={230} alt="event_image" className="w-full" />
        </div>
      </div>

      <div className="absolute -top-16 -left-10 hidden md:block">
        <Image src={YoungBoyYoungGirlImage} width={250} height={250} alt="young_boy_young_girl_image"  />
      </div>

      <div className="absolute -top-1 left-52 hidden md:block">
        <Image src={EcologyEarthImage} width={90} height={126} alt="ecology_earth_image"  />
      </div>

      <div className="absolute -left-20 -bottom-14 hidden md:block">
        <Image src={EventImage} width={380} height={230} alt="event_image"  />
      </div>
    </FramerMotion>
  )
}

export default Relaje;
