enum View {
  Component = 'By Component',
  Vulnerability = 'By Vulnerability',
}

enum Column {
  PackageName,
  NumberOfVulnerabilities,
  ConsolidatedHEATRiskScore,
  MaxHeatRiskScore,
  CVSSBaseScore,
  LikelihoodScore,
  ImpactScore,
  VulnerabilityStatus,
  CVEReference,
}

enum Risk {
  Catastrophic,
  Considerable,
  Moderate,
  Minor,
  Insignificant,
}

export { View, Column, Risk };
