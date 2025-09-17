import tw from 'twin.macro';
import { Mail, MapPin, Send } from 'react-feather';

const Section = tw.div`py-16 bg-gray-50`;
const Container = tw.div`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`;
const Grid = tw.div`lg:grid lg:grid-cols-2 lg:gap-8`;
const Info = tw.div`mb-8 lg:mb-0`;
const Title = tw.h2`text-3xl font-extrabold text-gray-900 sm:text-4xl`;
const Desc = tw.p`mt-3 text-lg text-gray-500`;
const ContactList = tw.div`mt-8`;
const ContactItem = tw.div`flex items-start mt-6 first:mt-0`;
const IconWrap = tw.div`flex-shrink-0`;
const ContactText = tw.p`text-base text-gray-500 ml-3`;
const FormWrap = tw.div`bg-white shadow rounded-lg`;
const FormInner = tw.div`px-4 py-5 sm:p-6`;
const FormTitle = tw.h3`text-lg font-medium text-gray-900`;
const Form = tw.form`mt-6 space-y-6`;
const Label = tw.label`block text-sm font-medium text-gray-700`;
const Input = tw.input`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border`;
const Textarea = tw.textarea`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border`;
const Button = tw.button`bg-btn-gradient hover:bg-btn-gradient-hover rounded-md px-6 py-3 text-base font-medium text-white shadow-md hover:shadow-lg transition duration-300 inline-flex items-center`;

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Grid>
          <Info>
            <Title>Get In Touch</Title>
            <Desc>
              Interested in learning more about our acquisition strategy or potential partnership opportunities?
            </Desc>
            <ContactList>
              <ContactItem>
                <IconWrap><Mail className="h-6 w-6 text-blue-600" /></IconWrap>
                <ContactText>info@apertureac.com</ContactText>
              </ContactItem>
              <ContactItem>
                <IconWrap><MapPin className="h-6 w-6 text-blue-600" /></IconWrap>
                <ContactText>200 Park Avenue, New York, NY 10166</ContactText>
              </ContactItem>
            </ContactList>
          </Info>
          <FormWrap>
            <FormInner>
              <FormTitle>Contact Us</FormTitle>
              <Form>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <div tw="mt-1">
                    <Input type="text" name="name" id="name" placeholder="Your name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div tw="mt-1">
                    <Input type="email" name="email" id="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <div tw="mt-1">
                    <Textarea id="message" name="message" rows={4} placeholder="Your message" />
                  </div>
                </div>
                <div>
                  <Button type="submit">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Form>
            </FormInner>
          </FormWrap>
        </Grid>
      </Container>
    </Section>
  );
}
