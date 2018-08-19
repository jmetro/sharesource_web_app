import React, {Component} from 'react';
import Login from './Login/Login';
import ResultList from './ResultList/ResultList';
import MedicationResults from './MedicationResults/MedicationResult';
class MedicationSearch extends Component {
  state = {
    inputs: {
      username: '',
      password: '',
      medications: ''
    },
    medicationList: [],
    medicationResult: {
      missing: [],
      found: []
    }
  };

  searchMedicationHandler(){
    this.setState({
      submitted: true
    });
    const {username, password, medications} = this.state.inputs;
    if(!username || !password || !medications){
      return false;
    }
    const medicationList = medications.split(',');
    this.setState({
      medicationList: [],
      medicationResult: {
        missing: [],
        found: []
      }
    });
    setTimeout(()=>{
      this.setState({medicationList});
    });
    console.log(this.state);
  }

  groupResultHandler(name, status){
    console.log(name, status);
    const newArray = [...this.state.medicationResult[status], name];
    this.setState({
      medicationResult: {
        ...this.state.medicationResult,
        [status]: newArray
      }
    });
  }
  onChangeHandler(event, field){
    const updatedFields = {
      ...this.state, inputs: {
        ...this.state.inputs, [field]: event.target.value
      }
    };
    this.setState({
      inputs: {...updatedFields.inputs}
    })
  }
  render(){
    return (
      <div>
        <Login onSearch={this.searchMedicationHandler.bind(this)} inputs={this.state.inputs}
               submitted={this.state.submitted}
               onChange={this.onChangeHandler.bind(this)} />
        <ResultList medicationResult={this.state.medicationResult}/>
        <MedicationResults medicationList={this.state.medicationList} credentials={this.state.inputs} groupResult={this.groupResultHandler.bind(this)}/>
      </div>
    )
  }
}

export default MedicationSearch;