import React, {Component} from 'react';
import {List, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MedicationItem from './MedicationItem';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  mt20: {
    marginTop: 20
  }
});

class MedicationResult extends Component {
  classes = this.props.classes;

  render() {
    const items = this.props.medicationList.map((med, index) =>
      <MedicationItem key={med + index} name={med} credentials={this.props.credentials}
                      groupResult={this.props.groupResult}/>);
    const list = this.props.medicationList.length ? (<List component="nav">
      {items}
    </List>) : null;
    return (
      <div className={this.classes.mt20}>
        <Typography variant="headline">
          Medication Result
        </Typography>
        <div className={this.classes.root}>
          {list}
        </div>
      </div>
    );
  }
}

MedicationResult.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MedicationResult);