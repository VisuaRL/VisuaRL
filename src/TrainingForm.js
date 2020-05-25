import React, { useState, useEffect } from 'react';

function TrainingForm(props) {
    const [data, setData] = useState({rows: 15, columns: 15});
    return (
        <form onSubmit={() => props.onSubmit()}>
          <label>
            Rows:
            <input type="text" value={props.rows} />
          </label>
          <label>
            Columns:
            <input type="text" value={props.columns} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
}

export default TrainingForm;