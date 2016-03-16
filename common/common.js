TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Forms = new Tabular.Table({
  name: "formTableInfo",
  collection: formTableInfo,
  columns: [
    {data: "Name", title: "Name"},
    {data: "PMBA Locater Form", title: "PMBA Locater Form"},
	{data: "Immunization Form", title: "Immunization Form"},
	{data: "Citizenship Verification Form", title: "Citizen Verification Form"}
  ]
});