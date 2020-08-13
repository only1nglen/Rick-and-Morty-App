import React from 'react'

const SearchForm = (props) => (
    <form className="form" onSubmit={props.onSubmit}>
        <label className="search-label" htmlFor="query">Search by Name </label>
        <input 
            className="input" 
            type="text" 
            name="query"
            placeholder="enter name.." 
            value={props.query}
            onChange={props.onChange}
        />
        <button className="search-button" type="submit">Search</button>
    </form>
)

export default SearchForm
