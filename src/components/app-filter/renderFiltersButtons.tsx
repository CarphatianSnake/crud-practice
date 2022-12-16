import { useId } from "react";

function renderFiltersButtons(buttons: string[]): JSX.Element[] {
  return buttons.map((btn, index) => {
    const cls = `btn btn-${index !== 0 ? 'outline-' : ''}light`;
    return (
      <button
      key={useId()}
      className={cls}
      type="button">
        {btn}
    </button>
    )
  });
}

export default renderFiltersButtons;