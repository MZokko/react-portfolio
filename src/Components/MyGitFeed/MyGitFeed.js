import React,  { useEffect, useState } from 'react';
import { Card, Grid } from '@material-ui/core';

const MyGitFeed = () => {

  //loading fetch data from git api
  const  githubApiFetch = async()=>{
    const url= 'https://api.github.com/users/{MZokko}'
    const response =  await fetch(url);
    const result = await response.json();
    console.log(result)
  }

  useEffect(() => {
    githubApiFetch();
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
