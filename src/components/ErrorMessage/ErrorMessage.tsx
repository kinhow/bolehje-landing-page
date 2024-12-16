import { ErrorMessageProps } from "./ErrorMessageProps";

const ErrorMessage = ({ hasError, message }: ErrorMessageProps) => {
  return (
    <>
      {hasError ? <p className="text-red-600 font-alegreya-sans" role="alert">{message}</p> : null}
    </>
  )
}

export default ErrorMessage;
