import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contact }) {
    return (
        <div className="contact-list">
            {
                contact.map((contact) => (
                    <ContactItem key={contact.id} {...contact} />
                ))
            }
        </div>
    )
}

export default ContactList;