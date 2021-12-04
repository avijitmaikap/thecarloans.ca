export default function StepTwo({ val }) {
  return (
    <div className="App">
      <button onClick={val.prev}>Prev</button>
      <input
        type="email"
        name="email"
        value={val.state.email}
        onChange={(e) => {
          val.handleChange(e.target.name, e.target.value);
        }}
        required
      />
      <input
        type="text"
        name="mobile"
        value={val.state.mobile}
        onChange={(e) => {
          val.handleChange(e.target.name, e.target.value);
        }}
      />
      <button onClick={val.next}>Next</button>
    </div>
  );
}
