import { useDialogContext } from "@/context";
import { paperClasses } from "@mui/material";
import { Dialog, Transition, Logo } from "@/components";
import { OrganizeEventForm } from "../OrganizeEventForm";
import Image from "next/image";
import CloseIcon from "../../assets/close-icon.svg";
import CasualLifeImage from "../../assets/life-colleagues.png";

const OrganizeEventContent = () => {
  const { isDialogOpen, handleDialogClose } = useDialogContext();

  return (
    <Dialog
      fullWidth
      open={isDialogOpen}
      onClose={handleDialogClose}
      TransitionComponent={Transition}
      sx={{
        [`& .${paperClasses.root}`]: {
          padding: "2rem",
          maxWidth: "770px",
          borderRadius: "1.25rem",
          backgroundColor: "#FAFAFA"
        }
      }}
    >
      <div className="flex gap-4 flex-col">
        <button onClick={handleDialogClose} className="flex flex-row-reverse">
          <Image src={CloseIcon} width={14} height={14} alt="close_icon" />
        </button>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 items-center">
            <Logo />
            <Image src={CasualLifeImage} width={264} height={418} alt="casual_life_image" />
          </div>
          <div className="flex gap-12 flex-col">
            <h2 className="font-playfair-display font-medium text-2xl">Interested to be part of our early adopter? Join us.</h2>
            <OrganizeEventForm />
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default OrganizeEventContent;
