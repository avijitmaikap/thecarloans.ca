export default function StepThree({ val }) {
  return (
    <div className="App">
      <button onClick={val.prev}>Prev</button>

      <select
        value={val.state.select_car}
        name="select_car"
        onChange={(e) => {
          val.handleChange(e.target.name, e.target.value);
        }}
      >
        <option value="Nexon">Honda</option>
        <option value="BMW">Toyota</option>
        <option value="Tata">Hyundai</option>
        <option value="Tata">Mazda</option>
        <option value="Tata">Ford</option>
        <option value="Tata">BMW</option>
        <option value="Tata">Mercedes</option>
        <option value="Tata">Audi</option>
        <option value="Tata">Tata</option>
        <option value="Tata">Tata</option>
        <option value="Tata">Tata</option>
        <option value="Tata">Tata</option>
        <option value="Tata">Tata</option>
      </select>

      <input
        type="text"
        name="price"
        value={val.state.price}
        onChange={(e) => {
          val.handleChange(e.target.name, e.target.value);
        }}
      />
      <button onClick={val.next}>Next</button>
    </div>
  );
}
