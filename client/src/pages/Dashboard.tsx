import styled from 'styled-components';
import content from 'static/mock/dashboard';

import QuickStats from 'components/QuickStats';

interface DashboardProps {
  members?: {
    name: string;
    position: string;
    linkedin: string;
    picture: any;
  }[];
}

const Dashboard = (props: DashboardProps) => {
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
          <ViewButtons />
          <SearchAndFilterBar />
          <ShowInfoAndExport />
          <DashboardTable />
        </DashboardGrid>
      </PageBody>
    </>
  );
};

const PageBody = styled.div`
  padding: 20px 100px 0 100px;
`;

const DashboardGrid = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: 60vw 20vw;
  grid-template-areas:
    'SectionHeading ViewToggle'
    'SearchBar OptionButtons'
    'Dashboard Dashboard';
  grid-gap: 15px;
  @media ${(props) => props.theme.viewport.tablet} {
    grid-template-areas:
      'SectionHeading ViewToggle'
      'SearchBar OptionButtons'
      'Dashboard Dashboard';
    grid-gap: 15px;
  }
  @media ${(props) => props.theme.viewport.mobile} {
    grid-template-areas:
      'SectionHeading ViewToggle'
      'SearchBar OptionButtons'
      'Dashboard Dashboard';
    grid-gap: 15px;
  }
`;

const SectionHeading = styled.h2``;

const ViewButtons = styled.div`
  background-color: red;
  grid-area: ViewToggle;
`;

const SearchAndFilterBar = styled.div`
  background-color: blue;
  grid-area: SearchBar;
  width: 100%;
  height: 50px;
`;

const ShowInfoAndExport = styled.div`
  background-color: green;
  grid-area: OptionButtons;
  width: 100%;
  height: 50px;
`;

const DashboardTable = styled.div`
  background-color: orange;
  grid-area: OptionButtons;
  width: 100%;
  height: 500px;
  grid-area: Dashboard;
`;

export default Dashboard;
