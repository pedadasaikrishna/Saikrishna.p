import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "@emailjs/browser";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`;

const scaleUp = keyframes`
  0% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  align-items: center;
  animation: ${fadeIn} 1s ease-in;
`;

const Title = styled.h1`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  animation: ${scaleUp} 0.7s ease-in-out;
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  animation: ${fadeIn} 0.5s ease-in-out;
  gap: 16px;
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: border 0.3s, box-shadow 0.3s;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.primary + "50"};
    animation: ${scaleUp} 0.3s ease-out;
  }
`;

const ContactInputMessage = styled(ContactInput).attrs({ as: "textarea" })`
  resize: none;
`;

const ContactButton = styled.button`
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  &:hover {
    background-color: hsla(271, 100%, 45%, 1);
    transform: translateY(-2px);
  }
  &:active {
    transform: scale(0.98);
  }
  &[disabled] {
    background-color: grey;
    cursor: not-allowed;
  }
`;
const Heading = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  test-size: 5px;
`;
const StatusMessage = styled.div`
  color: ${({ isSuccess }) => (isSuccess ? "#4caf50" : "#f44336")};
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  animation: ${shake} 0.3s ease-in-out;
`;

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_bjejwyf",
        "template_11miw95",
        form.current,
        "7hW1qWdtrW8zERMVZ"
      )
      .then(
        (result) => {
          setStatusMessage("Message Sent Successfully! 🎉");
          setIsSubmitting(false);
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          setStatusMessage("Failed to send message. Please try again later.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          📬 Don’t hesitate to get in touch! Whether you have questions, ideas,
          or opportunities, I’m just a message away! ✨
        </Desc>

        <ContactForm ref={form} onSubmit={handleSubmit}>
          <Heading>Enter details to Contact Me</Heading>
          <ContactInput
            type="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <ContactInput
            type="text"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <ContactInput
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows="4"
            required
          />
          <ContactButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </ContactButton>
          {statusMessage && (
            <StatusMessage isSuccess={statusMessage.includes("Successfully")}>
              {statusMessage}
            </StatusMessage>
          )}
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
