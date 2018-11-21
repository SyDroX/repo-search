import React from 'react';
import RepoCard from './RepoCard';
import './RepoList.css'

const RepoList = (props) => {
    const repository = props.repositories.map((repo) => {
        return <RepoCard key={repo.id} repo={repo}/>
    });

    return (
        <div className="repo-list">
            {repository}
        </div>
    );
};

export default RepoList;