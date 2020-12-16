import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import NavBar from "./components/Navbar";
import Course from "./containers/Course";
import Enroll from "./containers/Enroll";
import "../css/app.css";
import SearchResult from "./containers/SearchResult";
import axios from "axios";

const App = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios
            .get("/api/courses")
            .then(res => setCourses(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <NavBar courses={courses} />

            <Switch>
                <Route
                    path="/"
                    component={props => <Home {...props} courses={courses} />}
                    exact
                />
                <Route
                    path="/search"
                    component={props => (
                        <SearchResult {...props} courses={courses} />
                    )}
                />
                <Route path="/course/:id" component={Course} exact />
                <Route path="/course/:id/enroll" component={Enroll} />
                <Route
                    path="*"
                    component={props => <Home {...props} courses={courses} />}
                />
            </Switch>
        </>
    );
};

export default App;
