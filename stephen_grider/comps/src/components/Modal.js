import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {
  // Add 'overflow: hidden' to the body element for the first time when Modal is displayed.
  // This prevent scrolling when the modal is open.
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    // remove this class when modal component is removed from the DOM
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-70"
      ></div>
      <div className="absolute inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,

    document.querySelector('.modal-container')
  );
}

export default Modal;
