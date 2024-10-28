import React from 'react';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            color: 'bg-white dark:bg-gray-800',
            archived: false,
            createdAt: new Date().getTime(),
            titleLimit: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onColorChangeEventHandler = this.onColorChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const title = event.target.value;
        if (title.length > this.state.titleLimit) {
            document.getElementById('title_alert').classList.remove('hidden');
        } else {
            document.getElementById('title_alert').classList.add('hidden');
            this.setState(() => {
                return {
                    title: title
                }
            })
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onColorChangeEventHandler(event) {
        this.setState(() => {
            return {
                color: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    render() {
        return (
            <form className='ax-w-sm mx-auto mb-20' onSubmit={this.onSubmitEventHandler}>
                <input required type="text" name="" id="" placeholder='Title' value={this.state.title} onChange={this.onTitleChangeEventHandler} className='mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                <div id='title_alert' className="hidden flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400" role="alert">
                    <div className='mr-2'>
                        <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                    </div>
                    Title character must be under <span className="font-medium"> &nbsp; 50! &nbsp; </span> character
                </div>
                <textarea required name="" id="" cols="30" rows="10" placeholder='Body' value={this.state.body} onChange={this.onBodyChangeEventHandler} className='mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'></textarea>
                <select required name="" id="" value={this.state.color} onChange={this.onColorChangeEventHandler} className='mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' >
                    <option value="white">White</option>
                    <option value="pink">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select>
                <button className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='submit'>Tambah</button>
            </form>
        )
    }
}

export default NotesInput;