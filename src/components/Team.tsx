import tw from 'twin.macro';

const Section = tw.div`py-16 bg-white`;
const Container = tw.div`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`;
const Center = tw.div`text-center`;
const Title = tw.h2`text-3xl font-extrabold text-gray-900 sm:text-4xl`;
const Subtitle = tw.p`mt-4 max-w-2xl text-xl text-gray-500 mx-auto`;
const Grid = tw.div`mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3`;
const Card = tw.div`pt-6`;
const CardInner = tw.div`flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full`;
const ImgWrap = tw.div`flex items-center justify-center`;
const Img = tw.img`h-40 w-40 rounded-full object-cover`;
const Name = tw.h3`mt-6 text-lg font-medium text-gray-900 text-center`;
const Role = tw.p`mt-1 text-base text-blue-600 text-center`;
const Desc = tw.p`mt-3 text-base text-gray-500 text-center`;

const team = [
  {
    name: 'Calvin Kang',
    role: 'CEO & Chairman',
    img: 'http://static.photos/people/200x200/1',
    desc: 'Former investment banker with 15+ years experience in technology finance and SPAC transactions.'
  },
  {
    name: 'Daniel Zhao',
    role: 'CFO',
    img: 'http://static.photos/people/200x200/2',
    desc: 'Former Big 4 audit partner specializing in cryptocurrency and blockchain companies.'
  },
  {
    name: 'Zhen Tan',
    role: 'CTO',
    img: 'http://static.photos/people/200x200/3',
    desc: 'Blockchain engineer and former mining operations lead at a major cryptocurrency firm.'
  }
];

export default function Team() {
  return (
    <Section id="team">
      <Container>
        <Center>
          <Title>Our Leadership Team</Title>
          <Subtitle>Experienced professionals with deep expertise in finance and technology</Subtitle>
        </Center>
        <Grid>
          {team.map((member, i) => (
            <Card key={member.name}>
              <CardInner>
                <div tw="-mt-6">
                  <ImgWrap>
                    <Img src={member.img} alt={member.name} />
                  </ImgWrap>
                  <Name>{member.name}</Name>
                  <Role>{member.role}</Role>
                  <Desc>{member.desc}</Desc>
                </div>
              </CardInner>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
