import React, { useState } from "react";
import EmployeeRegistration from "./EmployeeRegistration";
import DepartmentRegistration from "./DepartmentRegistration";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
//employee registration
const EmployeeIndex = () => {
  const [genderid, setGenderID] = useState(""); //Radio State ID
  const [gendername, setGenderName] = useState(""); //Radio State Name
  const [password,setPassword]=useState("")//Password
  const [confirmpassword,setConfirmPassword]=useState("");
  const [gender, setGender] = useState([
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ]); // Radio Data
  const GenderHandle = (id, name) => {
    setGenderID(id);
    setGenderName(name);
  }; //set radioid
  const PasswordHandler=(e)=>{
      setPassword(e.target.value);
  }
  const ConfirmPasswordHandler=(e)=>{
      setConfirmPassword(e.target.value);
  }
  return (
    <>
      <CCard>
        <CCardHeader style={{ textAlign: "center", fontSize: "20px" }}>Employee Registration</CCardHeader>
        <CCardBody>
          <CCardText >
          Personal Detail
          </CCardText>
        </CCardBody>
        <CCard>
          <CCardBody style={{margin:'10px'}}>
            <CCardText>
              <EmployeeRegistration
                radiodata={gender}
                GenderHandle={GenderHandle}
                genderid={genderid}
                PasswordHandler={PasswordHandler}
                ConfirmPasswordHandler={ConfirmPasswordHandler}
              />
            </CCardText>
          </CCardBody>
          <CCard>
              <CCardHeader>Department Position</CCardHeader>
              <CCardBody>
                  <CCardText>
                      <DepartmentRegistration/>
                  </CCardText>
              </CCardBody>
          </CCard>
        </CCard>
      </CCard>
    </>
  );
};

export default EmployeeIndex;
