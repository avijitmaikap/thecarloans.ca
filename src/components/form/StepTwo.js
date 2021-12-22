export default function StepTwo({ val }) {
  return (
    <div className="step2">
      <div className="wrapper">
        <h3>How Can</h3>
        <h2>We Reach You</h2>

        <input
        type="text"
        name="email"
        placeholder="Email"
        value={val.state.email}
        onChange={(e) => {
          val.handleChange(e.target.name, e.target.value);
        }}
        required
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile No"
        value={val.state.mobile}
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
