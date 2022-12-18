import './employees-list-item.css';

import { IEmployeesListItem } from '../../interfaces.ts';

const EmployeesListItem: IEmployeesListItem = ({ id, name, salary, bonus, promotion, onDelete, onToggle, setSalary }) => {

  let itemClasses = "list-group-item d-flex justify-content-between";
  itemClasses = bonus ? `${itemClasses} increase` : itemClasses;
  itemClasses = promotion ? `${itemClasses} like` : itemClasses;

  return (
    <li className={itemClasses}>
      <span
        onClick={() => onToggle(id, "promotion")}
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={`${salary}$`}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => onToggle(id, "bonus")}
          type="button"
          className={`btn-cookie btn-sm`}>
            <i className={`fas fa-cookie`}></i>
        </button>
        <button
          onClick={() => onDelete(id)}
          type="button"
          className={`btn-trash btn-sm`}>
            <i className={`fas fa-trash`}></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}

export default EmployeesListItem;