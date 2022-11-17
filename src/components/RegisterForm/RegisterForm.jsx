import { useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
//COMPONENTS
import useForm from '../../shared/hooks/useForm';
import TextField from "../../shared/TextField/TextFiled";
import styled from '../../shared/TextField/text-field.module.css'
import initialState from "./initialState";
import fields from "./fields";

const RegisterForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const nameId = useMemo(()=> nanoid(), []);
    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const {name, email, password} = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField id={nameId} value={name} handleChange={handleChange} {...fields.name} />
            <TextField id={emailId} value={email} handleChange={handleChange} {...fields.email} />
            <TextField id={passwordId} value={password} handleChange={handleChange} {...fields.password} />
            <button className={styled.btnForm}>Register</button>
        </form>
    )
}

export default RegisterForm;

RegisterForm.defaultProps = {
    onSubmit: () => {}
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
}