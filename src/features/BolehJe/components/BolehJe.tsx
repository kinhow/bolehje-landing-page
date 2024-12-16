import { FramerMotion } from "@/components";
import { BOLEHJE_LIST_ARR } from "../constants";

const BolehJe = () => {
  return (
    <FramerMotion
      delay={0.3}
      id="boleh-je"
      className="bg-light-purple border-dark-purple"
    >
      <h3 className="font-trirong text-[5.375rem] font-semibold">BolehJe</h3>
      <ul className="list-disc ml-6 font-trirong">
        {BOLEHJE_LIST_ARR?.map(text => (
          <li key={text} className="text-lg">{text}</li>
        ))}
      </ul>
    </FramerMotion>
  )
}

export default BolehJe;
