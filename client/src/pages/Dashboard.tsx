import { useState } from 'react';
import styled from 'styled-components';

import content from 'static/mock/dashboard';
import { View, Column, Risk } from 'static/enums/dashboard';

import QuickStats from 'components/QuickStats';
import ViewButtons from 'components/ViewButtons';

interface DashboardProps {
  members?: {
    name: string;
    position: string;
    linkedin: string;
    picture: any;
  }[];
}

const Dashboard = (props: DashboardProps) => {
  const [view, setView] = useState<View>(View.Component);
  const [sortBy, setSortBy] = useState<Column>(
    Column.ConsolidatedHEATRiskScore
  );
  const [filterBy, setFilterBy] = useState<Risk>(Risk.None);
  const [shownColumns, setShownColumns] = useState<Column[]>([]);

  return (
    <>
      <PageBody>
        <SectionHeading>Quick Stats</SectionHeading>
        <QuickStats stats={content.stats} />
        <DashboardGrid>
          <SectionHeading>
            List of Components and Vulnerabilities
          </SectionHeading>
          <ViewButtons view={view} setView={setView} />
          <SearchAndFilterBar />
          <ShowInfoAndExport />
          <DashboardTable />
          {/* {content.stats.map((content, index) => {
          return (
            <PageBody>
              <Subtitle>{content.title}</Subtitle>
              <Paragraph>{content.paragraph}</Paragraph>
            </PageBody>
          );
        })} */}
        </DashboardGrid>
      </PageBody>
    </>
  );
};

const PageBody = styled.div`
  padding: 20px 10vw 0 10vw;
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

  //INSERT RESIZE FOR TABLET SIZE HERE - ASK RANDA
  @media ${(props) => props.theme.viewport.tablet} {
  }

  //INSERT RESIZE FOR MOBILE SIZE HERE - ASK RANDA
  @media ${(props) => props.theme.viewport.mobile} {
  }
`;

const SectionHeading = styled.h2``;

// const ViewButtons = styled.div`
//   background-color: red;
//   grid-area: ViewToggle;
// `;

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
