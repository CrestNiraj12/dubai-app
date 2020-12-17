import React from "react";
import { Spinner } from "react-bootstrap";

const PageLoadSpinner = () => {
    return (
        <Spinner animation="border" role="status" className="pageLoader">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
};

export default PageLoadSpinner;
