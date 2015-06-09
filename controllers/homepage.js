Bustle.HomepageController = Ember.Controller.extend({
	actions: {	
		showStory: function() {	
			$(".main").addClass('hidden');
			$(".article-full.first-art").removeClass('hidden');
		},
		showStory2: function() {	
			$(".main").addClass('hidden');
			$(".article-full.second-art").removeClass('hidden');
		},
		showStory3: function() {	
			$(".main").addClass('hidden');
			$(".article-full.third-art").removeClass('hidden');
		},
		showStory4: function() {	
			$(".main").addClass('hidden');
			$(".article-full.fourth-art").removeClass('hidden');
		},
		closeStory: function() {
			
			$(".main").removeClass('hidden');
			$(".article-full").addClass('hidden');
		}
	}
});
