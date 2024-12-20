import { Name, Email, Enquiry, Organization, PhoneNumber } from ".";
import { useForm, FormProvider } from "react-hook-form"
import { submitFormToBrevoAPI, submitFormToGoogleSheets } from "../../utils";

const OrganizeEventForm = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    submitFormToBrevoAPI(data);
    submitFormToGoogleSheets(data);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <Name />
        <Organization />
        <PhoneNumber />
        <Email />
        <Enquiry />
        <button className="p-4 bg-purple rounded text-white text-lg font-alegreya-sans w-[9.75rem]">Submit</button>
      </form>
    </FormProvider>
  )
}

export default OrganizeEventForm;
