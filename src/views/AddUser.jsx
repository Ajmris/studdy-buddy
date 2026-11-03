import React, { useContext, useReducer} from 'react';
import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import { Title } from '../components/atoms/Title/Title';
import { UsersContext } from '../providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: ''
};

const actionTypes = {
  inputChange: 'INPUT_CHANGE',
  clearValues: 'CLEAR_VALUES',
  consentToggle: 'CONSENT_TOGGLE',
  setError: 'SET_ERROR'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearValues:
      return initialFormState;
    case actionTypes.consentToggle:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.setError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};
const veryLongFunction = (number) => {
  for(let i=0; i<30000000; i++);
  return `Roman ${number}`;};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const [randomNumber, setRandomNumber] = React.useState(0);
  const {handleAddUser}=useContext(UsersContext);

  const getRoman = React.useMemo(() => veryLongFunction(randomNumber), [randomNumber]);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmitUser=(e)=>{
    e.preventDefault();
    if(formValues.consent){
      handleAddUser(formValues);
      dispatch({ type: actionTypes.clearValues });
    }else{
      dispatch({ type: actionTypes.setError, errorValue: 'You need to give consent to add a new student.' });
    }
  }
  
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <Title>{getRoman}</Title>
      <p>{formValues.customValue}</p>
      <Button onClick={() => dispatch({ type: actionTypes.inputChange, field: 'customValue', value: randomNumber })}>Add</Button>
      <Button onClick={() => dispatch({ type: actionTypes.inputChange, field: 'customValue', value: randomNumber - 1 })}>Subtract</Button><br />
      <Button onClick={() => setRandomNumber(Math.random())}>Get random number</Button>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField label="Consent" id="consent" name="consent" type="checkbox" checked={formValues.consent} onChange={()=>dispatch({ type: 'CONSENT_TOGGLE' })} />
      <Button type="submit">Add</Button>
      {formValues.error ? <p style={{ color: 'red' }}>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;