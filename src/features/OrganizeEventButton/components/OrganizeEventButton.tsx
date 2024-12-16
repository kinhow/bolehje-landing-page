import { OrganizeEventContent } from ".";
import { useDialogContext } from "@/context";

const OrganizeEventButton = () => {
  const { handleDialogOpen } = useDialogContext();

  return (
    <>
      <button
        type="button"
        onClick={handleDialogOpen}
        className="bg-purple text-white px-3.5 py-1.5 rounded-full font-alegreya-sans text-xl"
      >
        Organize your events with us!
      </button>
      <OrganizeEventContent />
    </>
  )
}

export default OrganizeEventButton;
