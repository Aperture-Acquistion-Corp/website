import tw from 'twin.macro';
import { Target, TrendingUp, Shield } from 'react-feather';

const Section = tw.div`py-16 bg-gray-50`;
const Container = tw.div`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`;
const Center = tw.div`text-center`;
const Title = tw.h2`text-3xl font-extrabold text-gray-900 sm:text-4xl`;
const Subtitle = tw.p`mt-4 max-w-2xl text-xl text-gray-500 mx-auto`;
const Grid = tw.div`mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3`;
const Card = tw.div`pt-6`;
const CardInner = tw.div`flow-root bg-white rounded-lg shadow-lg px-6 pb-8 h-full`;
const IconWrap = tw.div`flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white`;
const CardTitle = tw.h3`mt-8 text-lg font-medium text-gray-900`;
const CardText = tw.p`mt-5 text-base text-gray-500`;

export default function Strategy() {
  return (
    <Section id="strategy">
      <Container>
        <Center>
          <Title>Our Investment Strategy</Title>
          <Subtitle>Focused on acquiring and scaling Bitcoin mining operations</Subtitle>
        </Center>
        <Grid>
          <Card>
            <CardInner>
              <div tw="-mt-6">
                <IconWrap><Target /></IconWrap>
                <CardTitle>Target Identification</CardTitle>
                <CardText>
                  We target Bitcoin mining companies with proven operations, efficient energy contracts, and scalable infrastructure.
                </CardText>
              </div>
            </CardInner>
          </Card>
          <Card>
            <CardInner>
              <div tw="-mt-6">
                <IconWrap><TrendingUp /></IconWrap>
                <CardTitle>Growth Acceleration</CardTitle>
                <CardText>
                  Post-acquisition, we provide capital and expertise to expand mining capacity and optimize operations.
                </CardText>
              </div>
            </CardInner>
          </Card>
          <Card>
            <CardInner>
              <div tw="-mt-6">
                <IconWrap><Shield /></IconWrap>
                <CardTitle>Risk Management</CardTitle>
                <CardText>
                  We prioritize operations with diversified energy sources and hedging strategies to mitigate volatility.
                </CardText>
              </div>
            </CardInner>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}
