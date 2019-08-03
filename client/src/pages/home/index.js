import React, { Component } from 'react';

// Utilities: Import Utilities for API calls
import API from '../../utilities/api'

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
            image: bookData.imageLinks.thumbnail,
            link: bookData.previewLink
        }

        API.saveBook(newBook);

    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
            API.searchBook({
                title: this.state.title,
            })
                .then(res => {
                  
                    console.log(res)

                    this.setState({
                        results: res,
                        hasSearched: true,
                    })
                })
                .catch(err => console.log(err + "\n form submit not"));
        }
    };

    render() {
        return (
            <React.Fragment>
                <Navbar home={this.state.home} booklist={this.state.booklist} about={this.state.about} />
                <Searchbox handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} title={this.state.title} />
                <SearchResults saveBook={this.saveBook} hasSearched={this.hasSearched} results={this.results} />
            </React.Fragment>
        );
    }
}

export default Home;