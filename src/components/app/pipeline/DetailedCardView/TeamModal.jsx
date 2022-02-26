import React from 'react';
import * as Yup from 'yup';
import { Button, Form, Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
const TeamModal = ({ toggleModal, data }) => {
  let editMode = true;
  if (!data) editMode = false;
  const formik = useFormik({
    initialValues: {
      Name: editMode ? data.name : '',
      Title: editMode ? data.title : '',
      Country: editMode ? data.country : '',
      Telegram: editMode ? data.telegram : '',
      LinkedIn: editMode ? data.linkedIn : '',
      Twitter: editMode ? data.twitter : '',
      Notes: editMode ? data.notes : ''
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      Title: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      Country: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      Telegram: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      LinkedIn: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      Twitter: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      Notes: Yup.string().required('Required')
    }),
    onSubmit: values => {
      console.log(values);
      toggleModal();
    }
  });

  return (
    <Modal
      show={toggleModal}
      onHide={toggleModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Link</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex">
            <div className="w-50">
              <Form.Group className="mb-3 mt-3 " controlId="link">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  {...formik.getFieldProps('Name')}
                  type="text"
                  placeholder="Name"
                  isInvalid={formik.touched.Name && formik.errors.Name}
                />
                {formik.touched.Name && formik.errors.Name ? (
                  <Form.Text className="text-muted">
                    {formik.errors.Name}
                  </Form.Text>
                ) : null}
              </Form.Group>
              <div className="d-flex">
                <Form.Group className="my3" controlId="link">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    isInvalid={formik.touched.Title && formik.errors.Title}
                    {...formik.getFieldProps('Title')}
                    type="text"
                    placeholder="Name"
                  />
                  {formik.touched.Title && formik.errors.Title ? (
                    <Form.Text className="text-muted">
                      {formik.errors.Title}
                    </Form.Text>
                  ) : null}
                </Form.Group>
                <div className="mx-2">
                  <span></span>
                </div>
                <Form.Group className="my3 " controlId="link">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    {...formik.getFieldProps('Country')}
                    isInvalid={formik.touched.Country && formik.errors.Country}
                    type="text"
                    placeholder="Name"
                  />
                  {formik.touched.Country && formik.errors.Country ? (
                    <Form.Text className="text-muted">
                      {formik.errors.Country}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </div>
              <Form.Group className="mb-0 mt-2 " controlId="link">
                <Form.Label>Telegram</Form.Label>
                <Form.Control
                  isInvalid={formik.touched.Telegram && formik.errors.Telegram}
                  {...formik.getFieldProps('Telegram')}
                  type="text"
                  placeholder="telegramId"
                />
                {formik.touched.Telegram && formik.errors.Telegram ? (
                  <Form.Text className="text-muted">
                    {formik.errors.Telegram}
                  </Form.Text>
                ) : null}
              </Form.Group>
              <Form.Group
                className="mb-3 mt-2                                                                      "
                controlId="link"
              >
                <Form.Label>linkedIn</Form.Label>
                <Form.Control
                  {...formik.getFieldProps('LinkedIn')}
                  isInvalid={formik.touched.LinkedIn && formik.errors.LinkedIn}
                  type="text"
                  placeholder="linkedin"
                />
                {formik.touched.LinkedIn && formik.errors.LinkedIn ? (
                  <Form.Text className="text-muted">
                    {formik.errors.LinkedIn}
                  </Form.Text>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3 mt-2 " controlId="link">
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  isInvalid={formik.touched.Twitter && formik.errors.Twitter}
                  {...formik.getFieldProps('Twitter')}
                  type="text"
                  placeholder="twitter"
                />
                {formik.touched.Twitter && formik.errors.Twitter ? (
                  <Form.Text className="text-muted">
                    {formik.errors.Twitter}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="w-50 mt-5 ms-5">
              <img
                width={250}
                height={250}
                src={
                  'https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg'
                }
                alt=""
              />
            </div>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h5>Notes</h5>
            </Form.Label>
            <Form.Control
              isInvalid={formik.touched.Notes && formik.errors.Notes}
              {...formik.getFieldProps('Notes')}
              as="textarea"
              rows={7}
            />
            {formik.touched.Notes && formik.errors.Notes ? (
              <Form.Text className="text-muted">
                {formik.errors.Notes}
              </Form.Text>
            ) : null}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" className="me-2 mb-1" onClick={toggleModal}>
          close
        </Button>
        <Button onClick={formik.handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default TeamModal;
