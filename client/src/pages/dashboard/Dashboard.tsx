import React, { useContext, useState, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import axios from 'axios';
import LoadingSpin from 'react-loading-spin';

import { View, VulnerabilityViewColumn } from 'helpers/constants/enums';
import {
  severitiesList,
  componentColumnList,
  removableComponentsColumnList,
  removableVulnerabilitiesColumnList,
} from 'helpers/constants/enumLists';
import {
  type DataInterface,
  EmptyDataInterface,
} from 'helpers/constants/dashboardInterfaces';

import QuickStats from 'components/QuickStats';
import ViewButtons from 'components/ViewButtons';
import SearchAndFilterBar from 'components/SearchAndFilter';
import ShowInfoAndExport from 'components/ShowInfoAndExport';
import PaginatedTable from 'components/PaginatedTable';

const Dashboard = () => {
  const themeContext = useContext(ThemeContext);
  const [view, setView] = useState<View>(View.Component);
  const [searchBy, setSearchBy] = useState<string>('');
  const [riskFilters, setRiskFilters] = useState<string[]>(severitiesList);
  const [impactFilters, setImpactFilters] = useState<string[]>(severitiesList);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [shownColumns, setShownColumns] =
    useState<string[]>(componentColumnList);
  const [sortBy, setSortBy] = useState<VulnerabilityViewColumn>(
    VulnerabilityViewColumn.cveId
  );
  const [dashboardContent, setDashboardContent] =
    useState<DataInterface>(EmptyDataInterface);
  const [loading, setLoading] = useState(false);
  const [columnDropdown, setColumnDropdown] = useState<string[]>(
    removableComponentsColumnList
  );

  useEffect(() => {
    // RESEND THE REQUEST FROM THE DASHBOARD EVERY RENDER
    setLoading(true);
    const queryParams = {
      sessionId: 27,
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
          setLoading(false);
          setDashboardContent(response.data);
          if (view === View.Component) {
            setColumnDropdown(removableComponentsColumnList);
          } else {
            setColumnDropdown(removableVulnerabilitiesColumnList);
          }
        },
        (error) => {
          console.log(error);
          setLoading(false);
        }
      );
  }, [view, sortBy, riskFilters, impactFilters, currentPage]);

  return (
    <>
      <Loading loading={loading}>
        <div style={{ margin: 'auto', width: '200px', padding: '30vh 0 0 0' }}>
          <LoadingSpin
            width={'15px'}
            size={'150px'}
            primaryColor={themeContext.colors.primaryPink}
          />
        </div>
      </Loading>
      <PageBody>
        <SectionHeading>Quick Stats</SectionHeading>
        <QuickStats stats={dashboardContent.stats} />
        <DashboardGrid>
          <SectionHeading>
            List of Components and Vulnerabilities
          </SectionHeading>
          <ViewButtons
            view={view}
            setView={setView}
            shownColumns={shownColumns}
            setShownColumns={setShownColumns}
          />
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
            columnDropdown={columnDropdown}
          />
          <PaginatedTable
            view={view}
            setSortBy={setSortBy}
            shownColumns={shownColumns}
            data={dashboardContent.data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </DashboardGrid>
      </PageBody>
    </>
  );
};

interface LoadingProps {
  loading: boolean;
}

const Loading = styled.div<LoadingProps>`
  z-index: 10;
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: 70%;
  background-color: grey;
  display: ${(props) => (props.loading ? 'block' : 'none')};
`;

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
