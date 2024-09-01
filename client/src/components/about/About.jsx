import React from "react";

import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.cnbctv18.com/_next/static/media/Aboutus_Home.729ceb71.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Welcome To Content Management Website!</Typography>
                <Text variant="h5">I'm Aspiring Software Engineer graduating in 2025. 
                    I am pursuing my B.tech from IIIT Bhopal specilization in Computer Science and Engineering.
                    Content Management Website stemmed from my passion for organizing and sharing information effectively.
                    As a student, I found myself constantly juggling various projects and assignments, struggling to keep track of 
                    all the content I needed to manage. That's when I realized the need for a platform that simplifies content
                     management and streamlines the process for students like me.
                    
                </Text>
                <Text variant="h5">
                At Content Management Website, my mission is to provide students with a user-friendly platform to create, organize, and share<br />
                content effortlessly. I believe that easy access to organized information empowers students to focus on what truly matters: 
                learning and creating. Through my dedication to continuously improving the platform, I aim to enhance the academic experience
                 for students and professionals everywhere.<br /><br />
                 If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/aakash200231" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                    
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;