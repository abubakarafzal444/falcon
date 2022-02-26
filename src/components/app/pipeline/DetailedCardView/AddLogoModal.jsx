import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Flex from 'components/common/Flex';
import cloudUpload from 'assets/img/icons/cloud-upload.svg';
import { getSize } from 'helpers/utils';
import { Button, Modal } from 'react-bootstrap';

const AddLogoModal = props => {
  const [files, setFiles] = useState([]);
  files.length > 0 ? console.log(files) : '';

  const { getRootProps, getInputProps } = useDropzone({
    // accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles([
        ...files,
        ...acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      ]);
    }
  });
  return (
    <Modal
      show={true}
      onHide={props.toggleLogoModal}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <h5>Upload logo</h5>
      </Modal.Header>
      <Modal.Body>
        <div {...getRootProps({ className: 'dropzone-area py-6' })}>
          <input {...getInputProps()} />
          <Flex justifyContent="center">
            <img src={cloudUpload} alt="" width={25} className="me-2" />
            <p className="fs-0 mb-0 text-700">
              Drop logo here or
              <u style={{ color: 'blue' }}> select from your computer</u>
            </p>
          </Flex>
        </div>
        <div>
          {files.map(file => (
            <Flex
              alignItems="center"
              className="py-3 border-bottom btn-reveal-trigger"
              key={file.path}
            >
              <img
                className="rounded"
                width={40}
                height={40}
                src={file.preview}
                alt={file.path}
              />

              <Flex
                justifyContent="between"
                alignItems="center"
                className="ms-3 flex-1"
              >
                <div>
                  <h6>{file.path}</h6>
                  <Flex className="position-relative" alignItems="center">
                    <p className="mb-0 fs--1 text-400 line-height-1">
                      <strong>{getSize(file.size)}</strong>
                    </p>
                  </Flex>
                </div>
              </Flex>
            </Flex>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.toggleLogoModal}>
          cancel
        </Button>
        <Button className="me-2 mb-1" onClick={props.toggleLogoModal}>
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddLogoModal;
