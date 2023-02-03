import React from "react";
import { Avatar, Heading, Img, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";

const greeting = "Hello, I am Joshua!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React, Node.js";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  > 
  <Avatar> 
   <img src="https://i.pravatar.cc/150?img=7"></img>
    </Avatar>
    
  <h1> {greeting} </h1>
 <Heading > {bio1} </Heading>
 <Heading > {bio2} </Heading>

   
   
  </FullScreenSection>
);

export default LandingSection;
