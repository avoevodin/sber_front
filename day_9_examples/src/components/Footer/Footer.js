import React from 'react'

const Footer = ({ clearTodos, returnToPrevState }) => {

    return (
        <footer className="d-flex justify-content-center">
            <button
                onClick={returnToPrevState}
                type="button"
                className="btn btn-success mx-1"
            >
                Return
            </button>

            <button
                onClick={clearTodos}
                type="button"
                className="btn btn-danger mx-1"
            >
                Clear all
            </button>

        </footer>
    )
}

export default React.memo(Footer)