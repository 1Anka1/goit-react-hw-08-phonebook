import React, { useMemo } from 'react'
import { nanoid } from 'nanoid'

//COMPONENTS
import css from './ContactForm.module.css'
import useForm from 'shared/hooks/useForm'

const initialState = {
		name: '',
		number: '',
}

export default function ContactForm({ onSubmit }) {
	const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
	const nameId = useMemo(()=> nanoid(), []);
	const numberId = useMemo(() => nanoid(), []);
	
	return (
		<>
		      <h1>Phonebook</h1>
				<fieldset>
					<form onSubmit={handleSubmit}>
						<label>
							<h2 className={css.title}>Name</h2>
						<input
							className={css.inputForm}
								id={nameId}
								type="text"
								value={state.name}
								name="name"
								onChange={handleChange}
								placeholder="Please enter your full name "
								pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
								title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
								required
							/>
						</label>

						<label>
							<h2 className={css.title}>Number</h2>
						<input
														className={css.inputForm}
								id={numberId}
								type="tel"
								name="number"
								onChange={handleChange}
								value={state.number}
								placeholder="Please enter your number"
								pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
								title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
								required
							/>
						</label>
						<button className={css.addBtn}>Add Contact</button>
					</form>
			</fieldset>
			</>
	)
};