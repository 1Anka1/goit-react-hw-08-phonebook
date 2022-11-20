import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
//REDUX
import { getFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice'
import { fetchContacts, addContact } from 'redux/contacts/operations';
import {getFiltredContacts, getState} from '../../redux/contacts/selectors'

//COMPONENTS
import ContactForm from 'components/Contacts/ContactForm';
import ContactList from 'components/Contacts/ContactList';
import Filter from 'components/Filter';
import Section from './Section';

export default function Contacts() {
  const contacts = useSelector(getFiltredContacts)
  const {loading, error} = useSelector(getState);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const isDublicate = ({ name, number }, contacts) => {
  const result = contacts.find(
    item => item.name === name && item.number === number
  );
  return result;
};
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const onAddContact = data => {
    if (isDublicate(data, contacts)) {
      return Report.warning(
        'Warning',
        `${data.name} with this phone number: ${data.number} is already in the contact list.`
      );
    }
    const action = addContact(data)
    dispatch(action)
  };

  const onChangeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value))
  };

  const length = contacts.length;

  return (
    <Section>
      <ContactForm onSubmit={onAddContact} />
      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      {!loading && length > 0 ? (
        <ContactList items={contacts} />
      ) : (
        <p>Contact list is empty.</p>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Oops, something went wrong</p>}
    </Section>
  );
}