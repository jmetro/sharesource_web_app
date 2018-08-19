import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    width: 300,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

function Login(props) {
  const { classes } = props;
  function hasError(name) {
    if(props.submitted && !props.inputs[name]){
      return {error: true};
    }
    else null;
  }
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="username"
            label="Username"
            className={classes.textField}
            value={props.inputs.username}
            onChange={(event)=>props.onChange(event, 'username')}
            required
            {...hasError('username')}
          />
          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            value={props.inputs.password}
            onChange={(event)=>props.onChange(event, 'password')}
            margin="normal"
            required
            {...hasError('password')}
          />
          <TextField
            id="medications"
            label="Medications"
            className={classes.textField}
            value={props.inputs.medications}
            onChange={(event)=>props.onChange(event, 'medications')}
            margin="normal"
            required
            multiline
            {...hasError('medications')}
          />
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>{props.onSearch(props);}}>Search</Button>
        </CardActions>
      </Card>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);