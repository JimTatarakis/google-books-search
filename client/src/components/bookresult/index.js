import React from 'react';




const BookResult = props => {
    return (
        <div className="col s3 card">
            <div className="card-image">
                <image src={props.bookresult.image} alt={props.bookresult.title}/>
            </div>
            <div className="card-content">
            <button onClick={() => props.saveBook(props.bookresult)}>Save Book</button>
            </div>
        </div>
    )
}

export default BookResult;