import Modal from 'react-modal';
import { GallerySection } from './gallery';
import styles from "./gallery.module.scss";

Modal.setAppElement('#__next');

interface OpenGallery {
  isOpen: boolean;
  onRequestClose: () => void;
  shouldCloseOnEsc: () => void;
}


export function ModalPhotos({ isOpen, onRequestClose }: OpenGallery) {

  return (
    <>

      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnEsc={true}
        // overlayClassName="react-modal-overlay"
        className={styles.main}
      >
        <div className={styles.container} >
          <div className={styles.box}>
            <div className={styles.portrait}>
              <GallerySection />
            </div>
            <button
              type="button"
              onClick={onRequestClose}
              className={styles.buttonClose}
            >
              <img src="images/close.svg" alt="Fechar modal" />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}