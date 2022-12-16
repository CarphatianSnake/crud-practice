import { useState } from 'react';
import nextId, { setPrefix } from 'react-id-generator';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

import { DeleteItem, AddItem } from '../../interfaces.ts';

import data from '../../data/data';

function App() {

  const [employeesData, setEmployeesData] = useState(data);

  const deleteItem: DeleteItem = (id) => {
    setEmployeesData(() => employeesData.filter(item => item.id !== id))
  };

  const addItem: AddItem = (e, data) => {
    setPrefix('cmpemp');
    e.preventDefault();
    const newEmployee = {
      ...data,
      id: nextId(),
      bonus: false,
      promotion: false
    }
    setEmployeesData([...employeesData, newEmployee])
  }

  return (
    <div className="app">
      <AppInfo data={employeesData} />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList
        data={employeesData}
        onDelete={deleteItem}
      />
      <EmployeesAddForm onAdd={addItem}/>
    </div>
  );
}

export default App;