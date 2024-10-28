import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete, onArchive }) {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                notes.map((note) => (
                    <NotesItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
                ))
            }
        </div>
    );
}

export default NotesList;