import { useState } from 'react';
import tw from 'twin.macro';
import { Menu, Aperture } from 'react-feather';

const Nav = tw.nav`bg-white shadow-sm fixed w-full z-10`;
const Container = tw.div`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`;
const Flex = tw.div`flex justify-between h-16`;
const Logo = tw.div`flex-shrink-0 flex items-center`;
const Brand = tw.span`ml-2 text-xl font-bold text-gray-900`;
const Links = tw.div`hidden md:ml-6 md:flex md:items-center md:space-x-8`;
const MobileMenuBtn = tw.button`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`;
const MobileMenu = tw.div`md:hidden hidden`;
const MobileLinks = tw.div`pt-2 pb-3 space-y-1`;
const Link = tw.a`px-3 py-2 text-sm font-medium hover:text-blue-600`;
const MobileLink = tw.a`block px-3 py-2 text-base font-medium hover:bg-gray-50`;

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <Container>
        <Flex>
          <Logo>
            <Aperture className="h-8 w-8 text-blue-600" />
            <Brand>Aperture AC</Brand>
          </Logo>
          <Links>
            <Link href="#about">About</Link>
            <Link href="#strategy">Strategy</Link>
            <Link href="#team">Team</Link>
            <Link href="#contact">Contact</Link>
          </Links>
          <div tw="-mr-2 flex items-center md:hidden">
            <MobileMenuBtn aria-controls="mobile-menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              <Menu />
            </MobileMenuBtn>
          </div>
        </Flex>
      </Container>
      <MobileMenu css={[open && tw`block`]} id="mobile-menu">
        <MobileLinks>
          <MobileLink href="#about" onClick={() => setOpen(false)}>About</MobileLink>
          <MobileLink href="#strategy" onClick={() => setOpen(false)}>Strategy</MobileLink>
          <MobileLink href="#team" onClick={() => setOpen(false)}>Team</MobileLink>
          <MobileLink href="#contact" onClick={() => setOpen(false)}>Contact</MobileLink>
        </MobileLinks>
      </MobileMenu>
    </Nav>
  );
}
