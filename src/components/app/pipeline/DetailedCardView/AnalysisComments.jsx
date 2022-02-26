import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
const AnalysisComments = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const formik = useFormik({
    initialValues: {
      Comments: ''
    },
    validationSchema: Yup.object({
      Comments: Yup.string()
    }),
    onSubmit: values => {
      console.log(values);
      setEditMode(false);
    }
  });
  return (
    <Card
      className=" position-relative"
      onMouseEnter={() => setShowEdit(true)}
      onMouseLeave={() => setShowEdit(false)}
    >
      <div className="p-3">
        <Form onSubmit={formik.handleSubmit}>
          {showEdit && (
            <span style={{ position: 'absolute', right: '15px', top: '7px' }}>
              <Button
                variant="falcon-default"
                onClick={() => setEditMode(true)}
              >
                Edit
              </Button>
            </span>
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h5>Analysis comments</h5>
            </Form.Label>
            <Form.Control
              {...formik.getFieldProps('Comments')}
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
      </div>
    </Card>
  );
};

export default AnalysisComments;
