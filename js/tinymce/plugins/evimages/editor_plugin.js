(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('evimages');

	tinymce.create('tinymce.plugins.evimagesPlugin', {
		
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
			ed.addCommand('evimages', function() {
				var unixtime_ms = new Date().getTime();
				ed.windowManager.open({
					file : url + '/dialog.htm?z' + unixtime_ms,
					width : 330 + parseInt(ed.getLang('evimages.delta_width', 0)),
					height : 155 + parseInt(ed.getLang('evimages.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url // Plugin absolute URL
				});
			});

			// Register example button
			ed.addButton('evimages', {
				title : 'evimages.desc',
				cmd : 'evimages',
				image : url + '/img/evimages-bw.gif'
			});

			// Add a node change handler, selects the button in the UI when a image is selected
			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('evimages', n.nodeName == 'IMG');
			});
		},

		/**
		 * Creates control instances based in the incomming name. This method is normally not
		 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
		 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
		 * method can be used to create those.
		 *
		 * @param {String} n Name of the control to create.
		 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
		 * @return {tinymce.ui.Control} New control instance or null if no control was created.
		 */
		createControl : function(n, cm) {
			return null;
		},
		getInfo : function() {
			return {
				author : 'Viktor Kuzhelnyi'
			};
		}
	});
	tinymce.PluginManager.add('evimages', tinymce.plugins.evimagesPlugin);
})();
