import React from "react";
import PText from "../components/PText";
import styled from "styled-components";
import AboutItems from "../components/AboutItems";
import Img from "../assets/images/venkat.jpg";
import DownloadCV from "../components/DownloadCV";

const AboutStyles = styled.div`
  padding: 16rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .left {
      flex: 3;
      .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
          background-color: var(--deep-dark);
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }
      }
      .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
      }
      .about__info {
        margin-bottom: 5rem;
        padding-right: 5rem;
        p {
          max-width: 100%;
          font-size: 1.5rem;
        }
      }
    }
    .right {
      margin-right: 20px;
      flex: 1.5;
      img {
        border: 2px solid var(--gray-1);
      }
    }
  }

  .about__info__items {
    margin-top: 15rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem, 2rem;
    .top-section {
      flex-direction: column;
      gap: 7rem;
      .left {
        flex: 3;
        .about__subheading {
          font-size: 1.8rem;
        }
        .about__heading {
          font-size: 3rem;
        }
        .about__info {
          margin-bottom: 3rem;
        }
      }
    }
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Venkat Mandarapu</span>
            </p>
            <h2 className="about__heading">
              A data-driven problem solver who sees Business Analytics as a superpower to uncover insights and drive decisions
            </h2>
            <div className="about__info">
              <PText>
                I am Venkat from Visakhapatnam, India, 
                currently based in Pittsburg, Kansas, USA. 
                With a strong passion for Business Analytics, 
                I thrive on transforming data into meaningful 
                insights to drive smart decision-making.
                <br />
                <br />I developed an interest in data analytics 
                because I found a natural inclination toward working 
                with data and uncovering insights. During my studies, 
                I realized that analyzing and interpreting data was 
                my strength, and now, not being able to explore this 
                field is my greatest fear. I love learning and working 
                with new technologies, and I am passionate about solving 
                real-world problems using data-driven approaches.
              </PText>
            </div>
            <DownloadCV />
          </div>
          <div className="right">
            <img loading="lazy" src={Img} alt="My Img" />
          </div>
        </div>

        <div className="about__info__items">
          <AboutItems
            heading="My Skills"
            entries={[
              {
                title: "FrontEnd",
                items: [
                  "HTML",
                  "CSS",
                  "React JS",
                  ],
              },
              {
                title: "Databases",
                items: ["MySQL"],
              },
              {
                title: "Data Analysis & Visualization",
                items: ["Power BI", "Tableau", "Excel"],
              },
              {
                title: "Languages",
                items: ["Python", "C", "JavaScript"],
              },
            ]}
          />
          <AboutItems
            heading="Education"
            entries={[
              {
                title: "MS - Information Technology",
                items: [
                  "Pittsburg State University, Pittsburg, United States Of America",
                  "MS",
                  "GPA: 3.9",
                ],
              },
              {
                title: "B.Tech - Computer Science And Engineering",
                items: [
                  "GAYATRI VIDYA PARISHAD COLLEGE FOR DEGREE AND PG COURSES, Visakhapatnam, India",
                  "GPA: 3.6",
                ],
              },
              {
                title: "Secondary Education",
                items: [
                  "Little Angles School, Visakhapatnam, India",
                  "CBSE",
                  "CGPA: 7.6",
                ],
              },
            ]}
          />
        </div>
      </div>
    </AboutStyles>
  );
}
