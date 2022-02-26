import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

const PipelineCardRating = props => {
  const [color, setColor] = React.useState('green');
  var ratingFilled = [];
  var ratingEmpty = [];
  for (let i = 0; i < props?.rating; i++) {
    ratingFilled.push(1);
  }
  for (let i = props?.rating; i < 5; i++) {
    ratingEmpty.push(1);
  }

  useEffect(() => {
    props?.rating >= 4 ? setColor('green') : '';
    props?.rating == 3 ? setColor('yellow') : '';
    props?.rating == 2 ? setColor('orange') : '';
    props?.rating == 1 ? setColor('red') : '';
  }),
    [props];

  return (
    <div className="d-flex">
      {props?.rating > 0 &&
        ratingFilled.map((element, i) => (
          <FontAwesomeIcon
            style={{
              color: color,
              backgroundColor: color,
              marginRight: '3px',
              border: '2px solid black'
            }}
            icon="square"
            className=" fs-2"
            key={i}
          />
        ))}
      {props?.rating > 0 &&
        ratingEmpty.map((element, i) => (
          <FontAwesomeIcon
            style={{
              color: '#fafafa',
              border: '2px solid black',
              marginRight: '3px'
            }}
            icon="square"
            className=" fs-2"
            key={i}
          />
        ))}
    </div>
  );
};

export default PipelineCardRating;
