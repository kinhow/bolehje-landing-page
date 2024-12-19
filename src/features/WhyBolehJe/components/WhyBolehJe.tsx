import Image from "next/image";
import CasualLife from "../assests/casual-life.svg";
import WhyBolehJeProfileImage from "../assests/why_boleh_je.svg";
import { FramerMotion } from "@/components";
import { WHY_BOLEHJE_CONTENT_ARR } from "../constant";

const WhyBolehJe = () => {
  return (
    <FramerMotion
      delay={0.6}
      id="why-boleh-je"
      className="bg-light-blue border-lightness-blue !py-4"
    >
      <h3 className="font-playfair-display text-[2rem] font-semibold mt-[-1.2rem]">Why BolehJe?</h3>
      <div className="flex flex-col gap-2">
        {WHY_BOLEHJE_CONTENT_ARR?.map(item => (
          <div key={item.title} className="font-alegreya-sans font-normal text-lg">
            <strong className="font-alegreya-sans">{item.title}</strong>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className="hidden md:block absolute -top-48 right-0 z-99">
        <Image src={CasualLife} width={215} height={206} alt="casual_life" />
      </div>
      <div className="hidden md:block absolute -top-20 -right-9">
        <Image src={WhyBolehJeProfileImage} width={361} height={145} alt="why_boleh_je_profile" />
      </div>
    </FramerMotion>
  )
}

export default WhyBolehJe;
