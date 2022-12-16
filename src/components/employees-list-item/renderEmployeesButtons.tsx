import { useState, useId } from "react";
import data from "../../data/data";

function renderEmployeesButtons(buttons: string[]): JSX.Element[] {
  const [increase, setIncrease] = useState(false);

  const onIncrease = () => {

  }

  return buttons.map((btn) => {
    return (
      <button
        key={useId()}
        type="button"
        className={`btn-${btn} btn-sm`}>
          <i className={`fas fa-${btn}`}></i>
      </button>
    );
  })
}

export default renderEmployeesButtons;