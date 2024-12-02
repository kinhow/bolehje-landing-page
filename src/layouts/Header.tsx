import Image from "next/image";
import Logo from "@/assests/logo.svg";

const Header = () => {
  return (
    <header className="flex gap-4 flex-col">
      <div className="flex justify-between items-center container">
        <Image src={Logo} width={106} height={97} alt="logo" />
        <div className="bg-purple text-white px-3.5 py-1.5 rounded-full font-alegreya-sans text-xl">Organize your events with us!</div>
      </div>
      <div className="flex items-center flex-col gap-8">
        <h1 className="font-playfair-display font-semibold text-7xl text-dark-blue">Unlock the Universe</h1>
        <h3 className="font-alegreya-sans text-2xl text-dark-blue">Where Every Dream Takes Flight</h3>
      </div>
    </header>
  )
}

export default Header;
