import { useState } from 'react';
import styled from 'styled-components';

import content from 'static/mock/dashboard';
import { View, Column, Risk } from 'static/enums/dashboard';

import QuickStats from 'components/QuickStats';
import ViewButtons from 'components/ViewButtons';
import SearchAndFilterBar from 'components/SearchAndFilterBar';

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
  const [searchBy, setSearchBy] = useState<string>('');
  const [filterBy, setFilterBy] = useState<Risk[]>([]);
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
          <SearchAndFilterBar
            checkedList={filterBy}
            setCheckedList={setFilterBy}
          />
          <div>
            Selected filters: {filterBy.length ? filterBy.join(', ') : null}
          </div>
          <ShowInfoAndExport />
          <DashboardTable />
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
