import Image from "next/image";
import EventImage from "../assets/event.svg";
import EcologyEarthImage from "../assets/ecology-earth.svg";
import YoungBoyYoungGirlImage from "../assets/young-boys-young-girl.svg";
import { RELAJE_ARR } from "../constants";
import { FramerMotion } from "@/components";

const Relaje = () => {
  return (
    <FramerMotion
      delay={0.9}
      id="relaje"
      className="bg-pink border-dark-pink h-[316px]"
    >
      <div className="flex flex-row-reverse">
        <div className="flex flex-col gap-6">
          <h3 className="font-playfair-display text-5xl font-semibold">RelaJe</h3>
          <h4 className="font-playfair-display text-2xl font-semibold">Browse the <br /> exciting :</h4>
          <ul className="list-disc ml-6">
            {RELAJE_ARR?.map(text => (
              <li key={text} className="font-alegreya-sans font-medium text-xl">{text}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute -top-16 -left-10">
        <Image src={YoungBoyYoungGirlImage} width={250} height={250} alt="young_boy_young_girl_image"  />
      </div>

      <div className="absolute -top-1 left-52">
        <Image src={EcologyEarthImage} width={90} height={126} alt="ecology_earth_image"  />
      </div>

      <div className="absolute -left-20 -bottom-14">
        <Image src={EventImage} width={380} height={230} alt="event_image"  />
      </div>
    </FramerMotion>
  )
}

export default Relaje;
