import {
  ComponentViewColumn,
  VulnerabilityViewColumn,
  Severity,
} from 'helpers/enums/enums';

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

const removeFirstItemFromArray = (list: string[], element: string) => {
  const index = list.indexOf(element);
  list.splice(index, 1);
  return list;
};

const tempComponentColumnList: string[] = Object.keys(
  ComponentViewColumn
).filter((item) => {
  return isNaN(Number(item));
});
const removableComponentsColumnList = removeFirstItemFromArray(
  tempComponentColumnList,
  ComponentViewColumn.Component_Name
);

const tempVulnerabilityColumnList: string[] = Object.keys(
  VulnerabilityViewColumn
).filter((item) => {
  return isNaN(Number(item));
});
const removableVulnerabilitiesColumnList = removeFirstItemFromArray(
  tempVulnerabilityColumnList,
  VulnerabilityViewColumn.cveId
);

export {
  severitiesList,
  vulnerabilityColumnList,
  componentColumnList,
  removableComponentsColumnList,
  removableVulnerabilitiesColumnList,
};
