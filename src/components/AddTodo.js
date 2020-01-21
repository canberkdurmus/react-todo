//rce tab - class based component
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { TextInput, Button } from 'evergreen-ui'

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
                <TextInput type='text' name='title' value={this.state.title} onChange={this.onChange} style={{ flex: '10', marginRight: '5px'}} placeholder='Add To Do' />
                <Button type='submit' value='Submit'>Add</Button>
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: propTypes.func.isRequired
}

export default AddTodo
