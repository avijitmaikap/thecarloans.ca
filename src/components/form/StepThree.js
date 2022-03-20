export default function StepThree({ val }) {
  return (
    <div className="step3">
      <div className="wrapper">
        <h3>Select Your</h3>
        <h2>Brand & Budget</h2>
        <select
          value={val.state.brands}
          name="brands"
          onChange={(e) => {
            val.handleChange(e.target.name, e.target.value);
          }}
        >
          <option value="honda" selected>Honda</option>
          <option value="Toyota">Toyota</option>
          <option value="Hyundai">Hyundai</option>
          <option value="mazda">Mazda</option>
          <option value="Ford">Ford</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
          <option value="Lexus">Lexus</option>
          <option value="Dodge">Dodge</option>
          <option value="GMC">GMC</option>
          <option value="Others">Others</option>
        </select>

        <select
          value={val.state.budget}
          name="budget"
          onChange={(e) => {
            val.handleChange(e.target.name, e.target.value);
          }}
        >
          <option value="<$150">Below $150/Month</option>
          <option value="$150-$300">$150-$300/Month</option>
          <option value="$300-$500">$300-$500/Month</option>
          <option value="$500+">$500+/Month</option>

        </select>

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
