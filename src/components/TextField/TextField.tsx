import { forwardRef } from "react";
import { outlinedInputClasses } from '@mui/material';
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

const TextField = forwardRef((props: TextFieldProps, ref: React.Ref<HTMLInputElement>) => {
  return (
    <MuiTextField
      {...props}
      ref={ref}
      sx={{
        [`& .${outlinedInputClasses.input}`]: {
          fontFamily: 'Alegreya Sans, sans-serif'
        }
      }}
    />
  )
})

TextField.displayName = "TextField";
export default TextField;
