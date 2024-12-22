import { useFormContext, FieldError } from "react-hook-form";
import { InputLabel, TextField, ErrorMessage } from "@/components";

const Email = () => {
  const { register, formState: { errors } } = useFormContext();
  const hasError = typeof errors.email !== "undefined";

  return (
    <div className="flex flex-col gap-2">
      <InputLabel>Email</InputLabel>
      <TextField
        fullWidth
        placeholder="eg: abc@mail.com"
        {...register("email", {
          required: "Email address is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please include an '@' in the email address."
          }
        })}
      />
      <ErrorMessage hasError={hasError} message={(errors.email as FieldError)?.message} />
    </div>
  )
}

export default Email;
