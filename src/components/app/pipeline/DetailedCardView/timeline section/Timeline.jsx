import TimelineContext from './TimelineContext';
import { useContext } from 'react';
import Activity from './Activity';
import Note from './Note';
import FileT from './FileT';
import { Card } from 'react-bootstrap';
const Timeline = () => {
  const { data } = useContext(TimelineContext);

  const pinned = data
    .filter(each => each.location === 'pinned')
    .map(each => <Note key={each.id} data={each} />);
  const planned = data
    .filter(each => each.location === 'planned')
    .map(each => <Activity key={each.id} data={each} />);
  const all = data
    .filter(each => each.location === 'all')
    .map(each => {
      switch (each.type) {
        case 'note':
          return <Note data={each} key={each.id} />;
        case 'activity':
          return <Activity key={each.id} data={each} />;
        default:
          return <FileT key={each.id} data={each} />;
      }
    });
  return (
    <div>
      <Card className="pe-4">
        {pinned.length > 0 && <h3 className="text-center pt-3">PINNED</h3>}
        <ul className="p-0 ms-3">{pinned}</ul>
        {planned.length > 0 && <h3 className="text-center">PLANNED</h3>}
        <ul className="p-0 ms-3">{planned}</ul>
        {all.length > 0 && <h3 className="text-center">ALL</h3>}
        <ul className="p-0 ms-3">{all}</ul>
      </Card>
    </div>
  );
};
export default Timeline;
