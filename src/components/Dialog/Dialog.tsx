import MuiDialog, { DialogProps } from "@mui/material/Dialog";

const Dialog = ({ children, ...props }: DialogProps) => {
  return <MuiDialog {...props}>{children}</MuiDialog>;
}

export default Dialog;
