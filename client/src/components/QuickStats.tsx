import styled from 'styled-components';
import content from 'static/mock/dashboard';

import QuickStat from 'components/QuickStat';

interface QuickStatsProps {
  stats: {
    componentsDetected: number;
    vulnerabilitiesIdentified: number;
    highSeverityVulnerabilities: number;
    highHEATVulnerabilities: number;
  };
}

const QuickStats = ({ stats }: QuickStatsProps) => {
  return (
    <QuickStatsFlexbox>
      <QuickStat name={'Components Detected'} stat={stats.componentsDetected} />
      <QuickStat
        name={'High HEAT Vulnerabilities'}
        stat={stats.highHEATVulnerabilities}
      />
      <QuickStat
        name={'High Severity Vulnerabilities'}
        stat={stats.highSeverityVulnerabilities}
      />
      <QuickStat
        name={'Vulnerabilities Identified'}
        stat={stats.vulnerabilitiesIdentified}
      />
    </QuickStatsFlexbox>
  );
};

const QuickStatsFlexbox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vw;
  flex-wrap: wrap;
`;

export default QuickStats;
