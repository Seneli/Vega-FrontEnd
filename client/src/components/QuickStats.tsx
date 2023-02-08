import React from 'react'
import styled from 'styled-components';
import QuickStat from 'components/QuickStat';

interface QuickStatsProps {
  stats: {
    Components_Detected: number;
    High_Risk_Vulnerabilities: number;
    High_Severity_Vulnerabilities: number;
    Vulnerabilities_Identified: number;
  };
}

const QuickStats = ({ stats }: QuickStatsProps) => {
  return (
    <QuickStatsFlexbox>
      <QuickStat
        name={'Components Detected'}
        stat={stats.Components_Detected}
      />
      <QuickStat
        name={'High Risk Vulnerabilities'}
        stat={stats.High_Risk_Vulnerabilities}
      />
      <QuickStat
        name={'High Severity Vulnerabilities'}
        stat={stats.High_Severity_Vulnerabilities}
      />
      <QuickStat
        name={'Vulnerabilities Identified'}
        stat={stats.Vulnerabilities_Identified}
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
