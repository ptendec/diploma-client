import React, {useEffect, useState} from 'react';
import classes from "./JobSeekerProfile.module.css"
import fetchIntercept from './../../utils/fetchIntercept'
import {useDispatch, useSelector} from "react-redux"
import CreateProfile from "../CreateProfile/CreateProfile"
import {setProfile} from "../../store/jobSeekerProfile/reducer"
import JobSeekerProfileShow from "../../components/JobSeekerProfile/JobSeekerProfileShow"

const JobSeekerProfile = () => {
  const dispatch = useDispatch()
  const jobSeeker = useSelector(state => state.jobSeeker.jobSeeker)
  const profileExists = useSelector(state => state.jobSeekerProfile.profileExists)
  useEffect(() => {
    fetchIntercept(`/jobSeekerBio/${jobSeeker.id}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json'
      }
    }, 'jobSeeker').then(({response, data}) => {
      console.log(response)
      if (response.status === 200) {
        dispatch(setProfile(data.jobSeekerBio))
      }
    })
  }, [])
  return (
    <div className={classes.jobSeekerProfile}>
      {profileExists ? <JobSeekerProfileShow /> : <CreateProfile />}
    </div>
  );
};

export default JobSeekerProfile;
