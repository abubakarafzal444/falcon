import Texteditor from './Texteditor';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRef, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TimelineContext from './TimelineContext';

const NoteUploader = () => {
  const { DispatchTimeline } = useContext(TimelineContext);
  const childComp = useRef();
  const formik = useFormik({
    initialValues: {
      Note: ''
    },
    validationSchema: Yup.object({
      Note: Yup.string().required('Required')
    }),
    onSubmit: values => {
      console.log(values);
      const snapshot = {
        id: uuidv4(),
        type: 'note',
        location: 'all',
        date: new Date(),
        note: values.Note
      };
      DispatchTimeline({ type: 'add', payload: snapshot });
      formik.setFieldValue('Note', '');
      childComp.current.resetState();
    }
  });
  const submitHandler = () => formik.handleSubmit();

  return (
    <Texteditor
      ref={childComp}
      formik={formik}
      name="Note"
      submitHandler={submitHandler}
    />
  );
};
export default NoteUploader;
