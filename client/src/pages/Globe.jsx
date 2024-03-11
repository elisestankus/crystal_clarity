import "../Globe.css"; // Import the CSS file for styling the globe
const crystalImage = "../assets/crystal.png"
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import AffirmationModal from "../components/AffirmationModal";

function Globe() {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h2>Affirmation Crystal</h2>
      <div className="app-container">

        <main>
          <div className="globe-container">
            <div className="globe">
              <img src={crystalImage} alt="Crystal" className="crystal-image" />
            </div>
          </div>
          
          <button id="generate-button" onClick={() => setShowModal(true)}>
            Generate Affirmation
          </button>
          <Modal
            size='lg'
            show={showModal}
            onHide={() => setShowModal(false)}
            aria-labelledby='affirmation-modal'>
            <Modal.Body>
              <AffirmationModal handleModalClose={() => setShowModal(false)} />
            </Modal.Body>
          </Modal>

        </main>
      </div>
    </div>
  );
}

export default Globe;
