import PropTypes from 'prop-types';
import React from 'react'
import { useDispatch } from 'react-redux';

// import { useRemoveContactMutation } from 'redux/contacts/api';
// const [removeContact] = useRemoveContactMutation()

import css from './ContactList.module.css'
import { removeContact } from 'redux/contacts/operations';

export default function ContactList({ items }) {
  const dispatch = useDispatch();

   const onRemoveBook = id => {
        dispatch(removeContact(id));
   };
  
  const elem = items.map(({ name, number, id }) => {
		return (
      <li className={css.contactListItem } key={id}>
        {name} : {number} <button className={ css.remoteBtn} onClick={() => onRemoveBook(id)}>x</button>
			</li>
		)
	})
	return (
		<div>
			<ol className={css.contactList}>{elem}</ol>
		</div>
	)
}
ContactList.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};
