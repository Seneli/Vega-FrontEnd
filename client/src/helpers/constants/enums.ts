enum SbomProcessingState {
  Preupload = 'Pre-upload',
  Upload = 'Upload',
  Query = 'Query',
  RiskAnalysis = 'Risk analysis',
  Done = 'Done',
}

enum View {
  Component = 'Component',
  Vulnerability = 'Vulnerability',
}

enum Severity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

enum ComponentViewColumn {
  Component_Name = 'Component_Name',
  Component_Ref = 'Component_Ref',
  Consolidated_Risk = 'Consolidated_Risk',
  Highest_Risk = 'Highest_Risk',
  Number_of_Vulnerabilities = 'Number_of_Vulnerabilities',
}

enum VulnerabilityViewColumn {
  cveId = 'cveId',
  cvss2 = 'cvss2',
  impact = 'impact',
  likelihood = 'likelihood',
  packageRef = 'packageRef',
  risk = 'risk',
  severity = "severity"
}

export {
  SbomProcessingState,
  View,
  ComponentViewColumn,
  VulnerabilityViewColumn,
  Severity,
};
