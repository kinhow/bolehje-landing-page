import { useState } from 'react';

const useToggleModal = () => {
  const [isDialogOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDialogOpen = () => setIsModalOpen(true);
  const handleDialogClose = () => setIsModalOpen(false);;

  return { isDialogOpen, handleDialogOpen, handleDialogClose };
};

export default useToggleModal;
