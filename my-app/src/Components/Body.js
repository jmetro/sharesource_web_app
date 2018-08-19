import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  container: {
    padding: 10
  }
};
class Body extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
      {this.props.children}
      </div>
    );
  }
}

Body.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);