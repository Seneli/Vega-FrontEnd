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
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH',
  Critical = 'CRITICAL',
}

enum ComponentViewColumn { // Numbered so we can sort them if needed
  Component_Name,
  Component_Ref,
  Consolidated_Risk,
  Highest_Risk,
  Number_of_Vulnerabilities,
}

enum VulnerabilityViewColumn { // Numbered so we can sort them if needed
  cveId,
  cvss2,
  impact,
  likelihood,
  packageRef,
  risk,
}

export {
  SbomProcessingState,
  View,
  ComponentViewColumn,
  VulnerabilityViewColumn,
  Severity,
};
