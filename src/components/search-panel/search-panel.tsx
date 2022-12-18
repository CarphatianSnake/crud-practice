import './serach-panel.css';

import { ISearchPanel, IOnChangeHandle } from '../../interfaces.ts';



const SearchPanel: ISearchPanel = (props) => {
  const {searchString, setSearchString} = props;

  const onChangeHandle: IOnChangeHandle = ((e) => {
    setSearchString(e.target.value)
  });

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Find an employee"
      onChange={onChangeHandle}
      value={searchString}
    />
  );
}

export default SearchPanel;