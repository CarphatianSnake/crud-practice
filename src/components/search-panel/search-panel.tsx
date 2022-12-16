import './serach-panel.css';

function SearchPanel() {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Find an employee"
    />
  );
}

export default SearchPanel;