(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{78:function(t,n,e){"use strict";function i(t){return{name:t,value:1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,delta:0,entries:[],id:d(),isFinal:!1}}function a(t,n){try{var e;if(PerformanceObserver.supportedEntryTypes.includes(t))return(e=new PerformanceObserver((function(t){return t.getEntries().map(n)}))).observe({type:t,buffered:!0}),e}catch(t){}}function r(t){p=!t.persisted}function o(t,n,e,i){var a;return function(){e&&n.isFinal&&e.disconnect(),0<=n.value&&(i||n.isFinal||"hidden"===document.visibilityState)&&(n.delta=n.value-(a||0),(n.delta||n.isFinal||void 0===a)&&(t(n),a=n.value))}}function u(){return void 0===s&&(s="hidden"===document.visibilityState?0:1/0,m((function(t){return t=t.timeStamp,s=t}),!0)),{get timeStamp(){return s}}}e.r(n),e.d(n,"getCLS",(function(){return v})),e.d(n,"getFCP",(function(){return g})),e.d(n,"getFID",(function(){return h})),e.d(n,"getLCP",(function(){return S})),e.d(n,"getTTFB",(function(){return y}));var s,c,d=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},p=!1,f=!1,l=function(){addEventListener("pagehide",r),addEventListener("beforeunload",(function(){}))},m=function(t){var n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];f||(l(),f=!0),addEventListener("visibilitychange",(function(n){n=n.timeStamp,"hidden"===document.visibilityState&&t({timeStamp:n,isUnloading:p})}),{capture:!0,once:n})},v=function(t){function n(t){t.hadRecentInput||(u.value+=t.value,u.entries.push(t),e())}var e,r=1<arguments.length&&void 0!==arguments[1]&&arguments[1],u=i("CLS",0),s=a("layout-shift",n);s&&(e=o(t,u,s,r),m((function(t){t=t.isUnloading,s.takeRecords().map(n),t&&(u.isFinal=!0),e()})))},g=function(t){var n,e=i("FCP"),r=u(),s=a("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<r.timeStamp&&(e.value=t.startTime,e.isFinal=!0,e.entries.push(t),n())}));s&&(n=o(t,e,s))},h=function(t){function n(t){t.startTime<r.timeStamp&&(e.value=t.processingStart-t.startTime,e.entries.push(t),e.isFinal=!0,c())}var e=i("FID"),r=u(),s=a("first-input",n),c=o(t,e,s);s?m((function(){s.takeRecords().map(n),s.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,n){n.timeStamp<r.timeStamp&&(e.value=t,e.isFinal=!0,e.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+t}],c())}))},S=function(t){function n(t){var n=t.startTime;n<d.timeStamp?(s.value=n,s.entries.push(t)):s.isFinal=!0,e()}var e,r=1<arguments.length&&void 0!==arguments[1]&&arguments[1],s=i("LCP"),d=u(),p=a("largest-contentful-paint",n);p&&(e=o(t,s,p,r),t=function(){s.isFinal||(p.takeRecords().map(n),s.isFinal=!0,e())},(c=c||new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(n){addEventListener(n,t,{once:!0,passive:!0,capture:!0})}))}))).then(t),m(t,!0))},y=function(t){var n=i("TTFB"),e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t,n=performance.timing,e={entryType:"navigation",startTime:0};for(t in n)"navigationStart"!==t&&"toJSON"!==t&&(e[t]=Math.max(n[t]-n.navigationStart,0));return e}();n.value=n.delta=e.responseStart,n.entries=[e],n.isFinal=!0,t(n)}catch(e){}};"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}}}]);