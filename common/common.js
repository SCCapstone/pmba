TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Forms = new Tabular.Table({
  name: "Forms",
  collection: forms,
  columns: [
    {data: "Name", title: "Name"},
    {data: "Description", title: "Description"},
	{data: "DueDate", title: "Due Date"}
  ]
});