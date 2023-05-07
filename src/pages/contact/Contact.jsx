import { useState } from "react";

import "./contact.scss";
import PopupMessage from '../../popups/popupMessage/Popup'
import PopUpLoading from '../../popups/popUpLoading/Loading'
export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [showMessage, setShowMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const body = {
      appName : 'KSC Result Publisher',
      email:e.target.email.value,
      phone:e.target.phone.value,
      name:e.target.name.value + e.target.lastName.value,
      address:e.target.address.value,
      message:e.target.message.value
    }
   fetch(`https://send-mail-to-moshiur.vercel.app/sendMail`,{
    method: "post",
    headers: { "Content-type": "application/json" },
    body:JSON.stringify(body)
   })
   .then(res=>{
    setLoading(false)
    if (res.status == 200) {
      setShowMessage('Message Sent Successfully')
      
    } else {
      setShowMessage('Something went wrong')
      
    }
   })
  };
  return (
    <>
    <div className="contact fade">
      <div className="heading">Get In Touch</div>
      <div className="tittle">
        Know us your feedback or contact us if your organization need to publish
        result
      </div>
      <form onSubmit={handleSubmit}>
        <div className="top">
          <div className="col">
            <input type="text" required name="name" id="" placeholder="first name" />
            <input type="email" required name="email" id="" placeholder="email" />
          </div>
          <div className="col">
            <input type="text" required name="lastName" id="" placeholder="last name" />
            <input type="text" required name="phone" id="" placeholder="phone" />
          </div>
        </div>
        <div className="bottom">
          <textarea
            name="address"
            id=""
            cols="30"
            rows="5"
            required
            placeholder="address"
          ></textarea>
          <textarea
            name="message"
            id=""
            cols="30"
            required
            rows="5"
            placeholder="type your message here"
          ></textarea>
          <input className="submitBtn" type="submit" value="Send" />
        </div>
      </form>
    </div>

    {showMessage && <PopupMessage showMessage={showMessage} setShowMessage={setShowMessage}/>}
    {loading && <PopUpLoading/>}
    </>
  );
}
