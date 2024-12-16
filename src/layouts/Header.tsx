import { Logo } from "@/components";
import { OrganizeEventButton } from "@/features";

const Header = () => {
  return (
    <header className="flex gap-4 flex-col">
      <div className="flex justify-between items-center container">
        <Logo />
        <OrganizeEventButton />
      </div>
      <div className="flex items-center flex-col gap-8">
        <h1 className="font-playfair-display font-semibold text-7xl text-dark-blue">Unlock the Universe</h1>
        <h3 className="font-alegreya-sans text-2xl text-dark-blue">Where Every Dream Takes Flight</h3>
      </div>
    </header>
  )
}

export default Header;
