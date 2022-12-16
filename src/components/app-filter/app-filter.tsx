import renderFiltersButtons from './renderFiltersButtons';
import './app-filter.css';

function AppFilter() {

  const buttons = ['All employees', 'For promotion', 'Salary > 1000$'];

  return (
    <div className="btn-group">
      {renderFiltersButtons(buttons)};
    </div>
  );
}

export default AppFilter;