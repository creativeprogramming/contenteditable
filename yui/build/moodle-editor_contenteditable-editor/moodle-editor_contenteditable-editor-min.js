YUI.add("moodle-editor_contenteditable-editor",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)};n.NAME="editor_contenteditable",n.ATTRS={},e.extend(n,e.Base,{initializer:function(t){var n=e.one("#"+t.elementid),r=e.Node.create('<div id="'+t.elementid+'editable" '+'contenteditable="true" '+'spellcheck="true" '+'class="editor_contenteditable"/>'),i="",s=e.Node.create('<div class="editor_contenteditable_toolbar" id="'+t.elementid+'_toolbar"/>'),o=e.io(t.content_css,{sync:!0}),u=o.responseText.indexOf("font:");u&&(i=o.responseText.substring(u+"font:".length,o.responseText.length-1),r.setStyle("font",i)),r.setStyle("min-height",1.2*(n.getAttribute("rows")-1)+"em"),r.append(n.get("value")),n.get("parentNode").insert(s,n),n.get("parentNode").insert(r,n),n.hide(),r.on("blur",function(){n.set("value",r.getHTML())})},add_separator:function(e){}}),M.editor_contenteditable=M.editor_contenteditable||{},M.editor_contenteditable.init=function(e,t){return new n(e,t)}},"@VERSION@",{requires:["node","io"]});