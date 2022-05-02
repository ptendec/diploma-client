import React, {useEffect, useState} from 'react';
import classes from "./CV.module.css"
import fetchIntercept from './../../utils/fetchIntercept'
import {useDispatch, useSelector} from "react-redux"
import {setProfile} from "../../store/jobSeekerProfile/reducer"
import JobSeekerProfileShow from "../../components/JobSeekerProfile/JobSeekerProfileShow"
import CreateCv from "../../components/CreateCV/CreateCV"
import {removeCv, setCv} from "../../store/cv/reducer"
import ShowCV from "../../components/ShowCV/ShowCV"

const CV = () => {
  const dispatch = useDispatch()
  const jobSeeker = useSelector(state => state.jobSeeker.jobSeeker)
  const cvExists = useSelector(state => state.cv.cvExists)
  useEffect(() => {
    fetchIntercept(`/cv/${jobSeeker.id}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json'
      }
    }, 'jobSeeker').then(({response, data}) => {
      console.log(response)
      if (response.status === 200) {
        dispatch(setCv(data.cv))
      }
      else {
        dispatch(removeCv({}))
      }
    })
  }, [])
  return (
    <div className={classes.cv}>
      {cvExists ? <ShowCV /> : <CreateCv />}
    </div>
  );
};

export default CV;
