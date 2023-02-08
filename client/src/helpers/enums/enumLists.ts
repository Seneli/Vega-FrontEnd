import {
  ComponentViewColumn,
  VulnerabilityViewColumn,
  Severity,
} from 'helpers/enums/dashboard';

const severitiesList: string[] = Object.keys(Severity).filter((item) => {
  return isNaN(Number(item));
});

const vulnerabilityColumnList: string[] = Object.keys(
  VulnerabilityViewColumn
).filter((item) => {
  return isNaN(Number(item));
});

const componentColumnList: string[] = Object.keys(ComponentViewColumn).filter(
  (item) => {
    return isNaN(Number(item));
  }
);

export { severitiesList, vulnerabilityColumnList, componentColumnList };
