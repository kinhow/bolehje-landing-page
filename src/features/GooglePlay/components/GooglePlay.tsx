import Link from "next/link";
import Image from "next/image";
import YoungWomanImage from "../assets/young-woman.svg"
import GooglePlayImage from "../assets/google_play.png";
import { FramerMotion } from "@/components";

const GooglePlay = () => {
  return (
    <FramerMotion delay={1.8} id="download-google-play" className="bg-[#FFE5C1] border-[#DAC3A4] w-full md:w-[300px] h-[257px]">
      <h3 className="font-playfair-display text-2xl font-semibold text-right ml-5 md:ml-0">Ready for BolehJe? Download Now!</h3>

      <div className="absolute -bottom-6 -left-4">
        <Image src={YoungWomanImage} width={198} height={268} alt="young_women" />
      </div>

      <Link
        target="_blank"
        className="absolute bottom-16 -right-8"
        href="https://play.google.com/store/apps/details?id=com.exalumen.bolehje_app"
      >
        <Image src={GooglePlayImage} width={280} height={59} alt="google_play" />
      </Link>
    </FramerMotion>
  )
}

export default GooglePlay;
