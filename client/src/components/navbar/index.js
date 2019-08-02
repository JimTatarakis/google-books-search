import React from 'react'

function index(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Google Books Search - by Jim</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className={props.home}>
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className={props.booklist}>
                        <a className="nav-link" href="/booklist">Booklist</a>
                    </li>
                    {/* ex: className= "nav-item active" */}
                    <li className={props.about}>
                        <a className="nav-link" href="/about">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default index
