import React from "react";
import "./popupMessage.scss";
import {Clear} from '@material-ui/icons'
export default function PopupMessage({ showMessage, setShowMessage,reloading }) {
  const handleCancel = () => {
    setShowMessage("");

    if (reloading) {
      window.location.reload(false);
    }
    
  };
  return (
    <div className="popupMessage">
      <div className="container">
        <div className="message">{showMessage}</div>
        <div className="cancel" onClick={handleCancel}>
          <Clear />
        </div>
      </div>
    </div>
  );
}
