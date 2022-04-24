import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import fetchIntercept from "../../utils/fetchIntercept"
import {setProfile} from "../../store/jobSeekerProfile/reducer"
import VacancyResponseJobSeekerProfile
  from "../../components/VacancyResponseJobSeeker/VacancyResponsesByJobSeekers"
import {useParams} from "react-router-dom"

const VacancyResponses = () => {

  const [profileExists, setProfileExists] = useState()
  const [profile, setProfile] = useState()
  useEffect(() => {
    fetchIntercept(`/jobSeekerBio/${jobSeeker.id}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json'
      }
    }, 'jobSeeker').then(({response, data}) => {
      console.log(response)
      if (response.status === 200) {
        setProfile(data.jobSeekerBio)
      }
    })
  }, [])
  return (
    <div>
      {profileExists ? <VacancyResponseJobSeekerProfile /> : "Профиль отсутсвтвует" }
    </div>
  );
};

export default VacancyResponses;
