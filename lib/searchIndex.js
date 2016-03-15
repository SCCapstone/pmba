StudentIndex = new EasySearch.Index({
    collection: studentInfo,
    fields: ['FirstName', 'LastName'],
    engine: new EasySearch.MongoDB()
});