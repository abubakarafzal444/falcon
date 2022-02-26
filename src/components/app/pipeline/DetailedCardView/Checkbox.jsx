import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import CheckboxModal from './CheckboxModal';
import SingleCheckbox from './SingleCheckbox';
const Checkbox = () => {
  const [array, setArray] = React.useState(dataArray);
  const [modalShow, setModalShow] = React.useState(false);
  const closeModal = () => setModalShow(false);
  //
  const deleteBox = received =>
    setArray(array.filter(item => item.id != received));

  const addBox = enteredName => {
    let temp = array;
    temp.push({ name: enteredName, id: Math.random() });
    setArray(temp);
  };
  const editFunc = ({ name, id }) => {
    let temp = array;
    if (name.length > 0) {
      temp.find(each => each.id == id).name = name;
      setArray(temp);
    } else deleteBox(id);
  };
  return (
    <>
      <div className="d-flex  align-items-center">
        <h5 style={{ marginRight: '10px', marginBottom: '0' }}>
          Analysis checklist
        </h5>
        <Button
          variant="success"
          className="m-0 p-0 rounded-circle d-flex justify-content-center align-center"
          onClick={() => array.length < 12 && setModalShow(true)}
          style={{
            width: '30px',
            height: '30px',
            fontWeight: 'bolder',
            fontSize: '25px',
            color: 'white'
          }}
        >
          <p style={{ position: 'relative', bottom: '3px' }}>+</p>
        </Button>
      </div>
      {modalShow && (
        <CheckboxModal
          closeFunc={closeModal}
          show={modalShow}
          addFunc={addBox}
          type={'add'}
        />
      )}

      <div className="checklistContainer mt-2">
        {array.length > 0 &&
          array.length <= 4 &&
          array.map(each => {
            return (
              <div style={{ width: '33%' }}>
                <SingleCheckbox
                  key={each.id}
                  editFunc={editFunc}
                  data={each}
                  deleteFunc={deleteBox}
                />
              </div>
            );
          })}
        {array.length > 4 && array.length < 9 && (
          <div className="d-flex">
            <div style={{ width: '33%' }}>
              {array
                .filter((ele, ind) => ind < 4)
                .map(each => {
                  return (
                    <SingleCheckbox
                      key={each.id}
                      editFunc={editFunc}
                      data={each}
                      deleteFunc={deleteBox}
                    />
                  );
                })}
            </div>
            <div style={{ width: '33%' }}>
              {array
                .filter((ele, ind) => ind >= 4 && ind < 8)
                .map(each => {
                  return (
                    <SingleCheckbox
                      key={each.id}
                      editFunc={editFunc}
                      data={each}
                      deleteFunc={deleteBox}
                    />
                  );
                })}
            </div>
          </div>
        )}
        {array.length > 8 && array.length < 13 && (
          <div className="d-flex">
            <div style={{ width: '33%' }}>
              {array
                .filter((ele, ind) => ind < 4)
                .map(each => {
                  return (
                    <SingleCheckbox
                      key={each.id}
                      editFunc={editFunc}
                      data={each}
                      deleteFunc={deleteBox}
                    />
                  );
                })}
            </div>
            <div style={{ width: '33%' }}>
              {array
                .filter((ele, ind) => ind >= 4 && ind < 8)
                .map(each => {
                  return (
                    <SingleCheckbox
                      key={each.id}
                      editFunc={editFunc}
                      data={each}
                      deleteFunc={deleteBox}
                    />
                  );
                })}
            </div>
            <div style={{ width: '33%' }}>
              {array
                .filter((ele, ind) => ind >= 8 && ind < 13)
                .map(each => {
                  return (
                    <SingleCheckbox
                      key={each.id}
                      editFunc={editFunc}
                      data={each}
                      deleteFunc={deleteBox}
                    />
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const dataArray = [
  { name: 'checkbox 1', id: 1 },
  { name: 'checkbox 2', id: 2 },
  { name: 'checkbox 3', id: 3 },
  { name: 'checkbox 4', id: 4 },
  { name: 'checkbox 5', id: 5 },
  { name: 'checkbox 6', id: 6 },
  { name: 'checkbox 7', id: 7 },
  { name: 'checkbox 8', id: 8 },
  { name: 'checkbox 9', id: 9 },
  { name: 'checkbox 10', id: 10 },
  { name: 'checkbox 11', id: 11 },
  { name: 'checkbox 12', id: 12 }
];
export default Checkbox;
