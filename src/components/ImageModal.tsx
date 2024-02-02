import React from 'react';

interface ModalProps {
  imageUrl: string;
  closeModal: () => void;
}

const ImageModal: React.FC<ModalProps> = ({ imageUrl, closeModal }) => {
  return (
    <>
      {typeof window !== 'undefined' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={imageUrl} alt="Modal Image" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;