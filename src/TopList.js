import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '72ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function TopList() {
  const classes = useStyles();

  const [topListData, setTopListData] = React.useState(null);
  React.useEffect(() => {
    fetch("/getTopList")
      .then((res) => res.json())
      .then((data) => setTopListData(data));
  }, []);
  console.log(topListData)
  if (!topListData){
    return (<p>Loading...</p>)
  }
  
  return (
    <List className={classes.root}>
    {topListData.map(person => (
      <React.Fragment>
      <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={person.username} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={person.fullname}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {person.username}
            </Typography>
            {" — Antall følgere: "}{person.instagram_sub_count}{". "} 
            {person.nrk_hosted_programs ? "NRK programmer: ":null}
            {person.nrk_hosted_programs ? person.nrk_hosted_programs.map(
              program=>(<a href={program.url}>{program.title} </a>)):null}
            
          </React.Fragment>
        }
      />
      
    </ListItem>
    <Divider variant="inset" component="li" />
    </React.Fragment>
    
    ))}
    </List>
    
  );
}