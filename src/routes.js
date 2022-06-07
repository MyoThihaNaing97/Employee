import React from 'react';

const  StudentRegistration = React.lazy(() => import('./views/registration/RegistrationIndex'));
// const  StudentRegistrationFromExcel = React.lazy(() => import('./views/registration/StudentRegistrationFromExcel'));
const StudentList = React.lazy(() => import('./views/list/ListIndex'));
const Employee =React.lazy(()=>import('./views/employee/EmployeeIndex'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/registration', name: 'Student Registration', component: StudentRegistration },
  { path:'/employee',name:"Employee Registration",component:Employee},
  // { path: '/registration-from-excel', name: 'Student Registration From Excel', component: StudentRegistrationFromExcel },
  { path: '/list', exact: true,  name: 'Student List', component: StudentList }
];

export default routes;
