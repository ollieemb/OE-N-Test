CI_client.standardId = _CLIENTID_;
CI_client.companyName = '_CLIENTNAME_';
CI_client.affiliatedCompany = '';
CI_client.displayErrors = 0;
CI_client.directDialNumber = 'XXX-XXX-XXXX';
CI_client.collectCallNumber = '<strong>Not Available</strong>';
CI_client.customText = {};
CI_client.Langs = ['de', 'en', 'es', 'fr', 'it', 'ja'];

CI_client.phone = {
  select: true,
  numQty: 0,
  typeQty: 1,
  typePriority: ['DIRECT', 'ITFS', 'DA', 'COLLECT', 'GISONE', 'GISTWO', 'OneConnect', 'OTHER'],
  requestedPhoneNumbers: {
    //"Canada":{numQty:1}
  },
  customPhoneNumbers: {},
  customCCN: {},
  customDDN: {},
  customNav: function (country) {},
  customSort: {}
};

CI_client.dropDowns = {
  standardId: 0,
  AJAX: 0,
  flags: {},
  fields: ['country1', 'country2'],
  fieldsTable: [],
  filters: {},
  customSortTable: [],
  questionId: 0,
  redirect: 'issues.html',
  redirectQuestion: '',
  customSort: {
    Other: 999,
    OTHER: 999
  },
  functions: {},
  redirects: {},
  alert: {
    type: 0,
    text: {}
  },
  message: {
    type: 0,
    position: 2,
    truncate: true,
    text: {}
  },
  customNav: function (url, prams) {},
  customPrams: [],
  data: []
};

CI_client.issues = {
  violationPackageId: 0,
  standardId: 0,
  AJAX: 1,
  redirects: {},
  hiddenIssues: [],
  categoriesGroup: 1,
  categoriesShowAll: 1,
  categoriesShowOne: 0,
  showAll: 0,
  showOne: 0,
  showHover: 0,
  redirect: '',
  customSort: {},
  customNav: function (url) {},
  customPrams: [],
  data: []
};
