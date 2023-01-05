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

enum VulnerabilityViewColumn { // Numbered so we can sort them if needed
  CVEID = 'CVEID',
  VulnerabilityDescription = 'VulnerabilityDescription',
  CWEName = 'CWEName',
  CVSSSeverity = 'CVSSSeverity',
  ComponentHEATRisk = 'ComponentHEATRisk',
  ComponentName = 'ComponentName',
}

enum Risk {
  Catastrophic,
  Considerable,
  Moderate,
  Minor,
  Insignificant,
}

export { View, ComponentViewColumn, VulnerabilityViewColumn, Risk };
