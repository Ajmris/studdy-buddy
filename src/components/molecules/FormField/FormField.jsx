import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Label} from '../../atoms/Label';
import {Input} from '../../atoms/Input';

const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const FormField =({onChange, value, label, name, id, type="text"})=>{
    return(
        <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <Input name={name} id={id} type={type} value={value} onChange={onChange}/>
        </Wrapper>
    )
};
FormField.propTypes={
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
}
export default FormField;