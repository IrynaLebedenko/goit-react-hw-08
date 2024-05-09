import css from './ContactList.module.css';
import Contact from '../contact/Contact';
import { nanoid } from 'nanoid';
import { useSelector } from "react-redux";
import { selectFilteredContacts } from '../../redux/contacts/selectors';

// const searchContacts = (contacts, filterValue) => {
//     return contacts.filter((contact) =>{
//        return contact.name.toLowerCase().includes(filterValue.toLowerCase())}
//     )
// }

const ContactList = () => {
  
    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.contactsList}>
            
            {filteredContacts.map((contact) => 
                    <li className={css.contactsItem} key={ nanoid()}>
                    <Contact name={contact.name} number={contact.number} id={contact.id}/>
                </li>
                )}

        </ul>
    )
}
export default ContactList;