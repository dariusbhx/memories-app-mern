import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Forms/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  

  const memories = 'https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI';

  return (
   <Container max-width ="lg">
     <AppBar  className ={classes.appBar}position ="static" color="inherit">
       <Typography className ={classes.heading} variant="h2" align="center">Memories</Typography> 
       <img className={classes.image}  src ={memories} alt = "mem" height ="60"/>
     </AppBar>
     <Grow in>
        <Container>
            <Grid container justify ="space-between" alignItems ="stretch" spacing ={3}>
                <Grid item xs={12} sm ={7}>
                    <Posts />
                </Grid>
                <Grid item xs={12} sm ={4}>
                    <Form />
                </Grid>
            </Grid>
        </Container>
     </Grow>
   </Container>
  );
};

export default App;