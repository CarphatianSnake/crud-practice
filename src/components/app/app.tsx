import { useState, useEffect } from 'react';
import nextId, { setPrefix } from 'react-id-generator';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

import { DeleteItem, AddItem, Data, OnToggle, Filters, IOnSalaryChange } from '../../interfaces.ts';

import data from '../../data/data';

function App() {

  const [employeesData, setEmployeesData] = useState(data);
  const [searchString, setSearchString] = useState("");
  const [searchData, setSearchData] = useState(employeesData);
  const [filter, setFilter] = useState(Filters.All);
  const [filteredData, setFilteredData] = useState(searchData);

  const deleteItem: DeleteItem = (id) => {
    setEmployeesData(() => employeesData.filter(item => item.id !== id))
  };

  const addItem: AddItem = (e, data) => {
    setPrefix('cmpemp');
    e.preventDefault();
    const newEmployee: Data = {
      ...data,
      id: nextId(),
      bonus: false,
      promotion: false
    }
    setEmployeesData([...employeesData, newEmployee])
  };

  const onSalaryChange: IOnSalaryChange = (id, salary) => {
    const value = +salary.replace(/\$/g, '');
    if ((!Number.isNaN(value))) {
      setEmployeesData(employeesData.map((item) => item.id === id ? {...item, salary: Math.floor(value)} : item));
    }
  }

  const onToggle: OnToggle = (id, propName) => {
    setEmployeesData(employeesData.map((item) => item.id === id ? {...item, [propName]: !item[propName]} : item));
  }

  useEffect(() => {
    if (searchString === "") {
      setSearchData(employeesData);
    }
    setSearchData(employeesData.filter(item => item.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1));
  }, [searchString, employeesData])

  useEffect(() => {
    switch (filter) {
      case Filters.All:
        setFilteredData(searchData);
        break;
      case Filters.Promotion:
        setFilteredData(searchData.filter((item) => item.promotion));
        break;
      case Filters.Thousand:
        setFilteredData(searchData.filter((item) => +item.salary > 1000));
        break;
    }
  }, [filter, searchData])

  return (
    <div className="app">
      <AppInfo data={employeesData} />
      <div className="search-panel">
        <SearchPanel
          searchString={searchString}
          setSearchString={setSearchString}
        />
        <AppFilter
          setFilter={setFilter}
        />
      </div>
      <EmployeesList
        data={filteredData}
        onDelete={deleteItem}
        onToggle={onToggle}
        onSalaryChange={onSalaryChange}
      />
      <EmployeesAddForm onAdd={addItem}/>
    </div>
  );
}

export default App;