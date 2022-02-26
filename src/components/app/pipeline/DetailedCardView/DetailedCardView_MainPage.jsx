import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import LeftForm from './LeftForm';
import ProjectLinks from './ProjectLinks';
import ProjectDescription from './ProjectDescription';
import TeamList from './TeamList';
import TopCards from './TopCards';
import TopButtonGroup from './TopButtonGroup';
import DetailedViewRating from './DetailedViewRating';
import LineChartComponent from './Charts/LineChart';
import TowerChart from './Charts/TowerChart';
import Checkbox from './Checkbox';
import AnalysisComments from './AnalysisComments';
import EditorMainPage from './timeline section/EditorMainPage';
import Timeline from './timeline section/Timeline';
import { TimelineContextProvider } from './timeline section/TimelineContext';
import { token } from '../TempData';
import { Card } from 'react-bootstrap';
const DetailedCardViewMainPage = props => {
  const params = useParams();
  const { cardId } = params;
  // const dataReceived = useHistory()?.location?.state;
  const dataReceived = token.find(each => each.id === cardId);
  const [showAddActivity, setShowAddActivity] = useState(false);
  const bodyClickHandler = () => {
    if (showAddActivity) setShowAddActivity(false);
  };
  return (
    <div className="overflow-scroll hide-scrollBar" onClick={bodyClickHandler}>
      <div className="my-3  mx-1 d-flex">
        <div style={{ width: '350px' }}>
          <LeftForm data={dataReceived} />
          <ProjectLinks />
          <ProjectDescription />
          <TeamList />
        </div>
        <div className="">
          <TopCards data={dataReceived} />
          <TopButtonGroup />
          <DetailedViewRating />
          <Card className="ms-3 mt-3 p-3" style={{ width: '850px' }}>
            <div className="d-flex ">
              <div>
                <h5 className="py-1">
                  <strong>30 Day Chart</strong>
                </h5>
                <LineChartComponent />
              </div>
              <div style={{ marginLeft: '20px' }}>
                <h5 className="py-1">
                  <strong>30 Day Volume</strong>
                </h5>
                <TowerChart />
              </div>
            </div>
          </Card>
          <Card className="mt-3 ms-3 p-3" style={{ width: '850px' }}>
            <Checkbox />
          </Card>
          <Card className="ms-3 mt-3" style={{ width: '850px' }}>
            <AnalysisComments />
          </Card>
          <TimelineContextProvider>
            <Card className="mx-3 mt-3">
              <EditorMainPage
                setShowAddActivity={setShowAddActivity}
                showAddActivity={showAddActivity}
              />
            </Card>
            <div className="mt-3 mx-3">
              <Timeline />
            </div>
          </TimelineContextProvider>
        </div>
      </div>
    </div>
  );
};

export default DetailedCardViewMainPage;
