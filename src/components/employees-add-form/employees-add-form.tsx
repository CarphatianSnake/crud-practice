import { useState } from 'react';

import './employees-add-form.css';

import { OnAdd } from '../../interfaces.ts';

function EmployeesAddForm({onAdd}: OnAdd) {
  
  const [employee, setEmployee] = useState({
    name: '',
    salary: ''
  });
  const inputClassList = "form-control new-post-label";

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    onAdd(e, employee);
    setEmployee({
      name: '',
      salary: ''
    });
  };

  return (
    <div className="app-add-form">
      <h3>Add new employee</h3>
      <form
        className="add-form d-flex"
        onSubmit={onSubmitForm}>
          <input
            onChange={onValueChange}
            name="name"
            type="text"
            value={employee.name}
            className={inputClassList}
            placeholder="What is his/her name"
            required
            minLength={5}
          />
          <input
            onChange={onValueChange}
            name="salary"
            type="number"
            value={employee.salary}
            className={inputClassList}
            placeholder="Salary in $?"
            required
            min={100}
          />
          <button
            type="submit"
            className="btn btn-outline-light">
              Add
          </button>
      </form>
    </div>
  );
}

export default EmployeesAddForm;