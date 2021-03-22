import React from 'react';
import { Card, Grid } from '@material-ui/core';
function MyGitFeed() {
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
}

export default MyGitFeed;
