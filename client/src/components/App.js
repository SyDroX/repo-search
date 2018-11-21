import React from 'react';
import axios from 'axios';
import github from '../api/github'
import SearchBar from './SearchBar';
import RepoList from './RepoList';
import Loader from './Loader';

class App extends React.Component {
    state = {repositories: [], bookmarkedRepos: [], submitted: false};

    getBookmarkedRepos = async () => {
        const response = await axios.get('/bookmarks');
        this.setState({bookmarkedRepos: response.data});
    };

    onSearchSubmit = async term => {
        this.setState({submitted: true});

        const gitReposRes = await github.get('/search/repositories', {
            params: {
                q: term
            }
        });

        await this.getBookmarkedRepos();
        const bookmarkedRepos = this.state.bookmarkedRepos;

        // Check if there are any bookmarked repos in the search results
        const repos = gitReposRes.data.items.map((repo) => {
            const bookmarkedRepo = bookmarkedRepos.find((bookmarkedRepo) => {
                return repo.id == bookmarkedRepo.id;
            });

            repo.bookmarked = !!bookmarkedRepo;

            return repo;
        });

        this.setState({
            repositories: repos,
            submitted: false
        });
    };

    renderContent() {
        if (this.state.repositories && !this.state.submitted) {
            return <RepoList repositories={this.state.repositories}/>
        }

        return <Loader/>;
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {this.renderContent()}
            </div>
        );
    }
}

export default App;