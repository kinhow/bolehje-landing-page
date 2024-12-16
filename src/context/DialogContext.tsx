import { useContext, createContext } from 'react';
import { useToggleDialog } from '@/hooks';
import { DialogContextProps, ComponentWithChildrenType } from '@/types';

const DialogContext = createContext<DialogContextProps>({
  isDialogOpen: false,
  handleDialogOpen: () => {},
  handleDialogClose: () => {}
});

const useDialogContext = () => useContext(DialogContext);

const DialogProvider = ({ children }: ComponentWithChildrenType) => {
  const { isDialogOpen, handleDialogOpen, handleDialogClose } = useToggleDialog();

  return (
    <DialogContext.Provider
      value={{
        isDialogOpen,
        handleDialogOpen,
        handleDialogClose
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export { DialogProvider, useDialogContext };
