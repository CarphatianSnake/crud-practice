import { useState } from 'react';
import nextId from 'react-id-generator';

import './app-filter.css';

import { IAppFilted, Filters } from '../../interfaces.ts';

const AppFilter: IAppFilted = ({setFilter}) => {

  const [activeFilter, setActiveFilter] = useState(0);

  const onClickHandler = (index: number, btn: Filters): void => {
    setActiveFilter(index);
    setFilter(btn);
  }

  const buttons = [Filters.All, Filters.Promotion, Filters.Thousand].map((btn, index) => {
    const cls = index === activeFilter ? "" : "-outline";
    return (
      <button
        key={nextId()}
        className={`btn btn${cls}-light`}
        type="button"
        onClick={() => onClickHandler(index, btn)}
      >
        {btn}
      </button>
    )
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
}

export default AppFilter;