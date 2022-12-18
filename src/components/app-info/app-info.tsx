import './app-info.css';

import { Data } from '../../interfaces.ts';

function AppInfo({data}: {data: Data[]}) {

  const totalEmployees: number = data.length;
  const emplyeesToAward: number = data.filter((item => item.bonus)).length;

  return (
    <div className="app-info">
      <h1>Accounting of employees in the company</h1>
      <h2>Total count of employees: {totalEmployees}</h2>
      <h2>The award will be received: {emplyeesToAward}</h2>
    </div>
  );
}

export default AppInfo;