import { ComponentWithChildrenType } from '@/types';
import { formLabelClasses } from '@mui/material';
import MuiInputLabel, { InputLabelProps } from '@mui/material/InputLabel';

const InputLabel = ({ children, ...props }: ComponentWithChildrenType & InputLabelProps) => {
  return (
    <MuiInputLabel
      {...props}
      sx={{
        [`&.${formLabelClasses.root}`]: {
          fontWeight: 500,
          fontSize: "1rem",
          color: "black",
          fontFamily: 'Alegreya Sans'
        }
      }}
    >
      {children}
    </MuiInputLabel>
  )
}

export default InputLabel;
