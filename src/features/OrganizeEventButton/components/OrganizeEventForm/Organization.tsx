import { useFormContext, FieldError } from "react-hook-form";
import { InputLabel, TextField, ErrorMessage } from "@/components";

const Organization = () => {
  const { register, formState: { errors } } = useFormContext();
  const hasError = typeof errors.organization !== "undefined";

  return (
    <div className="flex flex-col gap-2">
      <InputLabel>Organization</InputLabel>
      <TextField
        fullWidth
        placeholder="Name of organization"
        {...register("organization", { required: "Name of organization is required" })} 
      />
      <ErrorMessage hasError={hasError} message={(errors.organization as FieldError)?.message} />
    </div>
  )
}

export default Organization;
