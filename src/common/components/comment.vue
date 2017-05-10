<template>
	<div id="COMMENT" ref="COMMENT">
		<div id="SOHUCS" style="margin: 30px 0"></div>
	</div>
</template>
<script type="text/javascript"> 
export default {
	mounted () {
		this.changyan();   
	},
	methods: {
		changyan () {
		    var appid = 'cyt0hsttp';
		    var conf = 'prod_6c3e528232e8229a5232d4ca97c27b92'; 
		    var width = window.innerWidth || document.documentElement.clientWidth; 
		    // if (width < 960) { 
		    // 	window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=cyt0hsttp' + appid + '&conf=' + conf + '"><\/script>'); 
		    // } else { 
		    	let _self = this;
	    		var loadJs = function (d,a) {
	    			var c = _self.$refs.COMMENT;
	    			var b = document.createElement("script");
	    			b.setAttribute("type","text/javascript");
	    			b.setAttribute("charset","UTF-8");
	    			b.setAttribute("src",d);
	    			if (typeof a === "function") {
	    				if (window.attachEvent) {
	    					b.onreadystatechange = function () {
	    						var e=b.readyState;
	    						if (e==="loaded"||e==="complete") {
	    							b.onreadystatechange=null;
	    							a()
	    						}
	    					}
	    				} else {
	    					b.onload=a
	    				}
	    			}
	    			c.appendChild(b)
	    		};
	    		loadJs("http://changyan.sohu.com/upload/changyan.js",function () {
	    				window.changyan.api.config({
	    					appid: appid,
	    					conf: conf
	    				}
	    			)
	    		}); 
	    	// }
		}
	}
};
    </script>