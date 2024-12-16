import { useFormContext, FieldError } from "react-hook-form";
import { InputLabel, TextField, ErrorMessage } from "@/components";

const Name = () => {
  const { register, formState: { errors } } = useFormContext();
  const hasError = typeof errors.name !== "undefined";

  return (
    <div className="flex flex-col gap-2">
      <InputLabel>Name</InputLabel>
      <TextField
        fullWidth
        placeholder="Enquirer Name"
        {...register("name", { required: "Your Name is required" })}
      />
      <ErrorMessage hasError={hasError} message={(errors.name as FieldError)?.message} />
    </div>
  )
}

export default Name;
