import { useFormContext } from "react-hook-form";
import { InputLabel, TextField } from "@/components";

const Enquiry = () => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <InputLabel>Enquiry</InputLabel>
      <TextField
        fullWidth
        multiline
        rows={4}
        {...register("enquiry")} 
        placeholder="We interested to use your platform. Can’t wait to discuss further on this exciting opportunity."
      />
      {/* <ErrorMessage hasError={hasError} message={(errors.enquiry as FieldError)?.message} /> */}
    </div>
  )
}

export default Enquiry;
