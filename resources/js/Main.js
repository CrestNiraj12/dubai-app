import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import NavBar from "./components/Navbar";
import Course from "./containers/Course";
import Enroll from "./containers/Enroll";
import "../css/app.css";
import SearchResult from "./containers/SearchResult";
import axios from "axios";
import PaymentRedirect from "./containers/PaymentRedirect";
import News from "./containers/News";
import Blogs from "./containers/Blogs";
import Blog from "./containers/Blog";
import NewsPost from "./containers/NewsPost";

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
                    path="/blogs"
                    component={props => <Blogs {...props} />}
                    exact
                />
                <Route
                    path="/news"
                    component={props => <News {...props} />}
                    exact
                />
                <Route path="/blogs/:id" component={Blog} exact />
                <Route path="/news/:id" component={NewsPost} exact />
                <Route
                    path="/search"
                    component={props => (
                        <SearchResult {...props} courses={courses} />
                    )}
                />
                <Route
                    path="/success"
                    component={props => (
                        <PaymentRedirect {...props} success={true} />
                    )}
                />
                <Route
                    path="/cancel"
                    component={props => (
                        <PaymentRedirect {...props} success={false} />
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
