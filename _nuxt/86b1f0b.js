(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3],{501:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{labels:["January","February","March","April","May","June"]}},computed:{chartData:function(){return{labels:this.labels,datasets:[{label:"My First dataset",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[0,10,5,2,20,30,45]}]}},chartConfig:function(){return{type:"line",data:this.chartData,options:{}}}},mounted:function(){console.log("chart",this.$refs.myChart),console.log("char",this.chartConfig);new Chart(document.getElementById("myChart"),this.chartConfig)}},o=r(62),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("chart")]),e._v(" "),r("canvas",{attrs:{id:"myChart"}})])}],!1,null,null,null);t.default=component.exports},516:function(e,t,r){"use strict";r.r(t);var n=r(11),o=(r(49),r(489)),c=r(501),l={components:{message:o.default,chart:c.default},data:function(){return{message:"",keyword:"",items:[],trendBody:{startDate:"2021-02-01",endDate:"2022-04-01",timeUnit:"month",keywordGroups:[{groupName:"코로나",keywords:["코로나","자가키트","확진자"]},{groupName:"영어",keywords:["영어","english"]}],device:"pc",ages:["1","2"],gender:"f"},trend:{}}},computed:{trendTitle:function(){return this.trend.title||""},trendKeyword:function(){return this.trend.keywords||[]},trendData:function(){return this.trend.data||[]}},methods:{getNaverSearch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("start naver search"),r={keyword:e.keyword},t.next=4,e.$axios.$get("/naverSearch/search/blog",{params:r});case 4:n=t.sent,e.items=n.items,console.log("result",n);case 7:case"end":return t.stop()}}),t)})))()},getNaverTrend:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("start naver trend"),r={keyword:e.trendBody},t.next=4,e.$axios.$post("/naverSearch/search/trend",r);case 4:n=t.sent,e.trend=n.results[0];case 6:case"end":return t.stop()}}),t)})))()}}},d=r(62),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("OpenApi")]),e._v(" "),r("message"),e._v(" "),r("hr"),e._v(" "),r("h2",[e._v("NaverSearch")]),e._v(" "),r("button",{on:{click:e.getNaverSearch}},[e._v("click")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),e._v(" "),r("hr"),e._v(" "),r("ul",{staticClass:"naverSearchResult"},e._l(e.items,(function(t,i){return r("li",{key:"result_"+i},[r("span",{domProps:{innerHTML:e._s(t.title)}})])})),0),e._v(" "),r("hr"),e._v(" "),r("h2",[e._v("NaverTrend")]),e._v(" "),r("div",[e._v("localhost:3000에서 해야됨")]),e._v(" "),r("button",{on:{click:e.getNaverTrend}},[e._v("trend")]),e._v(" "),e.trend?r("ul",{staticClass:"naverSearchTrend"},[r("li",[e._v(e._s(e.trendTitle))]),e._v(" "),r("li",[e._v(e._s(e.trendKeyword))]),e._v(" "),e._l(e.trendData,(function(data){return r("li",{key:data.period},[e._v("\n      "+e._s(data.period)+"//"+e._s(data.ratio)+"\n    ")])}))],2):e._e(),e._v(" "),r("chart")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Message:r(489).default,Chart:r(501).default})}}]);