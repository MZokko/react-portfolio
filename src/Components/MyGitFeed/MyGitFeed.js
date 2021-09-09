import React,  { useEffect, useState } from 'react';
import { Card, Grid } from '@material-ui/core';
import axios from 'axios'

const MyGitFeed = () => {

  // loading fetch data from git api
  const  githubApiFetch = async()=>{
    let url= 'https://api.github.com/repos/{MZokko}/{react-portfolio}'
    const response =  await axios.get().then().catch;
    const result = await response.json();
    console.log(result)
  }

  useEffect(() => {
    try {
       githubApiFetch();
    } catch (error) {
      console.log(error.message)
    }
    
  }, [])


  return (
    <>
      <Grid>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Github activity</h6>
        </Grid>
      </Grid>
      <Grid container spacing={3} className='gridGiTCard'></Grid>
    </>
  );
};

export default MyGitFeed;
