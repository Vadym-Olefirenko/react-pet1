import React, { Component } from 'react';
import './post-status-filter.css'

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons =[
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ];
    }
    render () {
        const{onFilterSelect, filter} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const btnActive = filter === name,
                btnClasses = btnActive ? 'btn btn-info' : 'btn btn-outline-secondary';

            return  <button 
                        key={name} 
                        type="button" 
                        className={btnClasses}
                        onClick={() => onFilterSelect(name)}
                    >{label}</button>
        })

        return (
            <div className="btn-group">
               {buttons}
            </div>
        )
    }
}
