import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

import { EmployeesListProps } from "../../interfaces.ts";

function EmployeesList({data, onDelete}: EmployeesListProps) {

  const elements = data.map((item) => 
    <EmployeesListItem
      key={item.id}
      {...item}
      onDelete={onDelete} />);

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}

export default EmployeesList;