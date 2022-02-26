import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';
import Select from 'react-select';
import React from 'react';
import PropTypes from 'prop-types';
const options = [
  { value: 'Binance Smart Chain', label: 'Binance Smart Chain' },
  { value: 'Ethereum', label: 'Ethereum' }
];
const CustomSelect = ({ onChange, options, value, className, onBlur }) => {
  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : '';
  };

  return (
    <div className={className}>
      <Select
        value={defaultValue(options, value)}
        onChange={value => {
          onChange(value);
        }}
        options={options}
        onBlur={onBlur}
      />
    </div>
  );
};

const AddDealModal = ({ handleClose }) => {
  const formik = useFormik({
    initialValues: {
      Name: '',
      Blockchain: '',
      Contract: ''
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      Blockchain: Yup.string().required('Required'),
      Contract: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required')
    }),
    onSubmit: values => {
      console.log(values);
      handleClose();
    }
  });

  return (
    <>
      <Modal show={true} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Deal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit} className="p-3">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="Name"
                name="Name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.Name}
                isInvalid={formik.touched.Name && formik.errors.Name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.Name && formik.errors.Name ? (
                <Form.Text className="text-muted">
                  {formik.errors.Name}
                </Form.Text>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3">
              <CustomSelect
                className="input"
                onChange={value =>
                  formik.setFieldValue('Blockchain', value.value)
                }
                value={formik.values.Blockchain}
                options={options}
                onBlur={formik.handleBlur}
              />
              {formik.touched.Blockchain && formik.errors.Blockchain ? (
                <Form.Text className="text-muted">
                  {formik.errors.Blockchain}
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contract</Form.Label>
              <Form.Control
                id="Contract"
                name="Contract"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.Contract}
                isInvalid={formik.touched.Contract && formik.errors.Contract}
                onBlur={formik.handleBlur}
              />

              {formik.touched.Contract && formik.errors.Contract ? (
                <Form.Text className="text-muted">
                  {formik.errors.Contract}
                </Form.Text>
              ) : null}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={formik.handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
AddDealModal.propTypes = {
  handleClose: PropTypes.func
};
CustomSelect.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
  className: PropTypes.string,
  onBlur: PropTypes.func
};

export default AddDealModal;
