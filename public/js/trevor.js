$(function(){
SirTrevor.DEBUG = true;
SirTrevor.LANGUAGE = "en";
SirTrevor.setBlockOptions("Text", {
	onBlockRender: function() {
	console.log("Text block rendered");
	}
});
window.editor = new SirTrevor.Editor({
	el: $('.sir-trevor'),
	blockTypes: [
	"Heading",
	"Text",
	"Image",
	]
});
$('form').bind('submit', function(){
	return false;
});
});