import tw from 'twin.macro';
import { Aperture, Twitter, Linkedin } from 'react-feather';

const FooterSection = tw.footer`bg-gray-900 text-white`;
const Container = tw.div`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8`;
const Grid = tw.div`xl:grid xl:grid-cols-3 xl:gap-8`;
const BrandWrapper = tw.div`space-y-8 xl:col-span-1`;
const Brand = tw.div`flex items-center`;
const BrandText = tw.span`ml-2 text-xl font-bold`;
const Desc = tw.p`text-gray-400 text-base`;
const Social = tw.div`flex space-x-6`;
const SocialLink = tw.a`text-gray-400 hover:text-white`;
const LinksGrid = tw.div`mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2`;
const LinksGroup = tw.div`md:grid md:grid-cols-2 md:gap-8`;
const Section = tw.div``;
const SectionTitle = tw.h3`text-sm font-semibold text-gray-400 tracking-wider uppercase`;
const List = tw.ul`mt-4 space-y-4`;
const ListItem = tw.li``;
const Link = tw.a`text-base text-gray-300 hover:text-white`;
const Bottom = tw.div`mt-12 border-t border-gray-800 pt-8`;
const Copyright = tw.p`text-base text-gray-400 text-center`;

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <Grid>
          <BrandWrapper>
            <Brand>
              <Aperture tw="h-8 w-8 text-blue-400" />
              <BrandText>Aperture AC</BrandText>
            </Brand>
            <Desc>
              A special purpose acquisition company focused on Bitcoin mining.
            </Desc>
            <Social>
              <SocialLink href="#" aria-label="Twitter">
                <Twitter />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <Linkedin />
              </SocialLink>
            </Social>
          </BrandWrapper>
          <LinksGrid>
            <LinksGroup>
              <Section>
                <SectionTitle>Company</SectionTitle>
                <List>
                  <ListItem>
                    <Link href="#about">About</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#strategy">Strategy</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#team">Team</Link>
                  </ListItem>
                </List>
              </Section>
              <Section>
                <SectionTitle>Legal</SectionTitle>
                <List>
                  <ListItem>
                    <Link href="#">Privacy</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Terms</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Disclosures</Link>
                  </ListItem>
                </List>
              </Section>
            </LinksGroup>
            <LinksGroup>
              <Section>
                <SectionTitle>Resources</SectionTitle>
                <List>
                  <ListItem>
                    <Link href="#">Investor Relations</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Press Releases</Link>
                  </ListItem>
                </List>
              </Section>
              <Section>
                <SectionTitle>Contact</SectionTitle>
                <List>
                  <ListItem>
                    <Link href="#contact">Contact Us</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Careers</Link>
                  </ListItem>
                </List>
              </Section>
            </LinksGroup>
          </LinksGrid>
        </Grid>
        <Bottom>
          <Copyright>
            &copy; 2025 Aperture AC. All rights reserved.
          </Copyright>
        </Bottom>
      </Container>
    </FooterSection>
  );
}
