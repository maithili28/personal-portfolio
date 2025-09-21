import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { getPortfolioById } from "../api/get.portfolio.api";

const skillImages = [meter1, meter2, meter3];

const Skills = () => {
    const [skills, setSkills] = useState([]);

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const result = await getPortfolioById("68cf05998e1fe76b41af3771");
                setSkills(result.skills || []);
            } catch (error) {
                setSkills([]);
            }
        };
        fetchSkills();
    }, []);

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Here are some unique skills that set me apart:</p>
                            <ul>
                                <li>Creative problem-solving for complex web projects</li>
                                <li>Designing interactive user experiences with modern frameworks</li>
                                <li>Brand storytelling through visual identity and UI</li>
                                <li>Rapid prototyping and iterative design</li>
                                <li>Optimizing performance for scalable applications</li>
                            </ul>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {skills.map((skill, idx) => (
                                    <div className="item" key={idx}>
                                        <img src={skillImages[idx % skillImages.length]} alt="Skill" />
                                        <h5>{skill}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
};

export default Skills;