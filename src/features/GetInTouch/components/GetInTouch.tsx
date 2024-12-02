import Link from "next/link";
import Image from "next/image";
import SMS from "../assets/sms.svg";
import Email from "../assets/email.svg";
import HeadsetWithComputerImage from "../assets/headset-using-computer.svg";
import { FramerMotion } from "@/components";
import { SOCIAL_ICON_ARR } from "../constants";

const GetInTouch = () => {
  return (
    <FramerMotion delay={2.1} id="get-in-touch" className="bg-light-gray border-gray h-[257px] w-full">
      <div className="flex gap-6 flex-col">
        <h3 className="font-playfair-display text-[2rem] font-semibold text-center">Get In Touch</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Image src={Email} width={24} height={24} alt="email" />
            <Link href="mailto:bolehje@exalumen.com" className="underline font-alegreya-sans text-xl font-medium">bolehje@exalumen.com</Link>
          </div>

          <div className="flex gap-4 items-start">
            <Image src={SMS} width={24} height={24} alt="sms" />
            <div>
              <p className="font-alegreya-sans text-xl font-medium">+6o17-5972857</p>
              <p className="font-alegreya-sans text-xl font-medium">+6o11-16182857</p>
            </div>
          </div>

          <div className="flex gap-4">
            {SOCIAL_ICON_ARR?.map(item => (
              <Link href={item.href} key={item.alt} target="_blank">
                <Image src={item.icon} alt={item.alt} width={40} height={40} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 -right-8">
        <Image src={HeadsetWithComputerImage} width={160} height={197} alt="headset_with_computer"  />
      </div>
    </FramerMotion>
  )
}

export default GetInTouch;
