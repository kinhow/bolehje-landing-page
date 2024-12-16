import { useFormContext, FieldError } from "react-hook-form";
import { InputLabel, TextField, ErrorMessage } from "@/components";

const PhoneNumber = () => {
  const { register, formState: { errors } } = useFormContext();
  const hasError = typeof errors.phone !== "undefined";

  return (
    <div className="flex flex-col gap-2">
      <InputLabel>Phone number</InputLabel>
      <TextField
        fullWidth
        placeholder="eg : +60123456789"
        {...register("phone", { 
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'Invalid phone number',
          },
        })}
      />
      <ErrorMessage hasError={hasError} message={(errors.phone as FieldError)?.message} />
    </div>
  )
}

export default PhoneNumber;
