import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faCoffee,
  faTasks,
  faStickyNote,
  faRocket,
  faCheck,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import Texteditor from './Texteditor';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import TimelineContext from './TimelineContext';
import { useContext } from 'react';
const ActivityUploader = props => {
  const { DispatchTimeline } = useContext(TimelineContext);
  let editMode = true;
  if (!props.data) editMode = false;
  const formik = useFormik({
    initialValues: {
      Date: editMode ? props.data.date : '',
      ReminderDate: editMode ? props.data.reminderDate : '',
      Title: editMode ? props.data.title : '',
      Description: editMode ? props.data.description : '',
      Time: editMode ? props.data.time : '',
      ReminderTime: editMode ? props.data.reminderTime : '',
      Done: editMode
        ? props.data.location === 'planned'
          ? false
          : true
        : false,
      Icon: editMode ? props.data.icon : ''
    },
    validationSchema: Yup.object({
      Date: Yup.date().required('Required'),
      ReminderDate: Yup.date().required('Required'),
      Time: Yup.string().required('Required'),
      ReminderTime: Yup.string().required('Required'),
      Title: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      Description: Yup.string().required('Required'),
      Done: Yup.boolean(),
      Icon: Yup.string().required('Required')
    }),
    onSubmit: values => {
      const snapshot = {
        type: 'activity',
        location: values.Done ? 'all' : 'planned',
        id: editMode ? props.data.id : uuidv4(),
        title: values.Title,
        description: values.Description,
        date: values.Date,
        time: values.Time,
        reminderDate: values.ReminderDate,
        reminderTime: values.ReminderTime,
        icon: values.Icon
      };
      if (editMode) {
        DispatchTimeline({ type: 'edit', payload: snapshot });
      } else {
        DispatchTimeline({ type: 'add', payload: snapshot });
      }
      formik.handleReset();
      props.setShowAddActivity(false);
      if (props.toggleModal) props.toggleModal();
    }
  });
  const submitHandler = () => {
    formik.handleSubmit();
  };

  return (
    <>
      <div
        className="pb-3 pt-3 bg-white mb-3 px-3"
        onClick={e => {
          props.setShowAddActivity(true);
          e.stopPropagation();
        }}
      >
        {!props.showAddActivity && <h6>click here to add an activity</h6>}
        {props.showAddActivity && (
          <div>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="link">
                <Form.Control
                  {...formik.getFieldProps('Title')}
                  type="text"
                  placeholder="Activity type"
                />
              </Form.Group>
              <div className="d-flex">
                <ButtonGroup className="mt-3">
                  <Button
                    onClick={() => formik.setFieldValue('Icon', 'faTasks')}
                    variant={
                      formik.values.Icon === 'faTasks'
                        ? 'primary'
                        : 'outline-primary'
                    }
                    className="mb-1 py-1 px-2"
                  >
                    <FontAwesomeIcon icon={faTasks} />
                  </Button>
                  <Button
                    onClick={() => formik.setFieldValue('Icon', 'faUser')}
                    variant={
                      formik.values.Icon === 'faUser'
                        ? 'primary'
                        : 'outline-primary'
                    }
                    className="mb-1 py-1 px-2"
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </Button>
                  <Button
                    onClick={() => formik.setFieldValue('Icon', 'faPhoneAlt')}
                    variant={
                      formik.values.Icon === 'faPhoneAlt'
                        ? 'primary'
                        : 'outline-primary'
                    }
                    className="mb-1 py-1 px-2"
                  >
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </Button>
                  <Button
                    onClick={() => formik.setFieldValue('Icon', 'faCheck')}
                    variant={
                      formik.values.Icon === 'faCheck'
                        ? 'primary'
                        : 'outline-primary'
                    }
                    className="mb-1 py-1 px-2"
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </Button>
                  <Button
                    onClick={() => formik.setFieldValue('Icon', 'faRocket')}
                    variant={
                      formik.values.Icon === 'faRocket'
                        ? 'primary'
                        : 'outline-primary'
                    }
                    className="mb-1 py-1 px-2"
                  >
                    <FontAwesomeIcon icon={faRocket} />
                  </Button>
                </ButtonGroup>
              </div>
              <div className="d-flex justify-content-between my-3">
                <div className="d-flex" style={{ width: '40%' }}>
                  <Form.Group style={{ width: '55%' }} controlId="link">
                    <Form.Control
                      {...formik.getFieldProps('Date')}
                      type="date"
                      placeholder="Activity type"
                    />
                  </Form.Group>
                  <Form.Group controlId="link">
                    <Form.Control
                      {...formik.getFieldProps('Time')}
                      type="time"
                      placeholder="Activity type"
                    />
                  </Form.Group>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                  <h6 className="pe-3">reminder</h6>
                  <Form.Group style={{ width: '40%' }} controlId="link">
                    <Form.Control
                      {...formik.getFieldProps('ReminderDate')}
                      type="date"
                      placeholder="Activity type"
                    />
                  </Form.Group>
                  <Form.Group controlId="link">
                    <Form.Control
                      {...formik.getFieldProps('ReminderTime')}
                      type="time"
                      placeholder="Activity type"
                    />
                  </Form.Group>
                </div>
              </div>
              <Form.Group>
                <Form.Label>Mark as done</Form.Label>
                <Form.Check
                  checked={formik.values.Done}
                  {...formik.getFieldProps('Done')}
                />
              </Form.Group>
              <Texteditor
                name="Description"
                setShowAddActivity={props.setShowAddActivity}
                toggleModal={props.toggleModal}
                formik={formik}
                submitHandler={submitHandler}
              />
            </Form>
          </div>
        )}
      </div>
    </>
  );
};
export default ActivityUploader;
