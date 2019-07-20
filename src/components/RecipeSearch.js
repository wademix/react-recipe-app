import React, { Component } from 'react'

export default class RecipeSearch extends Component {
    render() {
        const { value, handleSubmit, handleChange } = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                            <h1 className="text-slanted text-capitalize">
                                search for recipe with <strong className="text-danger">Food2Fork</strong>
                            </h1>
                            <form className="mt-4" onSubmit={handleSubmit}>
                                <label htmlFor="search" className="text-capitalize">
                                    type recipes seperated by comma
                                </label>
                                <div className="input-group">
                                    <input 
                                        value={value}
                                        onChange={handleChange}
                                        className="form-control"
                                        type="text"
                                        name="search"
                                        placeholder="onion,carrots,chicken"
                                    />
                                    <div className="input-group-append">
                                        <button className="input-group-text text-white bg-primary" type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
