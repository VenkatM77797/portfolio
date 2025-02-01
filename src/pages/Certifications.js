import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import certificationList from "../assets/data/certificationList";

const CertStyles = styled.div`
  padding-top: 10rem;
  min-height: 100vh;

  .section__title {
    padding: 5rem 0;
  }

  .timeline__container {
    width: 100%;
    display: flex;
    padding: 5rem 0;

    .timeline {
      height: auto;
      margin: 0 auto;
      position: relative;

      ul {
        list-style: none;

        li {
          color: var(--white);
          background-color: var(--deep-dark);
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 20px;

          &:last-child {
            margin-bottom: 0;
          }

          .timeline__content {
            .certName {
              font-size: 22px;
              font-weight: 500;
              line-height: 30px;
              margin-bottom: 10px;
            }

            .issuer {
              font-size: 16px;
              font-weight: 300;
              letter-spacing: 2px;
              margin-bottom: 10px;
            }

            .date {
              font-size: 14px;
              font-weight: 300;
              margin-bottom: 10px;
            }

            a {
              color: var(--primary-color);
              text-decoration: none;
              font-size: 16px;
              font-weight: bold;
              margin-top: 10px;
              display: block;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
`;

export default function Certifications() {
  return (
    <CertStyles>
      <div className="section__title">
        <SectionTitle heading="CERTIFICATIONS" subheading="Achievements & Credentials" />
      </div>
      <div className="container">
        <div className="timeline__container">
          <div className="timeline">
            <ul>
              {certificationList.map((cert) => (
                <li key={cert.certificationName}>
                  <div className="timeline__content">
                    <h1 className="certName">{cert.certificationName}</h1>
                    <h2 className="issuer">{cert.issuingOrganization}</h2>
                    <h3 className="date">{cert.date}</h3>
                    <a href={cert.verificationLink} target="_blank" rel="noopener noreferrer">
                      View Credential
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CertStyles>
  );
}
