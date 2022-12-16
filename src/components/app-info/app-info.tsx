import './app-info.css';

import { Data } from '../../interfaces.ts';

function AppInfo({data}: {data: Data[]}) {
  return (
    <div className="app-info">
      <h1>Accounting of employees in the company</h1>
      <h2>Total count of employees: {data.length}</h2>
      <h2>The award will be received: </h2>
    </div>
  );
}

export default AppInfo;