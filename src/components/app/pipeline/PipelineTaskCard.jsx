import React, { useContext, useEffect } from 'react';
import { Card, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Draggable } from 'react-beautiful-dnd';
import AppContext from 'context/Context';
import PipelineCardRating from './PipelineCardRating';
import { Link } from 'react-router-dom';

const TaskDropMenu = () => {
  const {
    config: { isRTL }
  } = useContext(AppContext);

  return (
    <Dropdown
      onClick={e => e.stopPropagation()}
      align="end"
      className="font-sans-serif"
    >
      <Dropdown.Toggle
        variant="falcon-default"
        size="sm"
        className="kanban-item-dropdown-btn hover-actions dropdown-caret-none"
      >
        <FontAwesomeIcon icon="ellipsis-h" transform="shrink-2" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="py-0" align={isRTL ? 'start' : 'end'}>
        <Dropdown.Item href="#/action-1">Put on hold</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Move to Research</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Move to Watchlist</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Share</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Duplicate</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-6">Archive</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const PipelineTaskCard = props => {
  const [priceColor, setPriceColor] = React.useState('green');
  useEffect(() => {
    props?.data?.PriceChange < 0
      ? setPriceColor('red')
      : setPriceColor('green');
  }),
    [props];
  // styles we need to apply on draggables
  const getItemStyle = isDragging => ({
    cursor: isDragging ? 'grabbing' : 'pointer',
    transform: isDragging ? 'rotate(-2deg)' : ''
  });

  return (
    <Link
      to={`/app/DetailedView/${props.data.id}`}
      className="text-decoration-none"
    >
      <Draggable draggableId={`task${props.data.id}`} index={props.index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
            className="kanban-item"
          >
            <Card
              style={getItemStyle(snapshot.isDragging)}
              className="kanban-item-card hover-actions-trigger mb-3"
            >
              <Card.Body>
                <div className="position-relative">
                  <TaskDropMenu />
                </div>
                <div className="p-3">
                  <div className="d-flex  justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={props.data.logo}
                        alt=""
                        className="rounded-circle pipelineColumnCellCardImg"
                      ></img>
                      <h4>{props.data.name}</h4>
                    </div>
                    <h4 className="mx-2 mt-3">{props.data.symbol}</h4>
                  </div>
                  <div className="d-flex  justify-content-between align-items-center mt-3">
                    <h5>{props.data.contract}</h5>
                    <div className="d-flex align-items-center ">
                      <h5>BSC</h5>
                      <OverlayTrigger
                        overlay={
                          <Tooltip id="hi">{props.data.Blockchain}</Tooltip>
                        }
                        placement="bottom"
                      >
                        <img
                          src={props.data.BlockchainLogo}
                          alt=""
                          className="rounded-circle pipelineColumnCellCardBlockChainLogo"
                        ></img>
                      </OverlayTrigger>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mr-2 mt-3">
                    <h5>Rating</h5>
                    <PipelineCardRating rating={props.data.Rating} />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div className="mt-2 pipelineColumnCellPriceContainers">
                      <h5 className="pt-3 ">VLK Price</h5>
                      <h4 style={{ color: priceColor }}>${props.data.Price}</h4>
                      <h5 style={{ color: priceColor }}>
                        24HR: {props.data.PriceChange > 0 ? '+' : ''}
                        {props.data.PriceChange}%
                      </h5>
                    </div>
                    <div className="pipelineColumnCellPriceContainers">
                      <h5>Calculating Market Cap</h5>
                      <h4>${props.data.MarketCap}</h4>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        )}
      </Draggable>
    </Link>
  );
};

export default PipelineTaskCard;
