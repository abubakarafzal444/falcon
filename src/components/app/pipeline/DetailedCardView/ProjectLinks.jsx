import React from 'react';
import { Table, Dropdown, Card, Button, Modal, Form } from 'react-bootstrap';
import EachLink from './EachLink';
import LinkModal from './LinkModal';

const linkArray = [
  { linkType: 'twitter', link: 'https://google.com' },
  { linkType: 'telegram', link: 'https://google.com' },
  { linkType: 'website', link: 'https://google.com' },
  { linkType: 'facebook', link: 'https://google.com' },
  { linkType: 'RTC', link: 'https://google.com' },
  { linkType: 'personal', link: 'https://google.com' },
  { linkType: 'Audit Report', link: 'https://google.com' },
  { linkType: 'random', link: 'https://google.com' }
];

const ProjectLinks = () => {
  const [showModal, setShowModal] = React.useState(false);
  const toggleModal = () => setShowModal(state => !state);
  return (
    <>
      <Card>
        <div
          className="d-flex pt-3 align-items-center"
          style={{ paddingLeft: '1rem', overflow: 'hidden' }}
        >
          <h5 style={{ marginRight: '10px', marginBottom: '0' }}>
            Project Links
          </h5>
          <Button
            variant="success"
            className="m-0 p-0 rounded-circle d-flex justify-content-center align-center"
            onClick={() => setShowModal(true)}
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
        <hr className="mb-0" />
        {showModal && <LinkModal toggleModal={toggleModal} />}
        <Table striped responsive>
          <thead>
            <tr
              className="m-0"
              style={{
                backgroundColor: '#edf2f9',
                border: '1px solid #fafafa'
              }}
            >
              <th scope="col">Project links</th>
              <th className="text-end" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {linkArray.map(item => {
              return <EachLink item={item} key={item.linkType} />;
            })}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default ProjectLinks;
