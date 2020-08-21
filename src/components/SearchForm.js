import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const SearchForm = (props) => (
    <div>
        <Form className='search-bar' onSubmit={props.onSubmit} inline>
            <Form.Label htmlFor="query" srOnly>
                Name
            </Form.Label>
            <Form.Control
                className="input mb-2 mr-sm-2"
                type="text" 
                name="query"
                placeholder="enter name.." 
                value={props.query}
                onChange={props.onChange}
            />
            <Button variant="outline-warning" className="search-button mb-2 mr-sm-2" type="submit">Search</Button>
        </Form>
        <div className="search-response" style={{display: !props.gotNoResults && "none"}}>No Results for "{props.searched.query}"</div>
    </div>
)

export default SearchForm
