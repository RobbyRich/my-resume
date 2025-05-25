import React, { Fragment } from 'react';
function Alert({ show, message }) {
  return (
    <Fragment>
      {
        show ?
          <div class="g-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
            <p>{message}</p>
          </div> : <></>
      }
    </Fragment>
  );
}

export default Alert;