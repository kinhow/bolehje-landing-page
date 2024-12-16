import { FramerMotion } from "@/components";
import Image from "next/image";
import MoreFeaturesImage from "../assets/more-features.png";

const MoreFeatures = () => {
  return (
    <FramerMotion delay={1.5} id="more-features" className="!p-0 border-none h-[257px]">
      <Image src={MoreFeaturesImage} width={480} height={257} alt="more_features_image" />
    </FramerMotion>
  )
}

export default MoreFeatures;
