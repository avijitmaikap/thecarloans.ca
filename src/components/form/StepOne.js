import "./styles/Step1.scss";
export default function StepOne({ val }) {
  return (
    <div className="step1">      
      <div className="wrapper">
        <h3>What is</h3>
        <h2>Your Name</h2>

        <input
        type="text"
        name="fname"
        placeholder="First Name"
        value={val.state.fname}
        onChange={(e) => {
          val.handleChange(e.target.name, e.target.value);
        }}
        required
      />
      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        value={val.state.lname}
        onChange={(e) => {
          val.handleChange(e.target.name, e.target.value);
        }}
      />
      <div className="buttons">
      <button onClick={val.prev} type="button" className="rounded-pill btn-rounded">
              PREV
              <span className="prev">
              <i class="fas fa-arrow-circle-left"></i>
              </span>
            </button>
      <button onClick={val.next} type="button" className="rounded-pill btn-rounded">
              NEXT
              <span>
              <i class="fas fa-arrow-circle-right"></i>
              </span>
            </button>
      </div>

      </div>
    </div>
  );
}
