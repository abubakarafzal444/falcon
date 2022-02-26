import { useState, useContext } from 'react';
import ActivityUploader from './ActivityUploader';
import TimelineContext from './TimelineContext';
import { Button, Card, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import CardDropdown from 'components/common/CardDropdown';
import {
  faTasks,
  faRocket,
  faCheck,
  faPhoneAlt,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames';

const Activity = ({ data }) => {
  const { DispatchTimeline } = useContext(TimelineContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddActivity, setShowAddActivity] = useState(false);
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const changeLocation = () => {
    DispatchTimeline({
      type: 'changeLocation',
      payload: { data, newLocation: 'all' }
    });
  };
  const toggleDeleteModal = () => setShowDeleteModal(state => !state);
  const toggleEditModal = () => setShowEditModal(state => !state);
  const DeleteActivity = () => {
    DispatchTimeline({ type: 'delete', payload: { id: data.id } });
    console.log('activity deleted');
    toggleDeleteModal();
  };
  let svg;
  switch (data.icon) {
    case 'faUser':
      svg = faUser;
      break;
    case 'faTasks':
      svg = faTasks;
      break;
    case 'faRocket':
      svg = faRocket;
      break;
    case 'faCheck':
      svg = faCheck;
      break;
    case 'faPhoneAlt':
      svg = faPhoneAlt;
      break;
  }
  return (
    <div className="py-2">
      <Row
        className={classNames(
          'g-3 recent-activity-timeline recent-activity-timeline-primary timeline_circle',
          {
            'pb-card': false
            //   "recent-activity-timeline-past": status === "completed",
            //   "recent-activity-timeline-current": status === "current",
          }
        )}
      >
        <Col xs="auto" className="ps-0 ms-1">
          <div className="ps-2">
            <div className="icon-item icon-item-sm rounded-circle bg-200 shadow-none">
              <FontAwesomeIcon icon={svg} className="text-primary" />
            </div>
          </div>
        </Col>
        <Col>
          <Row
            className={classNames('g-3', { 'border-bottom pb-card': false })}
          >
            <div className="mb-3 p-3" style={{ backgroundColor: '#f9fafd' }}>
              <li className="list-unstyled">
                {/* this is outside icon */}
                {/* <FontAwesomeIcon icon={svg} /> */}
                {/* ....... */}
                <div
                  className="d-flex justify-content-between  pb-1"
                  style={{ backgroundColor: '#f9fafd' }}
                >
                  <div className="d-flex align-items-center">
                    {data.location === 'planned' && (
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{ fontSize: '35px' }}
                      />
                    )}

                    {data.location === 'all' && (
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ fontSize: '35px' }}
                      />
                    )}

                    {/* this is title */}
                    <p
                      className="m-0 ms-2"
                      style={{ fontWeight: 'bold', fontSize: '18px' }}
                    >
                      {data.title}
                    </p>
                  </div>
                  {/* this is dropdown for menus */}
                  <CardDropdown>
                    <div className="py-2">
                      <Dropdown.Item onClick={toggleEditModal}>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={changeLocation}>
                        Mark as done
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={toggleDeleteModal}
                        className="text-danger"
                      >
                        Delete
                      </Dropdown.Item>
                    </div>
                  </CardDropdown>
                </div>
                <div
                  className="bg-white px-2 pb-3"
                  style={{ minHeight: '160px' }}
                >
                  {/* this is date */}
                  <p className="mb-1 text-dark">
                    {new Date(data.date).toLocaleDateString('en-US', options)}
                  </p>

                  {/* this is description */}
                  <p style={{ fontSize: '18px' }} className="mb-1">
                    {data.description}
                  </p>
                </div>
                {/* modal for prompting delete */}
                {showDeleteModal && (
                  <Modal
                    show={toggleDeleteModal}
                    onHide={toggleDeleteModal}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <h5>Are you sure you want to delete this activity?</h5>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="light" onClick={toggleDeleteModal}>
                        No
                      </Button>
                      <Button className="me-2 mb-1" onClick={DeleteActivity}>
                        Yes
                      </Button>
                    </Modal.Footer>
                    {/* this is modal for edit */}
                  </Modal>
                )}
                {showEditModal && (
                  <Modal
                    show={toggleEditModal}
                    onHide={toggleEditModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <ActivityUploader
                        setShowAddActivity={setShowAddActivity}
                        showAddActivity={showAddActivity}
                        toggleModal={toggleEditModal}
                        data={data}
                      />
                    </Modal.Body>
                  </Modal>
                )}
              </li>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Activity;
