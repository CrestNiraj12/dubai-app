import React from "react";
import { useState } from "react";
import {
    Navbar,
    Nav,
    Form,
    Button,
    NavDropdown,
    Dropdown
} from "react-bootstrap";
import "../../../css/Navbar.css";

const NavBar = ({ courses }) => {
    const [active, setActive] = useState("/");
    const [query, setQuery] = useState("");
    const [searchResult, setSearchResults] = useState([]);

    const handleSearch = e => {
        const q = e.target.value;
        setQuery(q);
        const results = courses.filter(course =>
            course.title.toLowerCase().includes(q.toLowerCase())
        );
        setSearchResults([...results]);
    };

    return (
        <Navbar bg="dark" variant="dark" style={{ padding: "20px 10%" }}>
            <Navbar.Brand href="/">Dubai App</Navbar.Brand>
            <Nav
                className="mr-auto"
                activeKey={active}
                onSelect={selectedKey => setActive(selectedKey)}
            >
                <Nav.Link href="/" className="navItem">
                    Home
                </Nav.Link>

                <NavDropdown
                    className="navItem"
                    title="Courses"
                    id="basic-nav-dropdown"
                >
                    {courses.map(({ id, title }, index) => (
                        <NavDropdown.Item key={index} href={`/course/${id}`}>
                            {title}
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
            </Nav>
            <Form inline style={{ position: "relative" }}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        value={query}
                        onChange={handleSearch}
                        className="mr-sm-2"
                        style={{ height: "30px" }}
                    />
                    <Dropdown.Menu show={!!query} style={{ maxWidth: "185px" }}>
                        {searchResult.length > 0 ? (
                            searchResult.map(({ id, title }, index) => (
                                <Dropdown.Item
                                    key={id + index}
                                    href={`/course/${id}`}
                                    style={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }}
                                >
                                    {title}
                                </Dropdown.Item>
                            ))
                        ) : (
                            <Dropdown.Item disabled>
                                No results found!
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Form.Group>
                <Button variant="outline-info" style={{ padding: "3px 10px" }}>
                    Search
                </Button>
            </Form>
        </Navbar>
    );
};

export default NavBar;
