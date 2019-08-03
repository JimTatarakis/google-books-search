import React from 'react';




const BookResult = props => {

    const imgStyle = {
        height: '350px',
        width: '18rem', 
        display: 'block'
    }

    return (
        <div className="card col-md-4">
            <h4 className="card-header">{props.bookResult.volumeInfo.title}</h4>
            <div className="card-body">
                <h6 className="card-title lead">{props.bookResult.volumeInfo.authors}</h6>
            </div>
            <img style={imgStyle} src={props.bookResult.volumeInfo.imageLinks.smallThumbnail} alt={props.bookResult.volumeInfo.title} />
            <div className="card-body">
                <button className="btn btn-primary" onClick={() => props.saveBook(props.bookResult.volumeInfo)} value={props.bookResult.volumeInfo} >Save</button>
                <a className="card-link" href={props.bookResult.volumeInfo.previewLink} rel="noopener noreferrer" target="_blank" >View</a>
            </div>
        </div>
    )
}

export default BookResult;