import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactList from '../../components/contactList/ContactList';
import SearchBox from '../../components/searchBox/SearchBox';
import ContactForm from "../../components/contactForm/ContactForm";
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { selectContacts, selectFilteredContacts, selectIsLoading, selectError } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const contacts = useSelector(selectContacts);
    const visibleContacts = useSelector(selectFilteredContacts);

    return (
        <div>
            
            <ContactForm/>
            <SearchBox/>
            {isLoading && !error && <p>Request in progress...</p>}
            {visibleContacts.length === 0 ? (
                contacts.length !== 0 ? (
                <ErrorMessage text = {"There are no contacts matching your request."}/>) :
                <>
                    <ErrorMessage text = {"There are no contacts yet, but you can add new one's!"}/>
                </>
                ) : <ContactList/>
            }
        </div>
    )
}