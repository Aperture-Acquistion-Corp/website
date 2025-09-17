import tw from 'twin.macro';

const Section = tw.div`py-16 bg-white overflow-hidden`;
const Container = tw.div`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`;
const Grid = tw.div`lg:grid lg:grid-cols-2 lg:gap-8`;
const ImgWrap = tw.div`mb-8 lg:mb-0`;
const Img = tw.img`rounded-lg shadow-xl`;
const Content = tw.div`lg:col-start-2`;
const Title = tw.h2`text-3xl font-extrabold text-gray-900 sm:text-4xl`;
const Text = tw.div`mt-6 text-gray-500 space-y-6`;

export default function About() {
  return (
    <Section id="about">
      <Container>
        <Grid>
          <ImgWrap>
            <Img src="http://static.photos/finance/1024x576/23" alt="About Aperture AC" />
          </ImgWrap>
          <Content>
            <Title>About Aperture AC</Title>
            <Text>
              <p>
                Aperture AC is a Special Purpose Acquisition Company (SPAC) formed to identify and acquire a high-growth Bitcoin mining operation with strong fundamentals and significant scaling potential.
              </p>
              <p>
                Our mission is to provide public market investors with access to the rapidly growing Bitcoin mining sector while bringing operational expertise and capital to accelerate growth.
              </p>
              <p>
                We are currently evaluating several acquisition targets in the Bitcoin mining space that demonstrate sustainable competitive advantages, strong management teams, and attractive growth prospects.
              </p>
            </Text>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
}
