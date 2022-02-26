import CardDropdown from 'components/common/CardDropdown';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import TeamModal from './TeamModal';
const EachMember = ({ each }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(state => !state);
  return (
    <>
      <div
        className="bg-white px-2 pb-2 pt-3"
        style={{
          height: '150px',
          position: 'relative',
          marginTop: '13px'
        }}
      >
        <h4 className="mb-1">{each.name}</h4>
        <h6>{each.title}</h6>
        <p style={{ position: 'absolute', bottom: '0' }}>
          <a href={each.telegram}>{each.telegram}</a>
        </p>
        <img
          style={{
            width: '80px',
            height: '80px',
            position: 'absolute',
            top: '30px',
            right: '10px'
          }}
          src={each.img}
          alt=""
        />
        {showModal && <TeamModal toggleModal={toggleModal} data={each} />}
        <div style={{ position: 'absolute', right: '10px', top: '0px' }}>
          <CardDropdown>
            <div className="py-2">
              <Dropdown.Item onClick={toggleModal}>Edit</Dropdown.Item>
              <Dropdown.Item
                className="text-danger"
                onClick={() => console.log(`Deleting ${each.name}`)}
              >
                Delete
              </Dropdown.Item>
            </div>
          </CardDropdown>
        </div>
      </div>
      <hr />
    </>
  );
};
export default EachMember;
