enum View {
  Component = 'By Component',
  Vulnerability = 'By Vulnerability',
}

enum ComponentViewColumn { // Numbered so we can sort them if needed
  ComponentName = 1,
  NumberOfVulnerabilities = 2,
  ConsolidatedHEATRiskScore = 3,
  MaxHeatRiskScore = 4,
  CVSSBaseScore = 5,
  LikelihoodScore = 6,
  ImpactScore = 7,
  VulnerabilityStatus = 8,
  CVEReference = 9,
}

const ComponentViewColumnStrings = {
  ComponentName: 'Component Name',
  NumberOfVulnerabilities: 'Number Of Vulnerabilities',
  ConsolidatedHEATRiskScore: 'Consolidated HEAT Risk Score',
  CVSSBaseScore: 'CVSS Base Score',
  LikelihoodScore: 'Likelihood Score',
  ImpactScore: 'Impact Score',
  VulnerabilityStatus: 'Vulnerability Status',
  CVEReference: 'CVE Reference',
};

enum VulnerabilityViewColumn { // Numbered so we can sort them if needed
  CVEID = 'CVEID', //{name: 'CVEID', string: 'CVE ID'},
  CVSSSeverity = 'CVSSSeverity',
  Impact = 'Impact',
  Likelihood = 'Likelihood',
  Risk = 'Risk',
  ComponentName = 'ComponentName',
}

const VulnerabilityViewColumnStrings = {
  CVEID: 'CVE ID',
  CVSSSeverity: 'CVSSSeverity',
  Impact: 'Impact',
  Likelihood: 'Likelihood',
  Risk: 'Risk',
  ComponentName: 'Component Name',
};

enum Risk {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Critical = 'Critical',
}

export {
  View,
  ComponentViewColumn,
  ComponentViewColumnStrings,
  VulnerabilityViewColumn,
  VulnerabilityViewColumnStrings,
  Risk,
};
