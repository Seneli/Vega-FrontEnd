interface VulnerabilityViewColumn {
  cveId: string;
  cvss2: string;
  impact: number;
  likelihood: number;
  packageRef: string;
  risk: number;
}

interface ComponentViewColumn {
  Component_Name: string;
  Component_Ref: string;
  Consolidated_Risk: number;
  Highest_Risk: number;
  Number_of_Vulnerabilities: number;
  Vulnerabilities: VulnerabilityViewColumn[];
}

interface DataInterface {
  stats: {
    Components_Detected: number;
    High_Risk_Vulnerabilities: number;
    High_Severity_Vulnerabilities: number;
    Vulnerabilities_Identified: number;
  };
  data: ComponentViewColumn[] | VulnerabilityViewColumn[];
}

const EmptyDataInterface: DataInterface = {
  stats: {
    Components_Detected: -1,
    High_Risk_Vulnerabilities: -1,
    High_Severity_Vulnerabilities: -1,
    Vulnerabilities_Identified: -1,
  },
  data: [],
};

export { type VulnerabilityViewColumn, type DataInterface, EmptyDataInterface };
