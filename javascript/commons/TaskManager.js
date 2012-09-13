/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */
var TaskManager = {

	openedTasks : new HashMap(),
	
	activeTask : null,
	
	appendTask : function( task ) {
		if (TaskManager.openedTasks.findIt( task.id ) == -1) {
			TaskManager.openedTasks.put(task.id, task);
		}
	},
	
	openTask : function( task ) {
		TaskManager.appendTask( task );
		TaskManager.activeTask = task;
	}, 
	
	killTask : function( task ) {
		TaskManager.hideTask( task );
		TaskManager.openedTasks.remove( task.id );
	}, 
	
	closeTask : function( task ) {
		if (TaskManager.activeTask.id == task.id) {
			TaskManager.activeTask = null;
		}
	},
	
	hideActiveTask : function() {
		if (TaskManager.activeTask != null) {
			TaskManager.activeTask.handler.hide();
		}
	},
	
	showActiveTask : function() {
		if (TaskManager.activeTask != null) {
			TaskManager.activeTask.handler.show();
		}
	},
	
	findTask : function( id ) {
		return TaskManager.openedTasks.get( id );
	}
};