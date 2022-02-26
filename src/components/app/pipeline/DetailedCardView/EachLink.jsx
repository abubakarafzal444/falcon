import LinkModal from './LinkModal';
import { useState } from 'react';
import CardDropdown from 'components/common/CardDropdown';
import { Dropdown } from 'react-bootstrap';
const EachLink = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(state => !state);
  };
  return (
    <>
      <tr>
        <td>
          <a href={item.link}>{item.linkType}</a>
        </td>
        <td className="text-end">
          <CardDropdown>
            <div className="py-2">
              <Dropdown.Item onClick={() => setShowModal(true)}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  console.log(`Deleting a ${item.linkType} project link`)
                }
                className="text-danger"
              >
                Delete
              </Dropdown.Item>
            </div>
          </CardDropdown>
        </td>
      </tr>
      {showModal && <LinkModal toggleModal={toggleModal} data={item} />}
    </>
  );
};
export default EachLink;
