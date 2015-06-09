Bustle.ApplicationController = Ember.Controller.extend ({
	actions: {

		hoverMenu: function() {
			$("li.icons").mouseenter(function(event){
				event.preventDefault();
				$(".icon-drop-down").removeClass("hidden");
			});
			 $("li.icons").mouseleave(function(event) {
				event.preventDefault();
				$(".icon-drop-down").addClass("hidden");
			});
		}
	}
});