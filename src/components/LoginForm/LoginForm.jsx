import { useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
//COMPONENTS
import useForm from '../../shared/hooks/useForm';
import TextField from "../../shared/TextField/TextFiled";
import styled from '../../shared/TextField/text-field.module.css'
import initialState from "./initialState";
import fields from "./fields";
import css from './loginForm.module.css'

const LoginForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const {email, password} = state;

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <TextField id={emailId} value={email} handleChange={handleChange} {...fields.email} />
            <TextField id={passwordId} value={password} handleChange={handleChange} {...fields.password} />
            <button className={styled.btnForm}>Login</button>
        </form>
    )
}

export default LoginForm;

LoginForm.defaultProps = {
    onSubmit: () => {}
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
}
