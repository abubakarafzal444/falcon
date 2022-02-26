import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, useContext } from 'react';
import TimelineContext from './TimelineContext';
import { Button, Card, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import CardDropdown from 'components/common/CardDropdown';
import { faPaperclip, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
const FileT = ({ data }) => {
  const { DispatchTimeline } = useContext(TimelineContext);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const toggleDeleteModal = () => setShowDeleteModal(state => !state);
  const toggleModal = () => setShowModal(state => !state);
  const DeleteFile = () => {
    DispatchTimeline({ type: 'delete', payload: { id: data.id } });
    console.log('file deleted');
    toggleDeleteModal();
  };
  const formik = useFormik({
    initialValues: {
      Description: data.description ? data.description : ''
    },
    validationSchema: Yup.object({
      Description: Yup.string().required('Required')
    }),
    onSubmit: values => {
      console.log(values);
      DispatchTimeline({
        type: 'AddDescriptionAboutFile',
        payload: { id: data.id, description: values.Description }
      });
      toggleModal();
    }
  });
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
              <FontAwesomeIcon icon={faPaperclip} className="text-primary" />
            </div>
          </div>
        </Col>
        <Col>
          <Row
            className={classNames('g-3', { 'border-bottom pb-card': false })}
          >
            <div className="mb-3 p-3" style={{ backgroundColor: '#f9fafd' }}>
              <li className="list-unstyled">
                {/* this is dropdown to show menus */}
                <div
                  className="d-flex justify-content-between"
                  style={{ backgroundColor: '#f9fafd' }}
                >
                  {/* this is name of file */}
                  <p
                    className="mb-1"
                    style={{ fontWeight: 'bold', fontSize: '16px' }}
                  >
                    {data.fileName}
                  </p>
                  <CardDropdown>
                    <div className="py-2">
                      <Dropdown.Item onClick={toggleModal}>
                        Add Description
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => console.log('Downloading File...')}
                      >
                        Download
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
                  className="bg-white py-3 px-2"
                  style={{ minHeight: '100px' }}
                >
                  {/* this is description */}
                  {data.description && (
                    <p className="mb-2">{data.description}</p>
                  )}
                  {/* icon #2 */}
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      style={{ fontSize: '50px' }}
                    />
                    {/* this is date */}
                    <p className="mb-1 ms-3 text-dark">
                      {data.date.toLocaleDateString('en-US', options)}
                    </p>
                    {/* this is size of file */}
                    <p className="mb-1 ms-3 text-dark">{data.fileSize}</p>
                  </div>
                </div>
                {/* this is modal to add description */}
                {showModal && (
                  <Modal
                    show={toggleModal}
                    onHide={toggleModal}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header>Add Description</Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={formik.handleSubmit}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Control
                            {...formik.getFieldProps('Description')}
                            as="textarea"
                            rows={10}
                          />
                        </Form.Group>

                        <Button
                          variant="light"
                          className="me-2 mb-1"
                          onClick={toggleModal}
                        >
                          close
                        </Button>
                        <Button type="submit">Submit</Button>
                      </Form>
                    </Modal.Body>
                  </Modal>
                )}
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
                      <h5>Are you sure you want to delete this file?</h5>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="light" onClick={toggleDeleteModal}>
                        No
                      </Button>
                      <Button className="me-2 mb-1" onClick={DeleteFile}>
                        Yes
                      </Button>
                    </Modal.Footer>
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
export default FileT;
