import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

import { IEmplyeesList } from "../../interfaces.ts";

const EmployeesList: IEmplyeesList = ({data, onDelete, onToggle, onSalaryChange}) => {

  const elements = data.map((item) => 
    <EmployeesListItem
      key={item.id}
      {...item}
      onDelete={onDelete}
      onToggle={onToggle}
      onSalaryChange={onSalaryChange}
    />);

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}

export default EmployeesList;