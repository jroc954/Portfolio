import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import ProjectsSection from "./ProjectsSection";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
          <a href="mailto: jru954@gmail.com" className="faEnvelope social">
            <FontAwesomeIcon icon={faEnvelope} size="2x" ></FontAwesomeIcon>
          </a>        
          <a href="https://github.com" className="faGithub social">
            <FontAwesomeIcon icon={faGithub} size="2x" ></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com" className="faLinkedIn social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" ></FontAwesomeIcon>
          </a>  
          <a href="https://medium.com" className="faMedium social">
            <FontAwesomeIcon icon={faMedium} size="2x" ></FontAwesomeIcon>
          </a>       
          <a href="https://stackoverflow.com" className="faStackOverFlow social">
            <FontAwesomeIcon icon={faStackOverflow} size="2x" ></FontAwesomeIcon>
          </a>     
            {/* Add social media links based on the `socials` data */}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#Projects" onClick={handleClick()} >Projects
              </a>
              <a href="/#contact-me" onClick={handleClick} >Contact Me
              </a>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
