import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import NavBar from "./components/Navbar";
import BscImage from "../images/bsc.jpg";
import BbaImage from "../images/bba.jpg";
import ACCAImage from "../images/acca.jpg";
import ALevelsImage from "../images/alevels.jpg";
import MscImage from "../images/msc.jpg";
import Course from "./containers/Course";

const App = () => {
    const courses = [
        {
            id: 1,
            title: "Bsc (Hons) Computing",
            description:
                "The BSc (Hons) Computing Programme at The British College is run in partnership with Leeds Beckett University, UK. Students studying this course will gain highly sought-after skills in computer programming, database development, networking, website development, systems modelling, and computer security. This course is equivalent to BSc CSIT and BIT in Nepal. ",
            image: BscImage
        },
        {
            id: 2,
            title: "BBA (Hons) Business and Management",
            description:
                "The BBA (Hons) Business and Management degree is multidisciplinary in nature and can lead to many possible career options, whether in private business or in the public sector. Our BBA course provides a holistic view of business management while aiming to help students develop detailed knowledge of the latest business and management practices. The course’s participative and interactive teaching and learning methodologies will enlighten students with practical competencies necessary for achieving business success.",
            image: BbaImage
        },
        {
            id: 3,
            title: "ACCA Programme",
            description:
                "British Professional College, owned by The British College  Kathmandu offers the ACCA (Association of Chartered Certified Accountants) programme, the largest and fastest-growing international accountancy body, with over 527,000 students and 219,000 fully qualified members spread across 179 countries worldwide. ",
            image: ACCAImage
        },
        {
            id: 4,
            title: "MSc Information and Technology",
            description:
                "The MSc Information and Technology is a program rich in a specialization that provides a transformational experience to its students, integrating the technological and business aspects of modern IT. This course is designed to address the high demands of both the private and public sector by filling the current digital skills gap and providing students with the skill set required to succeed in the industry.",
            image: MscImage
        },
        {
            id: 5,
            title: "GCE A Levels",
            description:
                "Located in the heart of the nation’s capital, The British College (TBC) is arguably the best, most well-equipped and cutting edge A Level College in the country.  TBC offers prestigious Cambridge Assessment International Education A Level courses, established in 2013. The College is registered with Cambridge Assessment International Education as Centre Number NP 744 and has received approval from the Ministry of Education, Government of Nepal. ",
            image: ALevelsImage
        }
    ];
    return (
        <>
            <NavBar courses={courses} />

            <Switch>
                <Route
                    path="/"
                    exact
                    component={props => <Home {...props} courses={courses} />}
                />
                <Route
                    path="/course/:id"
                    component={props => <Course {...props} courses={courses} />}
                />
            </Switch>
        </>
    );
};

export default App;
