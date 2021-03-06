import ReactDOM from 'react-dom';
import PropType from 'prop-types';
import './style.css';

const LogoutModal = ({ onClose, isOpen, onConfirm, isLoading, el }) => {
  if (!isOpen) return null;
  return (
    ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__body" ref={el}>
          <h6 className="modal__header">Are you sure</h6>
          <div className="modal__actions">
            <button type="button" className="button cancel" onClick={onClose}>
              Cancel
            </button>
            {isLoading
              ? <div className="circular-indicator" />
              : <button type="button" className="button confirm" onClick={onConfirm}>Logout</button>}
          </div>
        </div>
      </div>,
      document.body
    )
  );
};

export default LogoutModal;

LogoutModal.propTypes = {
  onClose: PropType.func.isRequired,
  isOpen: PropType.bool.isRequired,
  onConfirm: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
  el: PropType.shape({ current: PropType.instanceOf(Element) }).isRequired,
};
