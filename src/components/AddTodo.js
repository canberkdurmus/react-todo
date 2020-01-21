//rce tab - class based component
import React, { Component } from 'react';
import propTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }


    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex', marginTop: '10px', marginBottom: '10px'}}  >
                <input type='text' name='title' value={this.state.title} onChange={this.onChange} style={{ flex: '10' }} placeholder='Add To Do' />
                <input type='submit' value='Submit' style={{ flex: '1', padding: '5px' }} className='btn' />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: propTypes.func.isRequired
}

export default AddTodo
