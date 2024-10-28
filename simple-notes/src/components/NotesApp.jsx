import React from 'react';
import '../style/App.css';
import { TabComponent } from './TabComponent';
import HeaderApp from '../layout/HeaderApp';
import NotesInput from './NotesInput';
import NotesList from './NotesList';
import SearchInput from './SearchInput';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //cache notes
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      archivedNotes: parseInt(localStorage.getItem('archivedNotes')) || 0,
      selectedTab: 'active', // add state to track selected tab
      searchQuery: '', // add state to track search query
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.switchTabHandler = this.switchTabHandler.bind(this); // bind switchTabHandler method
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this); // bind search change handler

  }

  AppUtils() {
    console.log('AppUtils');
    const Tabs = TabComponent();

    return Tabs;
  }

  onAddNoteHandler({ title, body, color }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            color,
            archived: false,
            createdAt: new Date().getTime(),
          },
        ],
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.state.notes) {
      this.saveNotesToLocalStorage();
    }
  }

  saveNotesToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNoteHandler(id) {
    console.log(this.state.notes);
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
      return note;
    });
    this.setState({ notes }, () => {
      console.log('Notes after archive update:', this.state.notes);
    });;
  }

  switchTabHandler(tab) {
    this.setState({ selectedTab: tab });
  }

  onSearchChangeHandler(event) {
    console.log('search query:', event.target.value);
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    const tabs = [
      { id: 'active', label: 'Active Notes' },
      { id: 'archived', label: 'Archived Notes' },
    ];

    const { notes, selectedTab, searchQuery } = this.state;
    const normalizedQuery = (searchQuery || '').toLowerCase();
    const filteredNotes = notes
      .filter(note => selectedTab === 'active' ? !note.archived : note.archived)
      .filter(note => note.title.toLowerCase().includes(normalizedQuery.toLowerCase()));

    return (
      <div>
        <HeaderApp />
        <NotesInput addNotes={this.onAddNoteHandler} />

        <TabComponent tabs={tabs} selectedTab={selectedTab} onTabChange={this.switchTabHandler} />
        <div className="mx-auto container py-4">

          <SearchInput searchQuery={searchQuery} onSearch={this.onSearchChangeHandler} />
        </div>
        <div className="mx-auto container">
          <NotesList notes={filteredNotes} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler} />
          {filteredNotes.length === 0 && (
            <div className='flex items-center justify-center w-full h-64 bg-gray-100 dark:bg-gray-700  rounded-lg'>
              <h2 className="text-gray-800 dark:text-gray-100 font-bold mb-3 capitalize">
                {(!searchQuery || searchQuery.trim() === '')
                  ? `No Notes on ${selectedTab === 'active' ? 'Active' : 'Archived'} Tab`
                  : `No Notes Like "${searchQuery}"`}
              </h2>


            </div>
          )}
        </div>
      </div>
    );
  }
}

export default NotesApp;
