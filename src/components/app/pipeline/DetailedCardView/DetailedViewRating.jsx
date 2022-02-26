import React from 'react';
import { Tooltip, OverlayTrigger, Card } from 'react-bootstrap';
import DetailedRating from './DetailedRating';

const DetailedViewRating = () => {
  return (
    <Card className="ms-3 mt-3 p-3" style={{ width: '850px' }}>
      <div className="d-flex">
        <div style={{ marginRight: '40px' }}>
          <h6>Safety</h6>
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <span>
              <DetailedRating rating={3} />
            </span>
          </OverlayTrigger>
        </div>
        <div style={{ marginRight: '40px' }}>
          <h6>Team</h6>
          <OverlayTrigger placement="top" overlay={<Tooltip>Team</Tooltip>}>
            <span>
              <DetailedRating rating={1} />
            </span>
          </OverlayTrigger>
        </div>
        <div style={{ marginRight: '40px' }}>
          <h6>Utility</h6>
          <OverlayTrigger placement="top" overlay={<Tooltip>Utility</Tooltip>}>
            <span>
              <DetailedRating rating={2} />
            </span>
          </OverlayTrigger>
        </div>
      </div>
      <div className="d-flex mt-3">
        <div style={{ marginRight: '40px' }}>
          <h6>Activity</h6>
          <OverlayTrigger placement="top" overlay={<Tooltip>Activity</Tooltip>}>
            <span>
              <DetailedRating rating={1} />
            </span>
          </OverlayTrigger>
        </div>
        <div style={{ marginRight: '40px' }}>
          <h6>Overall</h6>
          <OverlayTrigger placement="top" overlay={<Tooltip>Overall</Tooltip>}>
            <span>
              <DetailedRating rating={3} />
            </span>
          </OverlayTrigger>
        </div>
      </div>
    </Card>
  );
};

export default DetailedViewRating;
