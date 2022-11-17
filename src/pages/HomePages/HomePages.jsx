import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <h2>Phonebook</h2>
      <p>Add and manage your contacts in one convinient application. <br />
        Please create an account or log in to use the Phonebook!</p>
    </div>
  );
};

export default HomePage;