import ReactDOM from 'react-dom';
import PropType from 'prop-types';
import './style.css';

const LogoutModal = ({ onClose, isOpen, onConfirm, isLoading, el }) => {
  return (
    isOpen ? ReactDOM.createPortal(
      <div className="modal" ref={el} onClick={onClose}>
        <div className="modal__body" onClick={(e) => e.stopPropagation()}>
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
      document.body,
    ): null
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
