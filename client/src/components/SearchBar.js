import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = event =>{
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label>Github Repository Search</label>
                        <input className="form-control" type="text" onChange={(e) => this.setState({term: e.target.value})}
                               value={this.state.term} placeholder="Github repo..."/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;