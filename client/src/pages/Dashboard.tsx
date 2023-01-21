import { useState, useEffect } from 'react';
import styled from 'styled-components';

import content from 'static/mock/dashboard';
import { View, VulnerabilityViewColumn, Risk } from 'helpers/enums/dashboard';

import QuickStats from 'components/QuickStats';
import ViewButtons from 'components/ViewButtons';
import SearchAndFilterBar from 'components/SearchAndFilter';
import ShowInfoAndExport from 'components/ShowInfoAndExport';
import PaginatedTable from 'components/PaginatedTable';

//TODO: GET THE DATA FROM AN API CALL LATER ON - HAVE IT HANDLED BY A FUNCTION THAT'S REFERENCED IN THIS COMPONENT
import mockData from 'static/mock/dashboard';

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
  const [searchBy, setSearchBy] = useState<string>('');
  const [filterList, setFilterList] = useState<Risk[]>([]);
  const [shownColumns, setShownColumns] = useState<VulnerabilityViewColumn[]>([
    VulnerabilityViewColumn.CVEID,
    VulnerabilityViewColumn.Impact,
    VulnerabilityViewColumn.Likelihood,
    VulnerabilityViewColumn.ComponentName,
    VulnerabilityViewColumn.Risk,
  ]);
  const [sortBy, setSortBy] = useState<VulnerabilityViewColumn>(
    VulnerabilityViewColumn.CVSSSeverity
  );

  const reloadDashboard = () => {
    console.log(view, searchBy, filterList, shownColumns);
  };

  useEffect(() => {
    // RESEND THE REQUEST FROM THE DASHBOARD EVERY RENDER
    console.log(process.env.REACT_APP_SERVER_ENDPOINT);
    reloadDashboard();
  }, [view, filterList, shownColumns]);

  return (
    <PageBody>
      <SectionHeading>Quick Stats</SectionHeading>
      <QuickStats stats={content.stats} />
      <DashboardGrid>
        <SectionHeading>List of Components and Vulnerabilities</SectionHeading>
        <ViewButtons view={view} setView={setView} />
        <SearchAndFilterBar
          filterList={filterList}
          setFilterList={setFilterList}
          searchBy={searchBy}
          setSearchBy={setSearchBy}
        />
        <ShowInfoAndExport
          shownColumns={shownColumns}
          setShownColumns={setShownColumns}
        />
        <PaginatedTable
          sortBy={sortBy}
          setSortBy={setSortBy}
          shownColumns={shownColumns}
          data={mockData.vulnerabilityList}
        />
      </DashboardGrid>
    </PageBody>
  );
};

const PageBody = styled.div`
  padding: 20px 10vw 0 10vw;
  margin: auto;
  max-width: 1000px;
`;

const DashboardGrid = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-areas:
    'SectionHeading ViewButtons'
    'SearchAndFilter ShowInfoAndExport'
    'PaginatedTable PaginatedTable';
  grid-gap: 15px;

  //INSERT RESIZE FOR TABLET SIZE HERE - ASK RANDA
  @media ${(props) => props.theme.viewport.tablet} {
  }

  //INSERT RESIZE FOR MOBILE SIZE HERE - ASK RANDA
  @media ${(props) => props.theme.viewport.mobile} {
  }
`;

const SectionHeading = styled.h2``;

export default Dashboard;
