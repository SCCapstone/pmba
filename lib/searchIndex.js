//Setup the search index for easy search

StudentIndex = new EasySearch.Index({
    collection: studentInfo,
    fields: ['FirstName', 'LastName', 'FullName'],
    engine: new EasySearch.MongoDB()
});