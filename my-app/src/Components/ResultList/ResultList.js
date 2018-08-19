import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Paper, Typography, Grid, Badge} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

function ResultList(props) {
  const {classes} = props;

  const medsMissing = props.medicationResult.missing.map((meds, index)=> <div key={meds + index + '-missing'}><Typography>{meds}</Typography></div>);
  const medsFound = props.medicationResult.found.map((meds, index) => <div key={meds + index + '-found'}><Typography>{meds}</Typography></div>);

  return (
    <div className={classes.root}>
      <Typography variant="headline">
        Result List
      </Typography>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={1}>
            <Badge badgeContent={props.medicationResult.missing.length} color="error">
              <Typography variant="headline" component="h4">
                Missing
              </Typography>
            </Badge>
            {medsMissing}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={1}>
            <Badge className={classes.margin} badgeContent={props.medicationResult.found.length} color="primary">
              <Typography variant="headline" component="h4">
                Found
              </Typography>
            </Badge>
            {medsFound}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

ResultList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultList);