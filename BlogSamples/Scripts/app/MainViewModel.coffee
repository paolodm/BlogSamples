class MainViewModel
	constructor: () ->
		amplify.subscribe("HomeViewModel.Save", (hobby) => 
			# Hooray! HomeViewModel has saved a hobby.
			# ... This is where we handle this event
		)	

class HobbyWindowViewModel 
	@Hobby = ko.observable()
	save: () =>
		# Let everyone know that HobbyWindowViewModel has saved a hobby
		amplify.publish("HomeViewModel.Save", @Hobby())
		