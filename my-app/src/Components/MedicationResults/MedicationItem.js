import React, {Component} from 'react';
import axios from 'axios';
import {ListItem, ListItemText, Collapse, Grid, Badge, Paper, Typography, CircularProgress} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10
  },
  progress: {
    margin: 0
  },
  fullWidth: {
    width: '100%'
  },
  textLeft: {
    textAlign: 'left'
  }
});

class MedicationItem extends Component {
  state = {
    content: [],
    searching: true
  };

  handleClick = () => {
    if(!this.state.content.length){
      return false;
    }
    this.setState(state => ({open: !state.open}));
  };

  componentDidMount() {
    if (this.props.name) {
      const {username, password} = this.props.credentials;
      axios.get(`http://localhost:3030/search_medication?username=${username}&password=${password}&medication_list=${this.props.name}`)
        .then(data => {
          if (!data.data.length) {
            return null;
          }
          this.setState({
            content: [...data.data]
          });
          this.props.groupResult(this.props.name, 'found');
        })
        .catch(error => {
          console.log(error);
          this.props.groupResult(this.props.name, 'missing');
        }).finally(()=>{
          this.setState({
            searching: false
          })
      });
    }
  }

  render() {
    const classes = this.props.classes;
    const medicationDetails = this.state.content.map(med=>(<Grid item xs={12}>
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="body1" component="div">
          <div className={classes.textLeft}>{med.displayName}</div>
          <div className={classes.textLeft}>{med.appearance}</div>
          <div className={classes.textLeft}>{med.doseType}</div>
        </Typography>
      </Paper>
    </Grid>));
    const searching = this.state.searching ? (<CircularProgress className={classes.progress} size={15} />) : null;
    return (
      <div>
        <ListItem {...(this.state.content.length ? {button: true} : {})} onClick={this.handleClick}>
          <div className={classes.fullWidth}>
            {searching}
            <Badge badgeContent={this.state.content.length} color={this.state.content.length ? 'primary' : 'error'}>
              <ListItemText inset primary={this.props.name}/>
            </Badge>
          </div>
          {this.state.content.length ? this.state.open ? <ExpandLess/> : <ExpandMore/> : null}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <Grid container spacing={8}>
            {medicationDetails}
          </Grid>
        </Collapse>
      </div>
    );
  }
}

export default withStyles(styles)(MedicationItem);