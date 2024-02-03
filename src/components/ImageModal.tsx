import React from 'react';
import {MdOutlineClose} from 'react-icons/md'

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
            <MdOutlineClose className="close-button" onClick={closeModal}/>
            <img src={imageUrl} alt="Modal Image" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;