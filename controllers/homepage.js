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
		},
		toggleImages: function() {
			$(".fa-2x").click(function(event){
				event.preventDefault();
				$(".caro").attr({
					src: $(".caro").attr('data-other-src'), 
					'data-other-src': $(".caro").attr('data-src-other'), 
					'data-src-other': $(".caro").attr('src')

				})
				
			});
		}
	}
});
