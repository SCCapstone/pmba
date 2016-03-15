StudentIndex = new EasySearch.Index({
    collection: studentInfo,
    fields: ['FirstName', 'LastName'],
    engine: new EasySearch.MongoDB({
        selector: function (searchObject, options, aggregation) {
            selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
                categoryFilter = options.search.props.categoryFilter;
            if (_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
                selector.category = categoryFilter;
            }
        return selector;
        }
    })
});