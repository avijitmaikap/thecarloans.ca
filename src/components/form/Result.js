import { useState } from "react";

export default function Result({ val }) {
  const [agree,setAgree] = useState(false)
  return (
    <div className="result">
      
      <div className="wrapper">

      
      <h2>One Step Away</h2>
      <h3>To Finish up !</h3>
      <div className ="confirmation">
        <input type="checkbox" onChange = {()=>setAgree(!agree)}/>
        <span>
          I am over 18 years old
        </span>
        <p>
        Your information is protected by our privacy policy. By submitting this form you agree to our terms and conditions.
        </p>
      </div>

      <div className="buttons">
          <button onClick={val.prev} type="button" className="rounded-pill btn-rounded">
            EDIT {/*PREV*/}
              <span className="prev">
              <i class="far fa-edit"></i>
            </span>
          </button>
          <button onClick={val.submit} disabled = {!agree} type="button" className="rounded-pill btn-rounded">
            SUBMIT
              <span>
              <i class="fas fa-check"></i>
            </span>
          </button>
        </div>
        </div>
    </div>
  );
}
