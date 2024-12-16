import { ComponentWithChildrenType } from '@/types';
import MuiInputLabel, { InputLabelProps } from '@mui/material/InputLabel';

const InputLabel = ({ children, ...props }: ComponentWithChildrenType & InputLabelProps) => {
  return (
    <MuiInputLabel
      {...props}
      className="font-alegreya-sans font-medium text-base text-black"
    >
      {children}
    </MuiInputLabel>
  )
}

export default InputLabel;
