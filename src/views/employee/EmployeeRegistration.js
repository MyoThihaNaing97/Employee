import {
  CCard,
  CCardBody,
  CCardText,
  CCol,
  CInput,
  CInputRadio,
  CLabel,
  CRow,
} from "@coreui/react";
import React from "react";

const EmployeeRegistration = (props) => {
  const { NameHandler, EmailHandler, radiodata,GenderHandle,genderid,PasswordHandler,ConfirmPasswordHandler } = props;
  return (
    <>
      <CRow style={{marginBottom:'20px'}}>
        <CCol lg="3">
          <CLabel className="label">Name *</CLabel>
        </CCol>
        <CCol lg="3">
          <CInput
            type="text"
            value=""
            onChange={NameHandler}
            placeholder="Enter Your Name"
          />
        </CCol>
        <CCol lg="3">
          <CLabel className="label">Email *</CLabel>
        </CCol>
        <CCol lg="3">
          <CInput
            type="text"
            value=""
            onChange={EmailHandler}
            placeholder="Enter Your Email"
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol lg="3" style={{marginBottom:"20px"}}>
          <CLabel className="radioLabel">Gender *</CLabel>
        </CCol>
          {radiodata.map((data, index) => {
            return (
                <>
              <CCol key={index} lg="2" style={{marginLeft:'20px'}}>
                <CInputRadio
                  value={data.id}
                  name={data.name}
                  checked={genderid === parseInt(data.id) ? true : false}
                  onChange={() => GenderHandle(data.id, data.name)}
                />
                <CLabel className="radioLabel">{data.name}</CLabel>
              </CCol>
              </>
            );
          })}
      </CRow>
      <CRow  style={{marginBottom:'20px'}}>
      <CCol lg="3">
          <CLabel className="label">Password *</CLabel>
        </CCol>
        <CCol lg="3">
          <CInput
            type="password"
            value=""
            onChange={PasswordHandler}
            placeholder="Enter Your Password"
          />
        </CCol>
        <CCol lg="3">
          <CLabel className="label">Confirm Password *</CLabel>
        </CCol>
        <CCol lg="3">
          <CInput
            type="password"
            value=""
            onChange={ConfirmPasswordHandler}
            placeholder="Enter Your PasswordAgain"
          />
        </CCol>
      </CRow>
    </>
  );
};
export default EmployeeRegistration;
