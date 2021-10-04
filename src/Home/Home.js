import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useCourses } from '../hooks/useCourses.js';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const [courses] = useCourses();

    return (
        <Container >
            <div className="Home-style">
                <h1  className="orange-color">Creative It Institute</h1>
                <p className="custom-color mb-5">Hey Youth People We are working For grow your skill we provide lot of Valuable online courses  we Have programming and Designing Courses  <br />
                    And we Provide all Course in Reasonable Price tag</p>
                <img  width="400px" src="https://www.seoclerk.com/pics/000/797/739/e14c4fe13fe14cd522844457a7ef0ce2.jpg" alt="" />

                <h2 className="Service-style">Our Running Sevices</h2>
                <Row
                    xs={1} md={4} className="g-4 ">
                    {
                        courses.slice(0, 4).map(course => <Course
                          course={course}
                        ></Course>)
                       
                    }
                </Row>   
            </div>

        </Container>
        
    );
};

export default Home;