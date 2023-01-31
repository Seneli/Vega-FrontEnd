import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import content from 'static/mock/dashboard.json';
import {
  View,
  VulnerabilityViewColumn,
  Severity,
} from 'helpers/enums/dashboard';

import QuickStats from 'components/QuickStats';
import ViewButtons from 'components/ViewButtons';
import SearchAndFilterBar from 'components/SearchAndFilter';
import ShowInfoAndExport from 'components/ShowInfoAndExport';
import PaginatedTable from 'components/PaginatedTable';

const severitiesList = Object.keys(Severity).filter((item) => {
  return isNaN(Number(item));
});

const vulnerabilityColumnList = Object.keys(VulnerabilityViewColumn).filter(
  (item) => {
    return isNaN(Number(item));
  }
);

const Dashboard = () => {
  const [view, setView] = useState<View>(View.Component);
  const [searchBy, setSearchBy] = useState<string>('');
  const [riskFilters, setRiskFilters] = useState<string[]>(severitiesList);
  const [impactFilters, setImpactFilters] = useState<string[]>(severitiesList);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [shownColumns, setShownColumns] = useState<string[]>(
    vulnerabilityColumnList
  );
  const [sortBy, setSortBy] = useState<VulnerabilityViewColumn>(
    VulnerabilityViewColumn.CVSSSeverity
  );

  const reloadDashboard = () => {
    console.log(
      'SERVER ENDPOINT',
      process.env.REACT_APP_SERVER_ENDPOINT,
      '\nVIEW: ',
      view,
      '\nIMPACT FILTER LIST: ',
      impactFilters,
      'RISK FILTER LIST',
      riskFilters,
      '\nSHOWN COLUMNS: ',
      shownColumns,
      '\nSORT BY: ',
      sortBy,
      '\nCURRENT PAGE: ',
      currentPage
    );
    const queryParams = {
      sessionId: 9927,
      view: view,
      riskFilters: riskFilters,
      severityFilters: impactFilters,
      sortBy: sortBy,
      page: currentPage,
    };
    axios
      .get(`${process.env.REACT_APP_SERVER_ENDPOINT}/dashboard`, {
        params: queryParams,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    // RESEND THE REQUEST FROM THE DASHBOARD EVERY RENDER
    reloadDashboard();
  }, [view, sortBy, riskFilters, impactFilters, shownColumns, currentPage]);

  return (
    <PageBody>
      <SectionHeading>Quick Stats</SectionHeading>
      <QuickStats stats={content.stats} />
      <DashboardGrid>
        <SectionHeading>List of Components and Vulnerabilities</SectionHeading>
        <ViewButtons view={view} setView={setView} />
        <SearchAndFilterBar
          riskFilters={riskFilters}
          setRiskFilters={setRiskFilters}
          impactFilters={impactFilters}
          setImpactFilters={setImpactFilters}
          searchBy={searchBy}
          setSearchBy={setSearchBy}
        />
        <ShowInfoAndExport
          shownColumns={shownColumns}
          setShownColumns={setShownColumns}
        />
        <PaginatedTable
          view={view}
          setSortBy={setSortBy}
          shownColumns={shownColumns}
          data={content.vulnerabilityList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
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
