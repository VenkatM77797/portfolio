import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const SocialStyles = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 3rem;
    
    ul {
        li {
            padding: 0.5rem 0;
            a{
                color: var(--gray-1);
                font-size: 2rem;
                padding: 0.2rem;
                &:hover {
                    transform: scale(1.4);
                }
            }
            
        }
    }
    @media only screen and (max-width: 768px) {
        ul {
            li {
                padding: 0.5rem 0;
                a{
                    color: var(--gray-1);
                    font-size: 1.4rem;
                    padding: 0.2rem;
                }
            }
        }
    }
`;

export default function Social() {
    return (
        <SocialStyles>
            <ul>
                <li><Link to="https://www.linkedin.com/in/venkat-mandarapu/"> <FaLinkedin /> </Link></li>
                <li><Link to="https://github.com/VenkatM77797"> <FaGithubAlt /> </Link></li>
                <li><a href="mailto:venkatmandarapu7@gmail.com"> <SiGmail /> </a></li>
            </ul>
        </SocialStyles>
    )
}
