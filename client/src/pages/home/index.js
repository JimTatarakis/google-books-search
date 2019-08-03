import React, { Component } from 'react';

// Utilities: Import Utilities for API calls
import API from '../../utilities/api'

import axios from 'axios';

// Components: Import for Home page.
import Navbar from '../../components/navbar'
import Searchbox from '../../components/searchbox'
import SearchResults from '../../components/searchresults'

class Home extends Component {
    state = {
        home: "nav-item active",
        booklist: "nav-item",
        about: "nav-item",
        title: "",
        hasSearched: false,
        results: [],
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    saveBook = bookData => {
        bookData.preventDefault();

        let newBook = {
            title: bookData.title,
            authors: bookData.authors,
            image: bookData.imageLinks.smallThumbnail,
            link: bookData.previewLink
        }

        API.saveBook(newBook);

    }

    handleFormSubmit = event => {
        event.preventDefault();
        let url = "https://www.googleapis.com/books/v1/volumes?q=" + this.state.title.toLowerCase();
        axios.get(url).then(search => this.setState({results: search.data.items, hasSearched: true})).catch(err => console.log(err + "\n hey axios didnt work!"))
    };

    render() {
        return (
            <React.Fragment>
                <Navbar home={this.state.home} booklist={this.state.booklist} about={this.state.about} />
                <Searchbox handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} title={this.state.title} />
                <div className="container">
                    <div className="row">
                    <SearchResults saveBook={this.state.saveBook} hasSearched={this.state.hasSearched} results={this.state.results} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;