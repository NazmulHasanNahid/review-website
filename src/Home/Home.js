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
                <h1  className="orange-color">Learn online From the Leaders in Business Education</h1>
                <p className="custom-color">Expand your business skills and engage with a global network of learners through our flexible, online courses. Wherever you are in your career—or the world—Harvard Business School Online can help you achieve your goals.</p>
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