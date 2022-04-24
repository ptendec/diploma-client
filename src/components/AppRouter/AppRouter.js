import React, {useEffect} from 'react';
import {Route, Routes, Navigate, Outlet} from "react-router-dom"
import {useSelector} from "react-redux"
import CreateVacancy from "../../pages/CreateVacancy/CreateVacancy"
import RequireJobSeekerAuth from "../../hoc/RequireJobSeekerAuth/RequireJobSeekerAuth"
import RequireCompanyAuth from "../../hoc/RequireCompanyAuth/RequireCompanyAuth"
import Main from "../../pages/Main/Main"
import CompanyAuthorization from "../../pages/CompanyAuthorization/CompanyAuthorization"
import CompanyRegistration from "../../pages/CompanyRegistration/CompanyRegistration"
import JobSeekerAuthorization from "../../pages/JobSeekerAuthorization/JobSeekerAuthorization"
import JobSeekerRegistration from "../../pages/JobSeekerRegistration/JobSeekerRegistration"
import Vacancy from "../../pages/Vacancy/Vacancy"
import Responses from "../../pages/Responses/Responses"
import JobSeekerProfile from "../../pages/JobSeekerProfile/JobSeekerProfile"
import CV from "../../pages/CV/CV"
import Quit from "../../pages/Quit/Quit"
import MyVacancies from "../../pages/MyVacancies/MyVacancies"
import VacancyResponseJobSeekerProfile from "../VacancyResponseJobSeeker/VacancyResponsesByJobSeekers"

const AppRouter = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Main/>}>
      </Route>
      <Route path={'/company/authorization'} element={<CompanyAuthorization/>}/>
      <Route path={'/company/registration'} element={<CompanyRegistration/>}/>
      <Route path={'/jobSeeker/authorization'} element={<JobSeekerAuthorization/>}/>
      <Route path={'/jobSeeker/registration'} element={<JobSeekerRegistration/>}/>
      <Route path={'/logOut'} element={<Quit/>}/>
      <Route path={'/company/createVacancy'} element={
        <RequireCompanyAuth>
          <CreateVacancy/>
        </RequireCompanyAuth>}>
      </Route>
      <Route path={'/company/vacancyResponses/:vacancyId'} element={
        <RequireCompanyAuth>
          <VacancyResponseJobSeekerProfile />
        </RequireCompanyAuth>}>
      </Route>
      <Route path={'/company/myVacancies'} element={
        <RequireCompanyAuth>
          <MyVacancies />
        </RequireCompanyAuth>}>
      </Route>
      <Route path={'/jobSeeker/vacancies'} element={
        <RequireJobSeekerAuth>
          <Vacancy/>
        </RequireJobSeekerAuth>}>
      </Route>
      <Route path={'/jobSeeker/myResponses'} element={
        <RequireJobSeekerAuth>
          <Responses />
        </RequireJobSeekerAuth>}>
      </Route>
      <Route path={'/jobSeeker/profile'} element={
        <RequireJobSeekerAuth>
          <JobSeekerProfile />
        </RequireJobSeekerAuth>}>
      </Route>
      <Route path={'/jobSeeker/cv'} element={
        <RequireJobSeekerAuth>
          <CV />
        </RequireJobSeekerAuth>}>
      </Route>
    </Routes>
  );
};

export default AppRouter;
