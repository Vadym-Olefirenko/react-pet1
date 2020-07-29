import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postText: ''
        }
    }

    onValue = (e) => {
        this.setState({
            postText: e.target.value
        })
    }

    sendForm = (e) => {
        e.preventDefault();

        this.props.addPost(this.state.postText);
        this.setState({
            postText: ''
        })
    }

    render () {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.sendForm}
            >
                <input
                    type="text"
                    placeholder="What do you think about?"
                    className="form-control new-post-label"
                    onChange={this.onValue}
                    value={this.state.postText}
                />
    
                <button 
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                Add+</button>
            </form>
        )
    }

}

