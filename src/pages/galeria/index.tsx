import { useState } from 'react';
import styles from "./styles.module.scss";

import { ModalPhotos } from '../../components/Gallery/modalPhotos';

export default function Galeria() {
  const [GalleryIsOpen, setGalleryIsOpen] = useState(false);

  function ModalOpen() {
    setGalleryIsOpen(true);
  }

  function closeModal() {
    setGalleryIsOpen(false);
  }

  function shouldClose() {
    setGalleryIsOpen(false);
  }

  return (
    <>

      <div className={styles.containerSection}>
        <div className={styles.headerTitle}>
          <h2>Galeria</h2>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.contentItems}>

            <div onClick={ModalOpen}>
              <header>
                <div>
                  <img src="/images/irish.png" alt="Irish" />
                  <p>Galeria</p>
                </div>
              </header>
            </div>
            <ModalPhotos
              isOpen={GalleryIsOpen}
              onRequestClose={closeModal}
              shouldCloseOnEsc={shouldClose}
            />


          </div>
        </div>
      </div>

    </>
  );
}
