import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CheckboxModal = props => {
  const [input, setInput] = React.useState('');
  React.useEffect(() => {
    if (props.type == 'edit') setInput(props.data.name);
  }, []);

  const submitFunc = () => {
    if (props.type == 'add') props.addFunc(input);
    if (props.type == 'edit')
      props.editFunc({ name: input, id: props.data.id });
    props.closeFunc();
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.closeFunc}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.type == 'add' ? 'Add checkbox' : 'Edit checkbox'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="link">
            <Form.Label>Type</Form.Label>
            <Form.Control
              onChange={e => setInput(e.target.value)}
              type="text"
              placeholder="checkbox name"
              value={input}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="light"
            className="me-2 mb-1"
            onClick={props.closeFunc}
            size="sm"
          >
            cancel
          </Button>
          <Button onClick={submitFunc} size="sm">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CheckboxModal;
