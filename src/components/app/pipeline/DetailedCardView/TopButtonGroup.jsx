import { Button, ButtonGroup, Card } from 'react-bootstrap';

const { useReducer } = require('react');
const initialState = {
  showNew: true,
  showResearch: false,
  showWatchlist: false
};
const ButtonReducer = (state, action) => {
  switch (action.type) {
    case 'new':
      return { showResearch: false, showNew: true, showWatchlist: false };

    case 'research':
      return { showResearch: true, showNew: false, showWatchlist: false };

    default:
      return { showResearch: false, showNew: false, showWatchlist: true };
  }
};

function TopButtonGroup() {
  // const [value, setValue] = useState([1, 3]);
  const [buttonState, dispatchButton] = useReducer(ButtonReducer, initialState);

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  // const handleChange = val => setValue(val);

  return (
    <Card className="mt-3 ms-3" style={{ width: '850px' }}>
      <ButtonGroup>
        {/* variant="falcon-primary" */}
        <Button
          style={{ width: '282px' }}
          variant={!buttonState.showNew ? 'falcon-primary' : 'primary'}
          onClick={() => dispatchButton({ type: 'new' })}
        >
          New/On hold
        </Button>
        <Button
          style={{ width: '282px' }}
          variant={!buttonState.showResearch ? 'falcon-primary' : 'primary'}
          onClick={() => dispatchButton({ type: 'research' })}
        >
          Research
        </Button>
        <Button
          style={{ width: '282px' }}
          variant={!buttonState.showWatchlist ? 'falcon-primary' : 'primary'}
          onClick={() => dispatchButton({ type: 'watchlist' })}
        >
          Watchlist
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default TopButtonGroup;
