import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Alert,
  AlertDescription,
  AlertDialog,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  propNames,
  Select,
  SliderProvider,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import { faPersonMilitaryPointing } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    
    initialValues:{
      firstName: '',
      email: '',
      type:'',
      Comment:'',
      
      
    },
    onSubmit:(values,isLoading) => { 
     submit('https://example.com/contactme',values);
      console.log(values);
    },
    validationSchema: Yup.object({
     firstName: Yup.string().required("Required"),
     email: Yup.string().email("Invalid email Address").required("Required"),
    Comment:'',
      


    }),
  });
  useEffect(() => { 
    if(response) { 
      onOpen(response.type, response.message);
      if(response.type === 'success') { 
        formik.resetForm();
      }
    }
  }, [response]);



  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">          
          <form onSubmit={formik.handleSubmit} >
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName} >               
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input              
                  id="firstName"
                  name="firstName"                  
                  {...formik.getFieldProps("firstName")}
                  
                  
                />
                <FormErrorMessage> Required</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="test@test.com"
                  {...formik.getFieldProps("email")}
                  
                />
                <FormErrorMessage> {formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{}</FormErrorMessage>
              </FormControl>             
              <Button   type="submit"  isLoading={isLoading}  colorScheme="blue" width="full" >                       
                Submit 
              </Button>    
             
            </VStack>
          
          </form>       
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
