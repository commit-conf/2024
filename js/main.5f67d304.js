(self.webpackChunkcom_commit_conf_2024=self.webpackChunkcom_commit_conf_2024||[]).push([[179],{494:function(e,t,o){"use strict";o(519),o(500),o(595)},595:function(){var e=document.querySelectorAll(".random-entry"),t=Math.floor(Math.random()*e.length);Array.prototype.forEach.call(e,(function(e,o){o===t?e.classList.remove("hide"):e.classList.add("hide")}))},500:function(){var e=document.querySelector(".topbar-hamburger"),t=(document.querySelector(".topbar-dropdown-content"),document.querySelector(".topbar-dropdown"));t&&e&&(t.classList.remove("topbar-dropdown"),t.classList.add("topbar-dropdown-js"),e.addEventListener("click",(function(e){t.classList.toggle("active"),e.stopPropagation()})),window.addEventListener("click",(function(){t.classList.remove("active")})))},519:function(){var e=document.querySelectorAll(".video-link");Array.prototype.forEach.call(e,(function(e){e.addEventListener("click",(function(e){try{var t=e.currentTarget;if(t&&!t.classList.contains("playing")){var o=null===t||void 0===t?void 0:t.dataset,r=o.id,c=o.title,a='<iframe title="'.concat(c,'" class="video-iframe"  src="https://www.youtube-nocookie.com/embed/').concat(r,'?autoplay=1&modestbranding=1&rel=0&wmode=transparent" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');t.classList.add("playing"),t.innerHTML=a}e.preventDefault()}catch(e){}}))}))}},function(e){var t;t=494,e(e.s=t)}]);