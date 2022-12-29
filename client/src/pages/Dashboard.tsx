import styled from 'styled-components';
import content from 'static/mock/dashboard';

import QuickStats from 'components/QuickStats';

interface TeamProps {
  members: {
    name: string;
    position: string;
    linkedin: string;
    picture: any;
  }[];
}

const Dashboard = () => {
  return (
    <>
      <PageBody>
        <SectionHeading>Quick Stats</SectionHeading>
        <QuickStats stats={content.stats} />
        {/* {content.stats.map((content, index) => {
          return (
            <PageBody>
              <Subtitle>{content.title}</Subtitle>
              <Paragraph>{content.paragraph}</Paragraph>
            </PageBody>
          );
        })} */}
        <DashboardGrid>
          <SectionHeading>
            List of Components and Vulnerabilities
          </SectionHeading>
        </DashboardGrid>
      </PageBody>
    </>
  );
};

const PageBody = styled.div`
  padding: 20px 100px 0 100px;
`;

const SectionHeading = styled.h2``;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-areas: '
  SectionHeading ViewToggle
  SearchBar OptionButtons
  Dashboard Dashboard
  ';
`;

export default Dashboard;
