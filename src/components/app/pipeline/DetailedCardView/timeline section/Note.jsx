import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, useContext } from 'react';
import TimelineContext from './TimelineContext';
import { Button, Card, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import CardDropdown from 'components/common/CardDropdown';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Note = ({ data }) => {
  const { DispatchTimeline } = useContext(TimelineContext);
  const [editMode, setEditMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formik = useFormik({
    initialValues: {
      Note: data.note
    },
    validationSchema: Yup.object({
      Note: Yup.string().required('Required')
    }),
    onSubmit: values => {
      DispatchTimeline({
        type: 'changeNote',
        payload: { data, newNote: values.Note }
      });
      console.log(values);
      setEditMode(false);
    }
  });
  const changeLocation = () => {
    DispatchTimeline({
      type: 'changeLocation',
      payload: {
        data,
        newLocation: data.location === 'pinned' ? 'all' : 'pinned'
      }
    });
  };
  const toggleDeleteModal = () => setShowDeleteModal(state => !state);
  const DeleteNote = () => {
    DispatchTimeline({ type: 'delete', payload: { id: data.id } });
    console.log('note deleted');
    toggleDeleteModal();
  };
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
              <FontAwesomeIcon icon={faStickyNote} className="text-primary" />
            </div>
          </div>
        </Col>
        <Col>
          <Row
            className={classNames('g-3', { 'border-bottom pb-card': false })}
          >
            <div style={{ backgroundColor: 'rgb(249 250 253)' }}>
              <li className="list-unstyled mb-3">
                <div className="px-2 ">
                  <div className="d-flex justify-content-between pt-3">
                    {/* date */}
                    <p
                      className="mb-0 font-weight-bold"
                      style={{ fontWeight: 'bold', fontSize: '15px' }}
                    >
                      {data.date.toLocaleDateString('en-US', options)}
                    </p>
                    {/* dropdown for menus */}
                    <CardDropdown>
                      <div className="py-2">
                        <Dropdown.Item onClick={() => setEditMode(true)}>
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item onClick={changeLocation}>{`${
                          data.location === 'pinned' ? 'unpin' : 'pin'
                        } this note`}</Dropdown.Item>
                        <Dropdown.Item
                          onClick={toggleDeleteModal}
                          className="text-danger"
                        >
                          Delete
                        </Dropdown.Item>
                      </div>
                    </CardDropdown>
                  </div>
                  {/* form to edit note */}
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        {...formik.getFieldProps('Note')}
                        as="textarea"
                        rows={6}
                        readOnly={!editMode}
                      />
                    </Form.Group>
                    {editMode && (
                      <>
                        <Button
                          variant="light"
                          className="me-2 mb-1"
                          onClick={() => {
                            setEditMode(false);
                            formik.handleReset();
                          }}
                        >
                          close
                        </Button>
                        <Button type="submit">Submit</Button>
                      </>
                    )}
                  </Form>
                  {/* A modal to prompt delete */}
                  {showDeleteModal && (
                    <Modal
                      show={toggleDeleteModal}
                      onHide={toggleDeleteModal}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Body>
                        <h5>Are you sure you want to delete this note?</h5>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="light" onClick={toggleDeleteModal}>
                          No
                        </Button>
                        <Button className="me-2 mb-1" onClick={DeleteNote}>
                          Yes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  )}
                </div>
              </li>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Note;
