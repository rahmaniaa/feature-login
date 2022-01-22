

function Dropdown() {
  return (
    <>
    <div className="form-floating">
      <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
        <option selected>All Category</option>
        <option value="1">Photography</option>
        <option value="2">Design</option>
        <option value="3">Development</option>
        <option value="4">Marketing</option>
        <option value="5">Business</option>
        <option value="6">LifeStyle</option>
        <option value="7">Music</option>
      </select>
      <label forHtml="floatingSelect">Filter By Category</label>
    </div>

    <div className="form-floating">
      <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
        <option selected>Today</option>
        <option value="1">Tomorrow</option>
        <option value="2">This Week</option>
        <option value="3">This Mounth</option>
        <option value="4">This Year</option>
        <option value="5">All Time</option>
      </select>
      <label forHtml="floatingSelect">Filter By Date</label>
    </div>

    <div className="form-floating">
      <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
        <option selected>Date</option>
        <option value="1">Name</option>
      </select>
      <label forHtml="floatingSelect">Sorting By</label>
    </div>
    </>
  );
}

export default Dropdown;
