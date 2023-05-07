import React from "react";
import "./popupMessage.scss";
import ClearIcon from "@mui/icons-material/Clear";
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
          <ClearIcon />
        </div>
      </div>
    </div>
  );
}
