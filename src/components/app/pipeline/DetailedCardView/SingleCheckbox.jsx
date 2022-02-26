import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';
import CheckboxModal from './CheckboxModal';
const SingleCheckbox = props => {
  const [modalShow, setModalShow] = React.useState(false);
  const closeModal = () => setModalShow(false);
  const [showIcons, setShowIcons] = React.useState(false);
  const hoverFunc = () => setShowIcons(true);
  const hoverLeave = () => setShowIcons(false);
  return (
    <div className="d-flex" onMouseLeave={hoverLeave}>
      <span onMouseEnter={hoverFunc}>
        <Form.Check
          className="detailedView__checkbox"
          type="checkbox"
          id="defaultCheckbox"
          label={props.data.name}
        />
      </span>
      <span className="ms-3">
        {showIcons && (
          <FontAwesomeIcon icon={faEdit} onClick={() => setModalShow(true)} />
        )}
        {showIcons && (
          <span onClick={() => props.deleteFunc(props.data.id)}>
            <FontAwesomeIcon
              icon={faTrashAlt}
              style={{ color: 'red', marginLeft: '5px' }}
            />
          </span>
        )}
      </span>
      {modalShow && (
        <CheckboxModal
          closeFunc={closeModal}
          show={modalShow}
          data={props.data}
          editFunc={props.editFunc}
          type={'edit'}
        />
      )}
    </div>
  );
};
export default SingleCheckbox;
