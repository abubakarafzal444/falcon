import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
  Button,
  Card,
  Form,
  OverlayTrigger,
  ProgressBar,
  Tooltip
} from 'react-bootstrap';
import * as Yup from 'yup';
import DropDownInput from './DropDownInput';
import { useFormik } from 'formik';
import AddLogoModal from './AddLogoModal';

const MyTextInput = ({
  label,
  className,
  controlId,
  style,
  controlClass,
  controlStyle,
  formatter,
  name,
  keyy,
  formik,
  ...props
}) => {
  let formattedValue;
  let { disabled } = props;
  if (disabled && formatter) {
    if (formatter.position === 'after') {
      formattedValue = `${formik.values[name]} ${formatter.value}`;
    } else {
      formattedValue = `${formatter.value} ${formik.values[name]}`;
    }
  } else {
    formattedValue = formik.values[name];
  }
  return (
    <Form.Group
      keyy={keyy}
      className={className}
      style={style}
      controlId={controlId}
    >
      {label && <Form.Label className="mx-1">{label}</Form.Label>}
      <Form.Control
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formattedValue}
        {...props}
        className={controlClass}
        style={controlStyle}
        isInvalid={formik.touched[name] && formik.errors[name]}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <Form.Text className="text-muted">{formik.errors[name]}</Form.Text>
      ) : null}
    </Form.Group>
  );
};

const MyCheckbox = ({
  label,
  className,
  controlId,
  style,
  checkClass,
  checkStyle,
  name,
  keyy,
  formik,
  ...props
}) => {
  return (
    <Form.Group
      keyy={keyy}
      className={className}
      controlId={controlId}
      style={style}
    >
      <Form.Check
        inline
        className={checkClass}
        {...formik.getFieldProps(name)}
        {...props}
      />
      <Form.Label className="mb-0">{label}</Form.Label>
    </Form.Group>
  );
};

const LeftForm = ({ data }) => {
  const [editMode, setEditMode] = useState(false);
  let dollarUSLocale = Intl.NumberFormat('en-US');
  const toggleMode = () => {
    setEditMode(state => !state);
  };

  const bodyClickHandler = () => {
    if (inputClickedBlockchain) setInputClickedBlockchain(state => !state);
    if (inputClickedStandard) setInputClickedStandard(state => !state);
  };
  const [inputClickedBlockchain, setInputClickedBlockchain] = useState(false);
  const [inputClickedStandard, setInputClickedStandard] = useState(false);
  const [showLogoModal, setShowLogoModal] = useState(false);
  const toggleLogoModal = () => setShowLogoModal(state => !state);

  const formik = useFormik({
    initialValues: {
      Name: data.name,
      Symbol: data.symbol,
      Blockchain: data.Blockchain,
      Contract: data.contract,
      TokenStandard: data.TokenStandard,
      Mintable: data.Mintable,
      Decimals: data.Decimals,
      CirculatingSupply: data.CirculatingSupply,
      TotalSupply: data.TotalSupply,
      ProgressBar: (data.CirculatingSupply / data.TotalSupply) * 100,
      TotalTaxes: data.TotalTaxes,
      Dividends: data.Dividends,
      PresalePrice: data.PresalePrice,
      LaunchPrice: data.LaunchPrice,
      PresaleDate: new Date(data.PresaleDate).toISOString().split('T')[0],
      LaunchDate: new Date(data.LaunchDate).toISOString().split('T')[0],
      MinSlipPage: data.MinSlipPage,
      MaxSlipPage: data.MaxSlipPage
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      Symbol: Yup.string().max(10, 'Must be 10 characters or less'),
      Blockchain: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      Contract: Yup.string().max(100, 'Must be 100 characters or less'),
      TokenStandard: Yup.string().max(10, 'Must be 10 characters or less'),
      Mintable: Yup.boolean(),
      Decimals: Yup.string().max(2, 'Must be 12 characters or less'),
      CirculatingSupply: Yup.string().max(25, 'Must be 25 characters or less'),
      TotalSupply: Yup.string().max(25, 'Must be 25 characters or less'),
      ProgressBar: Yup.string(),
      TotalTaxes: Yup.string().max(2, 'Must be 2 characters or less'),
      Dividends: Yup.string().max(2, 'Must be 2 characters or less'),
      PresalePrice: Yup.string().max(25, 'Must be 25 characters or less'),
      LaunchPrice: Yup.string().max(25, 'Must be 25 characters or less'),
      PresaleDate: Yup.date(),
      LaunchDate: Yup.date(),
      MinSlipPage: Yup.string().max(2, 'Must be 2 characters or less'),
      MaxSlipPage: Yup.string().max(2, 'Must be 2 characters or less')
    }),
    onSubmit: values => {
      console.log(values);
      toggleMode();
    }
  });

  const dataReciver = ({ data, name }) => {
    formik.setFieldValue(name, data);
  };

  return (
    <Card
      className="my-3 px-3 py-2"
      style={{ width: '350px' }}
      onClick={bodyClickHandler}
    >
      <Form onSubmit={formik.handleSubmit}>
        <div className="d-flex justify-content-between pt-1">
          <h5> details</h5>

          <OverlayTrigger placement="right" overlay={<Tooltip>Edit</Tooltip>}>
            <span onClick={toggleMode}>
              <FontAwesomeIcon
                icon="edit"
                size="lg"
                style={{
                  color: `${editMode ? '#1e1bbf' : 'black'}`,
                  fontWeight: `${editMode ? 'bold' : ''}`
                }}
              />
            </span>
          </OverlayTrigger>
        </div>
        <div className="d-flex align-items-end mt-3 mb-2">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>Add Logo</Tooltip>}
          >
            <img
              src={data?.logo}
              alt=""
              style={{ width: '60px', height: '50px' }}
              onClick={toggleLogoModal}
            />
          </OverlayTrigger>

          <MyTextInput
            disabled={!editMode}
            className="mx-2"
            controlId="formGroupName"
            label="Name"
            placeholder="Name"
            name="Name"
            type="text"
            keyy="Name"
            formik={formik}
          />
          <MyTextInput
            disabled={!editMode}
            className="mx-2"
            controlId="formGroupSymbol"
            label="Symbol"
            placeholder="Symbol"
            name="Symbol"
            type="text"
            keyy="Symbol"
            formik={formik}
          />
        </div>
        <div className="d-flex align-items-end mb-3 justify-content-between">
          <DropDownInput
            array={['Bitcoin', 'Ethereum', 'Dogecoin']}
            invertClick={() => setInputClickedBlockchain(true)}
            Inputclicked={inputClickedBlockchain}
            formLabel={'Blockchain'}
            dataReciver={dataReciver}
            disabled={editMode ? false : true}
            formik={formik}
            name="Blockchain"
            keyy="Blockchain"
          />

          <img
            src={data?.BlockchainLogo}
            alt=""
            style={{
              width: '35px',
              height: '35px',
              position: 'relative',
              bottom: '17px',
              left: '5px'
            }}
          />
        </div>

        <DropDownInput
          array={['AE6F', 'Y6HY', 'U5GW']}
          invertClick={() => setInputClickedStandard(true)}
          Inputclicked={inputClickedStandard}
          formLabel={'Token Standard'}
          dataReciver={dataReciver}
          disabled={editMode ? false : true}
          formik={formik}
          name="TokenStandard"
          keyy="TokenStandard"
        />
        <MyTextInput
          disabled={!editMode}
          className="mb-3"
          controlId="formGroupContract"
          label="Contract"
          placeholder="Contract"
          name="Contract"
          type="text"
          style={{ width: '85%' }}
          keyy="Contract"
          formik={formik}
        />
        <div className="d-flex mb-2 align-items-start">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>Are tokens mintable</Tooltip>}
          >
            <span>
              <MyCheckbox
                disabled={!editMode}
                style={{ marginRight: '35px' }}
                label="mintable"
                className="mb-1"
                controlId="mintable"
                name="Mintable"
                checkClass="me-2"
                formik={formik}
              />
            </span>
          </OverlayTrigger>

          <MyTextInput
            disabled={!editMode}
            className="w-25"
            controlId="formGroupDecimals"
            label="Decimals"
            placeholder="Decimals"
            name="Decimals"
            type="text"
            controlClass="w-50 px-0 text-center"
            keyy="Decimals"
            formik={formik}
          />
        </div>

        <MyTextInput
          disabled={!editMode}
          style={{ width: '85%' }}
          className="mb-2"
          controlId="formGroupCsupply"
          label="Circulating Supply"
          placeholder="Circulating Supply"
          name="CirculatingSupply"
          type="text"
          keyy="CirculatingSupply"
          formatter={{ value: formik.values.Symbol, position: 'after' }}
          formik={formik}
        />
        {!editMode && (
          <div className="d-flex mt-1">
            <ProgressBar
              className="w-75 "
              now={
                (formik.values.CirculatingSupply / formik.values.TotalSupply) *
                100
              }
            />
            <h6 style={{ marginLeft: '15px', fontWeight: 'bold' }}>
              {(
                (formik.values.CirculatingSupply / formik.values.TotalSupply) *
                100
              ).toFixed(2)}
              %
            </h6>
          </div>
        )}
        <MyTextInput
          disabled={!editMode}
          style={{ width: '85%' }}
          className="mb-3"
          controlId="formGroupTsupply"
          label="Total Supply"
          placeholder="Total Supply"
          name="TotalSupply"
          type="text"
          formatter={{ value: formik.values.Symbol, position: 'after' }}
          keyy="TotalSupply"
          formik={formik}
        />
        <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>Tokenomics</h6>
        <div className="d-flex">
          <MyTextInput
            disabled={!editMode}
            style={{ marginRight: '20px' }}
            className="my-3 d-flex"
            controlId="formGroupTaxes"
            label="Total Taxes"
            placeholder="Total Taxes"
            name="TotalTaxes"
            type="text"
            controlClass="p-0 text-center"
            controlStyle={{ width: '45px', marginLeft: '10px' }}
            formatter={{ value: '%', position: 'after' }}
            keyy="TotalTaxes"
            formik={formik}
          />

          <MyTextInput
            disabled={!editMode}
            className="my-3 d-flex"
            controlId="formGroupDividends"
            label="Dividends"
            placeholder="Dividends"
            name="Dividends"
            type="text"
            controlClass="p-0 text-center"
            controlStyle={{ width: '35px', marginLeft: '10px' }}
            formatter={{ value: '%', position: 'after' }}
            keyy="Dividends"
            formik={formik}
          />
        </div>
        <h6 className="m-0" style={{ fontSize: '15px', fontWeight: 'bold' }}>
          Slippage
        </h6>
        <div className="d-flex mt-1">
          <MyTextInput
            disabled={!editMode}
            controlStyle={{ width: '35px' }}
            controlId="formGroupMisilppage"
            controlClass="p-0 text-center"
            name="MinSlipPage"
            type="text"
            formatter={{ value: '%', position: 'after' }}
            keyy="MinSlipPage"
            formik={formik}
          />

          <h5 className="px-1">-</h5>

          <MyTextInput
            disabled={!editMode}
            controlStyle={{ width: '45px' }}
            controlId="formGroupMasilppage"
            controlClass="p-0 text-center"
            name="MaxSlipPage"
            type="text"
            formatter={{ value: '%', position: 'after' }}
            keyy="MaxSlipPage"
            formik={formik}
          />
        </div>
        <div className="d-flex my-2">
          <MyTextInput
            disabled={!editMode}
            style={{ width: '40%', marginRight: '15px' }}
            controlId="formGroupPprice"
            label="Presale Price"
            placeholder="Presale Price"
            name="PresalePrice"
            type="text"
            formatter={{ value: '$', position: 'before' }}
            keyy="PresalePrice"
            formik={formik}
          />

          <MyTextInput
            disabled={!editMode}
            style={{ width: '60%' }}
            controlId="formGroupPdate"
            label="Presale Date"
            placeholder="Presale Date"
            name="PresaleDate"
            type="date"
            keyy="PresaleDate"
            formik={formik}
          />
        </div>
        <div className="d-flex my-2">
          <MyTextInput
            disabled={!editMode}
            style={{ width: '40%', marginRight: '15px' }}
            controlId="formGroupLprice"
            label="Launch Price"
            placeholder="Launch Price"
            formatter={{ value: '$', position: 'before' }}
            name="LaunchPrice"
            type="text"
            keyy="LaunchPrice"
            formik={formik}
          />

          <MyTextInput
            disabled={!editMode}
            style={{ width: '60%' }}
            controlId="formGroupLdate"
            label="Launch Date"
            placeholder="Launch Date"
            name="LaunchDate"
            type="date"
            keyy="LaunchDate"
            formik={formik}
          />
        </div>

        {editMode && (
          <div className="d-flex justify-content-end mt-4 mb-2">
            <Button
              variant="light"
              onClick={() => {
                formik.handleReset();
                toggleMode();
              }}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        )}
      </Form>
      {showLogoModal && <AddLogoModal toggleLogoModal={toggleLogoModal} />}
    </Card>
  );
};
export default LeftForm;
