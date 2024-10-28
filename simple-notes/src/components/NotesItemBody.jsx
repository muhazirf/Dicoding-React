import React from 'react';


function NotesItemBody({ id, title, body }) {
    return (
        <>
            <div>
                <h4 className="font-bold mb-3">{title}</h4>
                <p className="text-sm">
                    {body}
                </p>
            </div>
        </>
    )
}

export default NotesItemBody;