import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, IconButton } from 'evergreen-ui'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            display: 'inline-block',
            marginLeft: '10px',
            height: '100%',
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div style={{ backgroundColor: '#f4f4f4', padding: '2px', marginBottom: '4px', borderBottom: '1px #ccc dotted' }}>
                <div style={{ display: 'inline-block', marginLeft: '10px', }}>
                    <Checkbox checked={completed} onChange={this.props.markComplete.bind(this, id)} />
                </div>
                <p style={this.getStyle()}>
                    {title}
                </p>
                <div style={{ float: 'right', display: 'inline-block', height: '100%', }}>
                    <IconButton icon="trash" intent="danger" onClick={this.props.delTodo.bind(this, id)} ></IconButton>
                </div>
            </div>
        )
    }
}


// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem
