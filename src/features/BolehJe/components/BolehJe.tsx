import { FramerMotion } from "@/components";
import { BOLEHJE_LIST_ARR } from "../constants";

const BolehJe = () => {
  return (
    <FramerMotion
      delay={0.3}
      id="boleh-je"
      className="bg-light-purple border-dark-purple"
    >
      <h3 className="font-playfair-display text-[5.375rem] font-semibold">BolehJe</h3>
      <div className="flex flex-col gap-2">
        {BOLEHJE_LIST_ARR?.map(text => (
          <p key={text} className="font-alegreya-sans text-lg">{text}</p>
        ))}
      </div>
    </FramerMotion>
  )
}

export default BolehJe;
