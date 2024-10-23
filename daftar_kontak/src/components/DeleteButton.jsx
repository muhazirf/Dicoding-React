import React from 'react';

function DeleteButton({ id, onDelete }) {
    return <button className='conctact-item__delete' onClick={() => onDelete(id)}> x </button>
}

export default DeleteButton;