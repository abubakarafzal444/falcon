import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Flex from 'components/common/Flex';
import cloudUpload from 'assets/img/icons/cloud-upload.svg';
import CardDropdown from 'components/common/CardDropdown';
import { getSize } from 'helpers/utils';
import { Card, Dropdown } from 'react-bootstrap';
import { useContext } from 'react';
import TimelineContext from './TimelineContext';
import { v4 as uuidv4 } from 'uuid';
const FileUploader = () => {
  const {DispatchTimeline}=useContext(TimelineContext);
  const [files, setFiles] = useState([]);
  console.log(files);

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

  const handleRemove = path => {
    setFiles(files.filter(file => file.path !== path));
  };
  const addToList=(file)=>{
    const snapshot={
      type : "file",
      location : "all",
      date : file.lastModifiedDate,
      fileName : file.name,
      fileSize : getSize(file.size),
      id : uuidv4(),
      


    }
    DispatchTimeline({type : "add" , payload : snapshot});
    handleRemove(file.path);
  }
  return (
    <Card className="mb-3">
      <Card.Header as="h5">Upload Photos</Card.Header>
      <Card.Body className="bg-light">
        <div {...getRootProps({ className: 'dropzone-area py-6' })}>
          <input {...getInputProps()} />
          <Flex justifyContent="center">
            <img src={cloudUpload} alt="" width={25} className="me-2" />
            <p className="fs-0 mb-0 text-700">
              Drag your files here or{' '}
              <u style={{ color: 'blue' }}>select from your computer</u>
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
              <CardDropdown>
                <div className="py-2">
                  <Dropdown.Item
                    className="text-danger"
                    onClick={() => handleRemove(file.path)}
                  >
                    Remove
                  </Dropdown.Item>
                  <Dropdown.Item
                    
                    onClick={() => addToList(file)}
                  >
                    Add to timeline
                  </Dropdown.Item>
                </div>
              </CardDropdown>
            </Flex>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default FileUploader;
