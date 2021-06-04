import React from "react";
import { Switch, Route } from "react-router-dom";
import Course from "./containers/Course";
import Enroll from "./containers/Enroll";
import "../css/app.css";
import SearchResult from "./containers/SearchResult";
import PaymentRedirect from "./containers/PaymentRedirect";
import News from "./containers/News";
import Blogs from "./containers/Blogs";
import Blog from "./containers/Blog";
import NewsPost from "./containers/NewsPost";
import Downloads from "./containers/Downloads";
import Page from "./containers/Page";

const App = () => {
    return (
        <Switch>
            <Route
                path="/blog"
                component={props => <Blogs {...props} />}
                exact
            />
            <Route
                path="/news"
                component={props => <News {...props} />}
                exact
            />
            <Route
                path="/downloads"
                component={props => <Downloads {...props} />}
                exact
            />
            <Route path="/blogs/:id" component={Blog} exact />
            <Route path="/news/:id" component={NewsPost} exact />
            <Route path="/page/:slug" component={Page} exact />
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
            <Route path="/enroll/:id" component={Enroll} />
        </Switch>
    );
};

export default App;
