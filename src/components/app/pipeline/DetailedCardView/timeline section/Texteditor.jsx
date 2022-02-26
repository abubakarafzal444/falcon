import React, {
  useContext,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle
} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import AppContext from 'context/Context';
import { getColor } from 'helpers/utils';
import { Button } from 'react-bootstrap';

const Texteditor = forwardRef(
  ({ formik, name, toggleModal, setShowAddActivity, submitHandler }, ref) => {
    const [input, setInput] = React.useState(formik ? formik.values[name] : '');
    useImperativeHandle(ref, () => ({
      resetState() {
        setInput('');
      }
    }));
    const {
      config: { isDark, isRTL }
    } = useContext(AppContext);
    const editorRef = useRef(null);

    useEffect(() => {
      if (editorRef.current) {
        editorRef.current.dom.addStyle(
          `body{color: ${getColor('white')} !important;}`
        );
      }
    }, [isDark]);
    useEffect(() => {
      if (formik) formik.setFieldValue(name, input.slice(3).slice(0, -4));
    }, [input]);
    return (
      <>
        <div>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            value={input}
            onEditorChange={setInput}
            apiKey={process.env.REACT_APP_TINYMCE_APIKEY}
            init={{
              height: '50vh',
              menubar: false,
              content_style: `body { color: ${getColor('black')} }`,
              mobile: {
                theme: 'mobile',
                toolbar: ['undo', 'bold']
              },
              statusbar: false,
              plugins: 'link image lists table media directionality',
              toolbar:
                'styleselect | bold italic link bullist numlist image blockquote table media undo redo',

              directionality: isRTL ? 'rtl' : 'ltr',
              theme_advanced_toolbar_align: 'center',
              toolbar_location: 'bottom'
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            position: 'relative',
            bottom: '35px'
          }}
        >
          <Button
            variant="falcon-primary"
            style={{ width: '75px', zIndex: '1000', position: 'relative' }}
            className="me-2 mb-1"
            size="sm"
            onClick={e => {
              setInput('');
              if (setShowAddActivity) setShowAddActivity(false);
              if (toggleModal) toggleModal();
              e.stopPropagation();
            }}
          >
            cancel
          </Button>
          <Button
            size="sm"
            className="me-2 mb-1"
            style={{ width: '75px', zIndex: '1000', position: 'relative' }}
            onClick={() => {
              submitHandler();
            }}
          >
            Save
          </Button>
        </div>
      </>
    );
  }
);

// TinymceEditor.propTypes = {
//   value: PropTypes.string,
//   handleChange: PropTypes.func
// };

export default Texteditor;
