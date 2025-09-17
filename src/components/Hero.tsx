import tw from 'twin.macro';
import { ArrowRight } from 'react-feather';

const HeroSection = tw.div`bg-hero-gradient pt-24 pb-32 text-white`;
const Container = tw.div`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`;
const Grid = tw.div`lg:grid lg:grid-cols-12 lg:gap-8`;
const Left = tw.div`px-4 sm:px-0 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center`;
const Title = tw.h1`mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl`;
const Subtitle = tw.p`mt-3 text-base text-blue-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl`;
const ButtonWrap = tw.div`mt-8 sm:mt-12`;
const Button = tw.a`bg-btn-gradient hover:bg-btn-gradient-hover rounded-md px-8 py-3 text-base font-medium text-white shadow-md hover:shadow-lg transition duration-300 inline-flex items-center`;
const Right = tw.div`mt-12 lg:mt-0 lg:col-span-6`;
const ImgWrap = tw.div`bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden`;
const Img = tw.img`rounded-lg shadow-xl`;

export default function Hero() {
  return (
    <HeroSection>
      <Container>
        <Grid>
          <Left>
            <div>
              <Title>
                <span tw="block">Powering the Future of</span>
                <span tw="block text-blue-300">Bitcoin Mining</span>
              </Title>
              <Subtitle>
                Aperture AC is a SPAC focused on acquiring and scaling innovative Bitcoin mining operations.
              </Subtitle>
              <ButtonWrap>
                <div tw="sm:max-w-lg sm:mx-auto lg:mx-0">
                  <Button href="#contact">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </ButtonWrap>
            </div>
          </Left>
          <Right>
            <ImgWrap>
              <div tw="px-4 py-8 sm:px-10">
                <Img src="http://static.photos/technology/1024x576/42" alt="Bitcoin Mining" />
              </div>
            </ImgWrap>
          </Right>
        </Grid>
      </Container>
    </HeroSection>
  );
}
