import { useState } from 'react';

import './employees-list-item.css';

import { EmployeeData } from '../../interfaces.ts';

function EmployeesListItem({ id, name, salary, bonus, promotion, onDelete }: EmployeeData) {

  const [increase, setIncrease] = useState(bonus);
  const [like, setLike] = useState(promotion);

  let itemClasses = "list-group-item d-flex justify-content-between";
  itemClasses = increase ? `${itemClasses} increase` : itemClasses;
  itemClasses = like ? `${itemClasses} like` : itemClasses;

  return (
    <li className={itemClasses}>
      <span
        onClick={() => setLike(!like)}
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
          onClick={() => setIncrease(!increase)}
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