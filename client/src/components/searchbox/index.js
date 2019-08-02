import React from "react";

function index(props) {

    return (
        <div className="jumbotron">
            <h2 className="display-3">Google Books Search</h2>
            <p className="lead">Simply fill out the form below. You also have the option of saving the search and adding it to our book list!</p>

            <form>
                <fieldset>
                    <div className="form-group row">
                        <label htmlFor="bookTitle" className="col-sm-2 col-form-label">Book Title</label>
                        <div className="col-sm-10">
                            <input name="title" value={props.title} onChange={props.handleInputChange} type="text" className="form-control-plaintext" id="bookTitle" placeholder="origin of species"></input>
                        </div>
                    </div>
                </fieldset>
                <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form >
        </div >
    )
}

export default index
