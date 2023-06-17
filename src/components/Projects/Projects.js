import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import editor from "../../Assets/Projects/codeEditor.png";
import dogpostsapp from "../../Assets/Projects/dogpostsapp.png";
import reactAssessment from "../../Assets/Projects/react-assessment.png";
import everlasting from "../../Assets/Projects/everlasting.png";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactAssessment}
              isBlog={false}
              title="React Assessment"
              description="My react assessment in Generation Thailand, a software developer camp. This project allows admin accounts to access restrictive features and divide them from other users."              ghLink="https://github.com/ruethaiboon-sri/career-changer-react-assessment"
              demoLink="https://career-changer-react-assessment-sage.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={everlasting}
              isBlog={false}
              title="Everlasting Exercise Tracking Application"
              description="An exercise tracking application with elderly user-friendly features. It allows users to save an excercise that they do with time and duration to keep track of excercise they are working on."              ghLink="https://github.com/JSD4-ProjectH/Everlasting-Frontend"
              demoLink="https://everlasting.vercel.app/Login"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dogpostsapp}
              isBlog={false}
              title="Dog Posts App"
              description="A webpage that provides you a bunch of dog posts to brighten up your day! Build with React.js and deploy with Vercel. Have features which allows you to search for a dog post of your interest."
              ghLink="https://github.com/ruethaiboon-sri/dog-app"
              demoLink="https://dog-posts-application-9czgn1b0i-ruethaiboon-sri.vercel.app/"
            />
          </Col>



{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
