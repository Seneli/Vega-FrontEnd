const enumToString = (enumStr: string): string => {
  switch (enumStr) {
    case 'Component_Name':
      return 'Component Name';
    case 'Component_Ref':
      return 'Component Ref';
    case 'Consolidated_Risk':
      return 'Consolidated Risk';
    case 'Highest_Risk':
      return 'Highest Risk';
    case 'Number_of_Vulnerabilities':
      return 'Number of Vulnerabilities';
    case 'cveId':
      return 'CVE ID';
    case 'cvss2':
      return 'CVSS2';
    case 'likelihood':
      return 'Likelihood';
    case 'impact':
      return 'Impact';
    case 'packageRef':
      return 'Package Refrence';
    case 'risk':
      return 'Risk';
    default:
      return enumStr;
  }
};

export default enumToString;
