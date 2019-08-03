import React from 'react'

import BookResult from '../bookresult'

const SearchResults = (props) => {
    let searches = <h2 className="display-3">Hello, enter search to begin.</h2>

    console.log(searches);

    if (props.hasSearched) {
        searches = props.results.map((bookresult) => {
            console.log(bookresult);
            return <BookResult saveBook={props.saveBook} bookResult={bookresult} />
        })
    }

    return searches
}

export default SearchResults;