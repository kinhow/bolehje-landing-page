import { FramerMotion } from "@/components";
import Image from "next/image";
import MoreFeaturesImage from "../assets/more-features.png";

const MoreFeatures = () => {
  return (
    <FramerMotion delay={1.5} id="more-features" className="!p-0 border-none">
      <Image src={MoreFeaturesImage} width={480} height={257} alt="more_features_image" className="w-full md:w-[480px]" />
    </FramerMotion>
  )
}

export default MoreFeatures;
