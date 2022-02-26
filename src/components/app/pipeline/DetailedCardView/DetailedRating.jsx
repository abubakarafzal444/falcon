import React, { useEffect, useReducer } from 'react';

const colorReducer = (state, action) => {
  if (action === 'RATING>4') {
    return {
      cell1: 'green',
      cell2: 'green',
      cell3: 'green',
      cell4: 'green',
      cell5: 'green'
    };
  }
  if (action === 'RATING===4') {
    return {
      cell1: 'green',
      cell2: 'green',
      cell3: 'green',
      cell4: 'green',
      cell5: '#fafafa'
    };
  }
  if (action === 'RATING===3') {
    return {
      cell1: 'yellow',
      cell2: 'yellow',
      cell3: 'yellow',
      cell4: '#fafafa',
      cell5: '#fafafa'
    };
  }
  if (action === 'RATING===2') {
    return {
      cell1: 'orange',
      cell2: 'orange',
      cell3: '#fafafa',
      cell4: '#fafafa',
      cell5: '#fafafa'
    };
  }
  if (action === 'RATING===1') {
    return {
      cell1: 'red',
      cell2: '#fafafa',
      cell3: '#fafafa',
      cell4: '#fafafa',
      cell5: '#fafafa'
    };
  }
  if (action == 'CELL_1_ENTER') {
    state.cell1Temp = state.cell1;
    return {
      ...state,
      cell1: 'red'
    };
  }
  if (action == 'CELL_1_LEAVE') {
    return {
      cell1: state.cell1Temp,
      cell2: state.cell2,
      cell3: state.cell3,
      cell4: state.cell4,
      cell5: state.cell5
    };
  }
  if (action == 'CELL_2_ENTER') {
    state.cell1Temp = state.cell1;
    state.cell2Temp = state.cell2;
    return {
      ...state,
      cell1: 'orange',
      cell2: 'orange'
    };
  }
  if (action == 'CELL_2_LEAVE') {
    return {
      cell1: state.cell1Temp,
      cell2: state.cell2Temp,
      cell3: state.cell3,
      cell4: state.cell4,
      cell5: state.cell5
    };
  }
  if (action == 'CELL_3_ENTER') {
    state.cell1Temp = state.cell1;
    state.cell2Temp = state.cell2;
    state.cell3Temp = state.cell3;
    return {
      ...state,
      cell1: 'yellow',
      cell2: 'yellow',
      cell3: 'yellow'
    };
  }
  if (action == 'CELL_3_LEAVE') {
    return {
      cell1: state.cell1Temp,
      cell2: state.cell2Temp,
      cell3: state.cell3Temp,
      cell4: state.cell4,
      cell5: state.cell5
    };
  }
  if (action == 'CELL_4_ENTER') {
    state.cell1Temp = state.cell1;
    state.cell2Temp = state.cell2;
    state.cell3Temp = state.cell3;
    state.cell4Temp = state.cell4;
    return {
      ...state,
      cell1: 'green',
      cell2: 'green',
      cell3: 'green',
      cell4: 'green'
    };
  }
  if (action == 'CELL_4_LEAVE') {
    return {
      cell1: state.cell1Temp,
      cell2: state.cell2Temp,
      cell3: state.cell3Temp,
      cell4: state.cell4Temp,
      cell5: state.cell5
    };
  }
  if (action == 'CELL_5_ENTER') {
    state.cell1Temp = state.cell1;
    state.cell2Temp = state.cell2;
    state.cell3Temp = state.cell3;
    state.cell4Temp = state.cell4;
    state.cell5Temp = state.cell5;
    return {
      ...state,
      cell1: 'green',
      cell2: 'green',
      cell3: 'green',
      cell4: 'green',
      cell5: 'green'
    };
  }
  if (action == 'CELL_5_LEAVE') {
    return {
      cell1: state.cell1Temp,
      cell2: state.cell2Temp,
      cell3: state.cell3Temp,
      cell4: state.cell4Temp,
      cell5: state.cell5Temp
    };
  }
  if (action == 'CELL_1_CLICKED') {
    state.cell1Temp = 'red';
    state.cell2Temp = '#fafafa';
    state.cell3Temp = '#fafafa';
    state.cell4Temp = '#fafafa';
    state.cell5Temp = '#fafafa';
    return {
      ...state,
      cell1: 'red',
      cell2: '#fafafa',
      cell3: '#fafafa',
      cell4: '#fafafa',
      cell5: '#fafafa'
    };
  }
  if (action == 'CELL_2_CLICKED') {
    state.cell1Temp = 'orange';
    state.cell2Temp = 'orange';
    state.cell3Temp = '#fafafa';
    state.cell4Temp = '#fafafa';
    state.cell5Temp = '#fafafa';

    return {
      ...state,
      cell1: 'orange',
      cell2: 'orange',
      cell3: '#fafafa',
      cell4: '#fafafa',
      cell5: '#fafafa'
    };
  }
  if (action == 'CELL_3_CLICKED') {
    state.cell1Temp = 'yellow';
    state.cell2Temp = 'yellow';
    state.cell3Temp = 'yellow';
    state.cell4Temp = '#fafafa';
    state.cell5Temp = '#fafafa';
    return {
      ...state,
      cell1: 'yellow',
      cell2: 'yellow',
      cell3: 'yellow',
      cell4: '#fafafa',
      cell5: '#fafafa'
    };
  }
  if (action == 'CELL_4_CLICKED') {
    state.cell1Temp = 'green';
    state.cell2Temp = 'green';
    state.cell3Temp = 'green';
    state.cell4Temp = 'green';
    state.cell5Temp = '#fafafa';
    return {
      ...state,
      cell1: 'green',
      cell2: 'green',
      cell3: 'green',
      cell4: 'green',
      cell5: '#fafafa'
    };
  }
  if (action == 'CELL_5_CLICKED') {
    state.cell1Temp = 'green';
    state.cell2Temp = 'green';
    state.cell3Temp = 'green';
    state.cell4Temp = 'green';
    state.cell5Temp = 'green';
    return {
      ...state,
      cell1: 'green',
      cell2: 'green',
      cell3: 'green',
      cell4: 'green',
      cell5: 'green'
    };
  }
  return {
    ...state,
    cell1: '#fafafa',
    cell2: '#fafafa',
    cell3: '#fafafa',
    cell4: '#fafafa',
    cell5: '#fafafa'
  };
};
const DetailedRating = props => {
  //
  const cell1HoverEnter = () => dispatchColor('CELL_1_ENTER');
  const cell1HoverLeave = () => dispatchColor('CELL_1_LEAVE');
  //
  const cell2HoverEnter = () => dispatchColor('CELL_2_ENTER');
  const cell2HoverLeave = () => dispatchColor('CELL_2_LEAVE');
  //
  const cell3HoverEnter = () => dispatchColor('CELL_3_ENTER');
  const cell3HoverLeave = () => dispatchColor('CELL_3_LEAVE');
  //
  const cell4HoverEnter = () => dispatchColor('CELL_4_ENTER');
  const cell4HoverLeave = () => dispatchColor('CELL_4_LEAVE');
  //
  const cell5HoverEnter = () => dispatchColor('CELL_5_ENTER');
  const cell5HoverLeave = () => dispatchColor('CELL_5_LEAVE');
  //
  const cell1ClickHandler = () => {
    dispatchColor('CELL_1_CLICKED');
  };

  const cell2ClickHandler = () => {
    dispatchColor('CELL_2_CLICKED');
  };

  const cell3ClickHandler = () => {
    dispatchColor('CELL_3_CLICKED');
  };

  const cell4ClickHandler = () => {
    dispatchColor('CELL_4_CLICKED');
  };

  const cell5ClickHandler = () => {
    dispatchColor('CELL_5_CLICKED');
  };

  useEffect(() => {
    if (props?.rating > 4) dispatchColor('RATING>4');
    else if (props.rating === 4) dispatchColor('RATING===4');
    else if (props.rating === 3) dispatchColor('RATING===3');
    else if (props.rating === 2) dispatchColor('RATING===2');
    else if (props.rating === 1) dispatchColor('RATING===1');
  }, []);
  const [colorState, dispatchColor] = useReducer(colorReducer, {
    cell1: '#fafafa',
    cell2: '#fafafa',
    cell3: '#fafafa',
    cell4: '#fafafa',
    cell5: '#fafafa',
    cell1Temp: '#fafafa',
    cell2Temp: '#fafafa',
    cell3Temp: '#fafafa',
    cell4Temp: '#fafafa',
    cell5Temp: '#fafafa'
  });

  return (
    <div className="d-flex">
      {props?.rating > 0 && (
        <>
          <span
            style={{
              color: colorState.cell1,
              backgroundColor: colorState.cell1,
              marginRight: '3px',
              border: '2px solid black',
              width: '35px',
              height: '27px'
            }}
            className=" fs-2"
            onMouseEnter={cell1HoverEnter}
            onMouseLeave={cell1HoverLeave}
            onClick={cell1ClickHandler}
          ></span>

          <span
            style={{
              color: colorState.cell2,
              backgroundColor: colorState.cell2,
              marginRight: '3px',
              border: '2px solid black',
              width: '35px',
              height: '27px'
            }}
            className=" fs-2"
            onMouseEnter={cell2HoverEnter}
            onMouseLeave={cell2HoverLeave}
            onClick={cell2ClickHandler}
          ></span>
          <span
            style={{
              color: colorState.cell3,
              backgroundColor: colorState.cell3,
              marginRight: '3px',
              border: '2px solid black',
              width: '35px',
              height: '27px'
            }}
            className=" fs-2"
            onMouseEnter={cell3HoverEnter}
            onMouseLeave={cell3HoverLeave}
            onClick={cell3ClickHandler}
          ></span>
          <span
            style={{
              color: colorState.cell4,
              backgroundColor: colorState.cell4,
              marginRight: '3px',
              border: '2px solid black',
              width: '35px',
              height: '27px'
            }}
            icon="square"
            className=" fs-2"
            onMouseEnter={cell4HoverEnter}
            onMouseLeave={cell4HoverLeave}
            onClick={cell4ClickHandler}
          ></span>
          <span
            style={{
              color: colorState.cell5,
              backgroundColor: colorState.cell5,
              marginRight: '3px',
              border: '2px solid black',
              width: '35px',
              height: '27px'
            }}
            className=" fs-2"
            onMouseEnter={cell5HoverEnter}
            onMouseLeave={cell5HoverLeave}
            onClick={cell5ClickHandler}
          ></span>
        </>
      )}
    </div>
  );
};

export default DetailedRating;
