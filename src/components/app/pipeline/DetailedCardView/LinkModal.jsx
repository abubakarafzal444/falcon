import { Table, Dropdown, Card, Button, Modal, Form } from 'react-bootstrap';
import DropDownInput from './DropDownInput';
import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
function LinkModal({ data, toggleModal }) {
  let editMode = true;
  if (!data) editMode = false;
  const formik = useFormik({
    initialValues: {
      LinkType: editMode ? data.linkType : '',
      Link: editMode ? data.link : ''
    },
    validationSchema: Yup.object({
      LinkType: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .required('Required'),
      Link: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required')
    }),
    onSubmit: values => {
      console.log(values);
      toggleModal();
    }
  });
  const [inputClickedLinkType, setInputClickedLinkType] = useState(false);
  const dataReciver = ({ data, name }) => {
    formik.setFieldValue(name, data);
  };
  const bodyClickHandler = () => {
    if (inputClickedLinkType) setInputClickedLinkType(state => !state);
  };

  return (
    <>
      <Modal
        show={toggleModal}
        onHide={toggleModal}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onClick={bodyClickHandler}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <DropDownInput
              array={['Amazon', 'snapchat', 'apple']}
              invertClick={() => setInputClickedLinkType(true)}
              Inputclicked={inputClickedLinkType}
              formLabel={'Link Type'}
              dataReciver={dataReciver}
              formik={formik}
              name="LinkType"
              disabled={false}
              key="LinkType"
            />

            <Form.Group
              className="mb-3 mt-5 "
              controlId="link"
              style={{ width: '85%' }}
            >
              <Form.Label>Link</Form.Label>
              <Form.Control
                {...formik.getFieldProps('Link')}
                placeholder="https://website.com"
                isInvalid={formik.touched.Link && formik.errors.Link}
              />
              {formik.touched.Link && formik.errors.Link ? (
                <Form.Text className="text-muted">
                  {formik.errors.Link}
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
    </>
  );
}
export default LinkModal;
