import { FramerMotion } from "@/components";
import Image from "next/image";
import MenAndGirl from "../assets/men-and-girl.png";

const AnatomyOfBolehJe = () => {
  return (
    <FramerMotion delay={1.2} id="anatomy-of-bolenje" className="border-none !px-0 !py-0">
      <Image src={MenAndGirl} width={750} height={553} alt="men_and_girl" className="w-full" />
    </FramerMotion>
  )
}

export default AnatomyOfBolehJe;
