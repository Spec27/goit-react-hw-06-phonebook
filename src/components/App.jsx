import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import s from './App.module.css';

function App() {
  return (
    <>
      <div className={s.Container}>
        <h1 className={s.Title}>Phonebook</h1>
        <Form />
        <h2 className={s.Title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}

export default App;
