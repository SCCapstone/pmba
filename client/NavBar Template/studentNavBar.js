Template.studentNavBar.helpers({
	setActive: function () {
		page = router.current();
		alert(page);
		$(page).addClass('active');
	}
})

Template.studentNavBar.rendered = function(){
		page = router.current();
		alert(page);
		$(page).addClass('active');
}