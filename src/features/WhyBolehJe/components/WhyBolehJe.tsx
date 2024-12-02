import Image from "next/image";
import CasualLife from "../assests/casual-life.svg";
import WhyBolehJeProfileImage from "../assests/why_boleh_je.svg";
import { FramerMotion } from "@/components";

const WhyBolehJe = () => {
  return (
    <FramerMotion
      delay={0.6}
      id="why-boleh-je"
      className="bg-light-blue border-lightness-blue h-[266px]"
    >
      <h3 className="font-playfair-display text-[2rem] font-semibold mt-[-1.2rem]">Why BolehJe?</h3>
      <div className="absolute -top-[8.5rem] right-0 z-99">
        <Image src={CasualLife} width={215} height={206} alt="casual_life" />
      </div>
      <div className="absolute -top-6 -right-9">
        <Image src={WhyBolehJeProfileImage} width={361} height={145} alt="why_boleh_je_profile" />
      </div>
    </FramerMotion>
  )
}

export default WhyBolehJe;
