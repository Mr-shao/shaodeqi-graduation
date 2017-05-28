<template>
	<div id="COMMENT" ref="COMMENT">
		<div id="SOHUCS" style="margin: 30px 0"></div>
	</div>
</template>
<script type="text/javascript">
export default {
	mounted () {
		this.cyComment();
	},
	methods: {
		cyComment () {
		    var appid = 'cyt0hsttp';
		    var conf = 'prod_6c3e528232e8229a5232d4ca97c27b92'; 
		    var width = window.innerWidth || document.documentElement.clientWidth; 
		    // if (width < 960) { 
		    // 	window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=cyt0hsttp' + appid + '&conf=' + conf + '"><\/script>'); 
		    // } else { 
		    	let _self = this;
	    		var loadJs = function (d, a) {
	    			var c = _self.$refs.COMMENT;
	    			var b = document.createElement("script");
	    			b.setAttribute("type", "text/javascript");
	    			b.setAttribute("charset", "UTF-8");
	    			b.setAttribute("src", d);
	    			if (typeof a === "function") {
	    				if (window.attachEvent) {
	    					b.onreadystatechange = function () {
	    						var e = b.readyState;
	    						if (e === "loaded" || e === "complete") {
	    							b.onreadystatechange=null;
	    							a();
	    						}
	    					}
	    				} else {
	    					b.onload = a;
	    				}
	    			}
	    			c.appendChild(b)
	    		};
	    		loadJs("./dist/resource/js/changyan.js", function () {
	    				window.changyan.api.config({
	    					appid: appid,
	    					conf: conf
	    				});
	    		}); 
	    	// }
		}, 
		changyan () {
			//畅言滤重
			// if (window.changyan !== undefined || window.cyan !== undefined) {
			//     return;
			// }
			var createNs = function () {
			    if (window.changyan !== undefined) {
			        return;
			    } else {
			        window.changyan = {};
			        window.changyan.api = {};
			        window.changyan.api.config = function (conf) {
			            window.changyan.api.tmpIsvPageConfig = conf;
			        };
			        window.changyan.api.ready = function (fn) {
			            window.changyan.api.tmpHandles = window.changyan.api.tmpHandles || [];
			            window.changyan.api.tmpHandles.push(fn);
			        };
			        window.changyan.ready = function (fn) {
			          if (window.changyan.rendered) {
			            fn && fn();
			          } else {
			            window.changyan.tmpHandles = window.changyan.tmpHandles || [];
			            window.changyan.tmpHandles.push(fn);
			          }
			        }
			    }
			};

			var createMobileNs = function () {
			    if (window.cyan) {
			        return;
			    }

			    window.cyan = {};
			    window.cyan.api = {};
			    window.cyan.api.ready = function (fn) {
			        window.cyan.api.tmpHandles = window.cyan.api.tmpHandles || [];
			        window.cyan.api.tmpHandles.push(fn);
			    };
			};


			var loadVersionJs = function () {
			    var loadJs = function (src, fun) {
			        var head = document.getElementsByTagName('head')[0] || document.head || document.documentElement;

			        var script = document.createElement('script');
			        script.setAttribute('type', 'text/javascript');
			        script.setAttribute('charset', 'UTF-8');
			        script.setAttribute('src', src);

			        if (typeof fun === 'function') {
			            if (window.attachEvent) {
			                script.onreadystatechange = function () {
			                    var r = script.readyState;
			                    if (r === 'loaded' || r === 'complete') {
			                        script.onreadystatechange = null;
			                        fun();
			                    }
			                };
			            } else {
			                script.onload = fun;
			            }
			        }

			        head.appendChild(script);
			    };

			    var ver = +new Date() + window.Math.random().toFixed(16);
			    var protocol = (('https:' == window.document.location.protocol) ? "https://" : "http://");
			    var url = protocol + 'changyan.itc.cn/upload/version-v3.js?' + ver;
			    loadJs(url);
			};
			createNs();
			createMobileNs();
			loadVersionJs();
		}
	}
};
</script>