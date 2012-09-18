/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */

var ToDoApp = {

	id : "toDoScreen",

	useCloseAnimation : true,

	show : function() {
		ApplicationScreenHelper.showApplication( ToDoApp.id, ToDoApp );
		
	},
	
	hide : function() {
		ApplicationScreenHelper.hideApplication( ToDoApp.id );
	},
	
	close : function() {
		ApplicationScreenHelper.closeApplication( ToDoApp.id );
	},
	

	created : function( application ) {
		      var currentLoc;

      $(function() {

        // clicking checkbox toggles done state
        $('#list li input[type=checkbox]').live('click', function(e) {
          saveTodos();
        });

        // create new to do when clicking 'new'
        $('.addItem').click(function() {
          createTodo();
          return false;
        });

        // delete to do when clicking 'x'
        $('.delete').live('click', function(e) {
          $(e.target).parent('li').remove();
          saveTodos();
          return false;
        });

        loadTodos();
        checkHash();
      });

      function checkHash() {
        var hash = new String(location.hash).replace(/^#/, '')
        if(hash != '') {
          var todo = JSON.parse(hash)
          createTodo(todo[0], false, todo[1]);
          location.hash = '';
        }
      }

      $(window).bind('hashchange', checkHash);

      function buildTodo(title, done, loc) {
        return "<li><input type='checkbox' " + (done ? "checked='checked'" : '') + "/> <a href='#' class='title'>" + title + "</a> <a href='#' class='delete right'>x</a> <br/><span class='loc'>" + (loc || '') + "</span></li>";
      }

      function createTodo(title, done, loc) {
      	var title = $('.todoInput').val();
        $('#list').append(buildTodo(title, !!done, loc || currentLoc));
        $('.todoInput').attr("value","");
        saveTodos();
      }

      function loadTodos() {
        if(localStorage['todos']) {
          var todos = JSON.parse(localStorage['todos']);
          for(var i=0; i<todos.length; i++) {
            var todo = todos[i];
            $('#list').append(buildTodo(todo.title, todo.done, todo.loc));
          };
        }
      }

      function saveTodos() {
        var todos = []
        var lis = $('#list li')
        for(var i=0; i<lis.length; i++) {
          var li = $(lis[i]);
          todos.push({
            title: li.find('.title').html(),
            done:  li.find('input').prop('checked'),
            loc:   li.find('.loc').html()
          });
        };
        localStorage['todos'] = JSON.stringify(todos);
      }
				
	},

	appHTML : '<div id="toDoScreen" class="deviceApplication">' +
				'<div class="infoBar">' +
					'<ul class="notification"></ul>' +
					'<ul class="systemInfo">' +
						'<li class="time"></li>' +
						'<li class="battery">Akku</li>' +
						'<li class="network">Empfang</li>' +
					'</ul>' +
				'</div>' +
				'<div class="appArea">' +
					'<div id="todos">' +
						'<input class="todoInput" placeholder="Ich möchte..." type="text"><span class="addItem">+</span></input>' +
						
      					'<ul id="list"></ul>' +
    				'</div>' +
				'</div>' +
			'</div>'
	
};
