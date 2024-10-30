import React from 'react';
import NotesItemBody from './NotesItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NotesItem({ id, title, body, color, archived, createdAt, onDelete, onArchive }) { // Add id to the props
    return (
        <div className={`w-full h-64 flex flex-col justify-between dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4 
            ${color === 'white'
                ? 'bg-white dark:bg-gray-800 dark:text-white'
                : `text-gray-800 ${color === 'pink'
                    ? 'bg-pink-300'
                    : color === 'blue'
                        ? 'bg-blue-300'
                        : color === 'green'
                            ? 'bg-green-300'
                            : 'bg-yellow-300'
                }`
            }
            }`}>
            <NotesItemBody title={title} body={body} createdAt={createdAt} />

            <div className='flex justify-between items-center'>
                <div className={color === 'white' ? `text-dark dark:text-white` : `text-dark`}>
                    <p className='text-sm'>{new Date(createdAt,).toDateString()}</p>
                </div>
                <div className='grid grid-cols-2 gap-x-2'>
                    <DeleteButton onDelete={() => onDelete(id)} />
                    <ArchiveButton onArchive={() => onArchive(id)} archived={archived} />
                </div>
            </div>
        </div>
    )
}

export default NotesItem;
