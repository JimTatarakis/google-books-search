import React from 'react'

import BookResult from '../bookresult'

const SearchResults = (props) => {
    let searches = <h1>hello, enter search to begin.</h1>

    console.log(searches);

    if(props.hasSearched){
        searches = props.results.map((bookresult) => {
            return <BookResult saveBook={props.saveBook} bookResult={bookresult} />
        })
    }

    return searches
}

export default SearchResults;
