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
      className="bg-pink border-dark-pink lg:mt-5"
    >
      <div className="flex flex-col gap-6 relative">
        <Image src={EventImage} width={380} height={230} alt="event_image" className="w-full relative z-50" />

        <div className="absolute -top-36 left-10 hidden lg:block">
          <Image src={YoungBoyYoungGirlImage} width={250} height={250} alt="young_boy_young_girl_image"  />
        </div>

        <div className="absolute -top-[7rem] left-[19rem] hidden lg:block w-[90px]">
          <Image src={EcologyEarthImage} width={90} height={126} alt="ecology_earth_image" className="w-full"  />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-playfair-display text-5xl font-semibold">RelaJe</h3>
        <h4 className="font-playfair-display text-2xl font-semibold">Browse Engaging:</h4>
        <ul className="list-disc ml-6">
          {RELAJE_ARR?.map(text => (
            <li key={text} className="font-alegreya-sans font-medium text-xl">{text}</li>
          ))}
        </ul>
      </div>
    </FramerMotion>
  )
}

export default Relaje;
