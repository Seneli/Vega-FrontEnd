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
}

export { View, ComponentViewColumn, VulnerabilityViewColumn, Severity };
