import React, {Component} from 'react';
import './search-panel.css'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onSearchText = (e) => {
        const serchText = e.target.value;

        this.setState({
            term: serchText
        });

        this.props.updateSearch(serchText);
    }

    render () {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Find in posts"
                onChange={this.onSearchText}
            />
        )
    }
}

