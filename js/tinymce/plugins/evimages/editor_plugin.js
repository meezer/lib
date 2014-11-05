(function() {

	tinymce.PluginManager.requireLangPack('evimages');

	tinymce.create('tinymce.plugins.evimagesPlugin', {
		
		init : function(ed, url) {

			ed.addCommand('evimages', function() {
				var unixtime_ms = new Date().getTime();
				ed.windowManager.open({
					file : '/showUploadDialog' + unixtime_ms,
					width : 300 + parseInt(ed.getLang('evimages.delta_width', 0)),
					height : 120 + parseInt(ed.getLang('evimages.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url
				});
			});

			ed.addButton('evimages', {
				title : 'evimages.desc',
				cmd : 'evimages',
				image : url + '/img/evimages-bw.gif'
			});
			
			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('evimages', n.nodeName == 'IMG');
			});

		},
		createControl : function(n, cm) {
			return null;
		},
		getInfo : function() {
			return {
				author : 'EvanLyu'
			};
		}
	});
	tinymce.PluginManager.add('evimages', tinymce.plugins.evimagesPlugin);
})();
