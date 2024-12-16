import Image from "next/image";
import MainLogo from "@/assests/logo.svg";

const Logo = () => {
  return (
    <Image src={MainLogo} width={106} height={97} alt="logo" />
  )
}

export default Logo;
