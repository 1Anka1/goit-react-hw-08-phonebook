import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

//REDUX
import { getFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice'
import { fetchContacts, addContact } from 'redux/contacts/operations';
import {getFiltredContacts, getState} from '../../redux/contacts/selectors'
// import { useGetContactsQuery, useAddContactMutation } from 'redux/contacts/api';

//COMPONENTS
import ContactForm from 'components/Contacts/ContactForm';
import ContactList from 'components/Contacts/ContactList';
import Filter from 'components/Filter';
import Section from './Section';

export default function Contacts() {
  // const [addContact] = useAddContactMutation();
  // const { data =[], isLoading, isSuccess, isError } = useGetContactsQuery();

  const contacts = useSelector(getFiltredContacts)
  const {loading, error} = useSelector(getState);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const onAddContact = data => {
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
      {loading && <p>...loading</p>}
      {error && <p>oops, something went wrong</p>}
    </Section>
  );
}