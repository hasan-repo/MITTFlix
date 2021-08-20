import React, { useState } from 'react'; ///hold data from server

function AddToWatchList({ checked, onIconClick }) { /////for change color div
  const [state, setState] = useState(checked)
  const onHandleClick = (e) => {
    setState((old) => !old) ///interchage color old to not old
    onIconClick();

  }
  return (
    <div data-toggled={state} className="listToggle" onClick={onHandleClick}>
      <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
    </div>
  );
}

export default AddToWatchList;