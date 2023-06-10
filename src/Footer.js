import React from 'react'
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import './styles.css'

export default function Footer() {
    return (
        <>
        
       <Box className='boxe-footer'>
       <h1 style={{ color: "#13266b", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        More Contact Link
      </h1>
      
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Skills</FooterLink>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#"> <i class='bx bxs-edit'></i> Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#"><i class='bx bx-code-alt'></i> Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#"><i class='bx bxs-envelope'></i> Email : hamdoune.<br/>daoud1996@gmail.com</FooterLink>
            <FooterLink href="#"><i class='bx bxs-phone'></i> Phone : <br/> 06 87 96 66 44 </FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <h5 style={{ color: "black", 
                   textAlign: "center", 
                   marginBottom: "-60px" }}>
        &copy; Copyright 2023, Out of the Earth
      </h5>
    </Box>
    
        </>
    )
}