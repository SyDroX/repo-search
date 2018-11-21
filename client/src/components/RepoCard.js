/* eslint-disable no-undef */
import React from 'react';
import axios from "axios";

class RepoCard extends React.Component {
    constructor(props){
        super(props);

        this.state = ({bookmarked: props.repo.bookmarked});
    }

    bookmarkRepo = async () => {
        const {id, full_name, owner} = this.props.repo;
        await axios.get('/bookmark', {
            params: {
                id: id,
                full_name: full_name,
                avatar_url: owner.avatar_url
            },
        });

        this.setState({bookmarked: !this.state.bookmarked});
    };

    render() {
        const {owner, full_name} = this.props.repo;
        const buttonClass = "btn btn-outline-primary btn-lg" + (this.state.bookmarked ? " active" : "");

        return (
            <div className="card">
                <img alt={owner.login} src={owner.avatar_url}/>
                <div className="card-body">
                    <h5 className="card-title">{full_name}</h5>
                    <button type="button" className={buttonClass} onClick={this.bookmarkRepo}>
                        <i className="fas fa-bookmark"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default RepoCard;