import { CButton, CCol, CLabel, CRow, CSelect } from "@coreui/react";
import React from "react";

const DepartmentRegistration=()=>{
    return(
        <>
        <CRow>
            <CCol lg='2'>
                <CLabel>Department</CLabel>
            </CCol>
            <CCol lg='4'>
            <CSelect value="">
                  <option value="">.....Please Select......</option>
                  <option value="">HR</option>
                  <option value="">IT</option>
                  <option value="">Infra</option>
                </CSelect>
            </CCol>
            <CCol lg='2'>
                <CLabel>Position</CLabel>
            </CCol>
            <CCol lg='4'>
            <CSelect value="">
                  <option value="">.....Please Select......</option>
                  <option value="">Member</option>
                  <option value="">Admin</option>
                </CSelect>
            </CCol>
        </CRow>
        <CRow>
            <CCol lg='4'></CCol>
            <CCol lg='4'style={{textAlign:'center',marginTop:'20px'}}>
                <CButton className="btn btn-primary">Add</CButton>
            </CCol>
            <CCol lg='4'></CCol>
        </CRow>  
        <CRow style={{marginTop:'20px'}}>
            <CCol>
                <table className="table table-bordered">
                    <thead style={{textAlign:'center'}}>
                        <tr>
                        <th>Department Name</th>
                        <th>Position</th>
                        <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>IT</td>
                            <td>Admin</td>
                            <td>Remove</td>
                        </tr>
                        <tr>
                            <td>HR</td>
                            <td>Member</td>
                            <td>Remove</td>
                        </tr>
                    </tbody>
                </table>
            </CCol>
        </CRow>
        </>
    )
}
export default DepartmentRegistration;