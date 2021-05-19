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
import { Search } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import "../../../css/Navbar.css";
import Logo from "../../../images/TWI Logo.png";

const NavBar = ({ courses }) => {
    var history = useHistory();
    const [active, setActive] = useState(null);
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

    const handleSearchAll = e => {
        e.preventDefault();
        const query_temp = query;
        setQuery("");
        if (query_temp.length > 0)
            history.push(`/search?q=${query_temp.trim().split("+")}`);
    };

    return (
        <Navbar className="navigation" collapseOnSelect expand="lg">
            <Navbar.Brand href="/">
                <img
                    src={Logo}
                    className="d-inline-block align-top nav-logo"
                    alt="The Woolwich Institute"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                    className="mr-auto"
                    activeKey={active}
                    onSelect={selectedKey => setActive(selectedKey)}
                >
                    <Nav.Link href="/" className="navItem">
                        HOME
                    </Nav.Link>

                    <NavDropdown
                        className="navItem"
                        title="COURSES"
                        id="basic-nav-dropdown"
                    >
                        {courses.length > 0 ? (
                            courses.map(({ id, title }, index) => (
                                <NavDropdown.Item
                                    key={index}
                                    href={`/course/${id}`}
                                >
                                    {title}
                                </NavDropdown.Item>
                            ))
                        ) : (
                            <NavDropdown.Item disabled>
                                No courses available!
                            </NavDropdown.Item>
                        )}
                    </NavDropdown>
                    <Nav.Link href="/blogs" className="navItem">
                        BLOG
                    </Nav.Link>
                    <Nav.Link href="/news" className="navItem">
                        NEWS
                    </Nav.Link>
                </Nav>

                <Form
                    inline
                    style={{ position: "relative" }}
                    onSubmit={handleSearchAll}
                >
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={query}
                            onChange={handleSearch}
                            className="mr-sm-2"
                            style={{
                                height: "40px"
                            }}
                        />
                        <Button
                            className="searchButton"
                            onClick={handleSearchAll}
                            style={{ height: "40px" }}
                        >
                            <Search />
                        </Button>
                        <Dropdown.Menu
                            show={!!query}
                            style={{ width: "185px" }}
                        >
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
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
