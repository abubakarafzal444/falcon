import DropdownFilter from 'components/common/DropdownFilter';
import IconButton from 'components/common/IconButton';
import React, { useState } from 'react';
import { Button, ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import AddDealModal from './AddDealModal';
import List from './List';
import PipelineKanban from './PipelineKanban';
import { headings,token } from './TempData';
import { Link } from 'react-router-dom';
const columns = [
  { Name: 'New', DisplayName: 'New', id: 1000 },
  { Name: 'Research', DisplayName: 'Research', id: 2000 },
  { Name: 'Watchlist', DisplayName: 'Watchlist', id: 3000 }
];
const kanbanItems = columns.map(each => {
  return {
    id: each.id,
    name: each.DisplayName,
    items: token.filter(tok => tok.State === each.Name)
  };
});

const PipelineKanbanHeader = () => {
  const [showPipeline, setShowPipeline] = useState(true);
  const [isOpenAddDeal, setIsOpenAddDeal] = useState(false);
  const [viewTitle, setViewTitle] = useState('');
  const [currentView, setCurrentView] = useState('View 1');
  const [currentFilter, setCurrentFilter] = useState('Filter 1');
  const viewName = ['View 1', 'View 2'];
  const filterName = ['Filter 1', 'Filter 2'];
  const handleViewFilter = filter => {
    setCurrentView(filter);
    switch (filter) {
      case 'View 1':
        setViewTitle('View 1');
        break;
      case 'View 2':
        setViewTitle('View 2');
        break;

      default:
        setViewTitle('View 1');
    }
  };
  const handleFilterFilter = filter => {
    setCurrentFilter(filter);
    switch (filter) {
      case 'Filter 1':
        setViewTitle('Filter');
        break;
      case 'Filter 2':
        setViewTitle('Filter 2');
        break;

      default:
        setViewTitle('Filter 1');
    }
  };
  const handleClose = () => {
    setIsOpenAddDeal(state => !state);
  };
  const pipelineClickHandler = () => {
    setShowPipeline(true);
  };
  return (
    <>
      <Row className="gx-0 kanban-header rounded-2 px-card py-2 mt-2 mb-3">
        <Col xs="auto" className="d-flex justify-content-end order-sm-0">
          <ButtonGroup size="sm">
            <IconButton
              variant="falcon-default"
              size="sm"
              className="ms-sm-1 mx-1"
              icon="th"
              onClick={pipelineClickHandler}
            />
            <Link to="/app/deals">
                <IconButton
                  variant="falcon-default"
                  size="sm"
                  className="ms-sm-1 mx-2"
                  icon="list"
                  
                />
            </Link>
            
            <Button
              variant="success"
              className="gx-0 rounded-1 border py-1"
              onClick={handleClose}
              size="sm"
            >
              Add Deal
            </Button>
          </ButtonGroup>
        </Col>

        <Col md="auto" className="d-sm-none">
          <hr />
        </Col>
        <Col xs="auto" className="d-flex order-sm-5">
          <DropdownFilter
            className="me-2"
            filters={filterName}
            currentFilter={currentFilter}
            handleFilter={handleFilterFilter}
            icon="sort"
            right
          />
        </Col>
        <Col className="d-flex justify-content-end order-sm-2">
          <DropdownFilter
            className="me-2"
            filters={viewName}
            currentFilter={currentView}
            handleFilter={handleViewFilter}
            icon="sort"
            right
          />
        </Col>
      </Row>
      
      {showPipeline && <PipelineKanban kanbanItems={kanbanItems} />}
      {isOpenAddDeal && (
        <AddDealModal handleClose={handleClose} isOpen={isOpenAddDeal} />
      )}
    </>
  );
};

export default PipelineKanbanHeader;
