webpackJsonp([1],{"/zY3":function(e,t){},"5yG7":function(e,t){},"9SCy":function(e,t){},"LS+m":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var e=this.$createElement;return(this._self._c||e)("router-view")},staticRenderFns:[]};var o=a("VU/8")({name:"App"},n,!1,function(e){a("dtir")},null,null).exports,i=a("/ocq"),r=a("pFYg"),l=a.n(r),c=function(e){var t=void 0,a=void 0,s=void 0,n=void 0,o=void 0,i=void 0;function r(i){s=i.targetTouches[0].clientY,e.scrollTop=t+a-s,o=s-n,n=s}function l(){e.removeEventListener("touchmove",r,!1),document.removeEventListener("touchend",l,!1);var t,n,c=void 0;c=Math.abs(o),n=(t=s-a)<0?1:-1,Math.abs(t)>5&&(i&&clearInterval(i),i=setInterval(function(){(c*=.8)<1&&clearInterval(i),e.scrollTop+=c*n},16.6))}e.addEventListener("wheel",function(e){e.preventDefault(),this.scrollTop+=e.deltaY},{passive:!1}),e.addEventListener("touchstart",function(o){a=o.targetTouches[0].clientY,s=a,n=a,t=e.scrollTop,e.addEventListener("touchmove",r,!1),document.addEventListener("touchend",l,!1)},!1)},d={nav:{home:["首页","home","index","/"],about:["个人","about","me","关于"],works:["作品","works"],blog:["博客","blog","谈理想","谈人生"],album:["相册","album","photo","picture","相片"],help:["帮助","-h","-?","--help","help"],clear:["清除","clear","cls"]},getCommonNav:function(){var e={};for(var t in this.nav)"help"!==t&&"clear"!==t&&(e[t]=this.nav[t]);return e},res:{count:0,prev:0},AI:[{user:/早|(早上|晚上|你|中午|下午)\s*[好早]/i,sys:["嗯","嗯嗯"]},{user:/(这是?)*(怎么|如何|咋个?)[做作]到?的/,sys:["一切都是transform，了解一下"]},{user:/怎么称呼|[你您]?叫什么|报上名来|姓[啥甚]?名[啥甚]?|[你您]?的?(真名|名字)|你是[?？谁]/,sys:["你猜","晋曲","令狐长老","这不重要","Rudy"]},{user:/男[的生人]女[的生人]|是男是女|性别|你是[女男](的|生|孩子?|人)吗/,sys:["我是大叔","为什么会问这么傻的问题？","男人","Boy","Man","Young man","你不会是来找茬的吧？"]},{user:/[喝呵][,，]?([男女]人|基[佬老])$|基[佬老]$/,sys:["呵，垃圾","呵，二狗","呵，基佬"]},{user:/(如何|怎么?样?)(操作|进[入去]|访问)|(进[入去]|访问).{2,}/,sys:["输入“帮助”看看正确指令"]},{user:/毕业于|(哪个|什么)学校|基本信息|(哪年|什么时候)毕业|毕业多久了|什么专业|你?(会|擅长|喜欢玩?|爱好是?|玩)什么|你?有什么技能|你?哪方面比较厉害/,sys:["了解基本信息到我的主页去看吧，输入“主页”","可以输入“主页”到我的主页去看看"]},{user:/(如何|怎么?样?|咋个?)(学好|提高|学习|提升|加强)(代码|js|jquery|javascript|鸡儿屎|前端|后台|ajax|数据|SEO)*/i,sys:["其实很简单，就两步：<br>第一步：早上5点左右起床写代码，<br>第二步：晚上12点还在写代码","这个问题充钱就能解决"]},{user:/[说]?我[\s\S]*?(厉害|腻害|牛[逼BX13]|帅)/i,sys:["喝嘤料","呵呵","三连否","拒绝"]},{user:/(大叔|你|Rudy|令狐长老|大神)?[\s\S]*?(厉害|腻害|牛(逼|B|X|13)|帅|优秀)/i,sys:["这谁都知道","假装谦虚","低调","天生的"]},{user:/我(太|好|真(.{2})?|怎么|为何|咋个?|为啥)(这么)*傻[了吧?？]?/i,sys:["关我什么四？","天生的","未解之谜"]},{user:/(大叔|你|Rudy|令狐长老|大神)?[\s\S]*傻(逼|B|13|X)/i,sys:["系统怀疑素质有问题","你可能是个傻憨龊笨"]},{user:/你是?(怎么|如何|咋个?)[做作]到的/i,sys:["给钱我就说","你猜"]},{user:/然后呢?/,sys:["没有然后","然后就没有然后了"]},{user:/(大叔|你|Rudy|令狐长老|大神)*.*?(几点|什么时候)[睡起]/i,sys:["比狗睡得晚，比鸡起得早","总之比你们这些鸡狗早起晚睡"]},{user:/(睡觉|下班|吃饭|要饭)了?/,sys:["呵，快滚","呵嘤料","还早"]},{user:/加班[吗吧啊?？]/,sys:["不加","打死也不加"]},{user:/加班(,好气|$)/,sys:["奈斯","关我什么四"]},{user:/^好气$/,sys:["气个P标签","关我什么四"]},{user:/^(好的?|ok|嗯嗯?|谢谢?|知道了?|明白|晓得|了解|真的吗?|你?确定[?？]?)/i,sys:["嗯","哦","喔"]},{user:/(爱上?|喜欢|中意)你/,sys:["那你给我钱吧","可惜我只缺钱"]},{user:/爱我[吗吧?？]*/,sys:["呵，可能吗？除非打死我","呵，可能吗？"]},{user:/^(大叔|你|Rudy|令狐(长老)*|大神|长老)$|((大叔|你|Rudy|令狐(长老)*|大神|长老)*在[吗吧啊?？]*)/,sys:["嗯哼","哦嚯","喝嘤料","不在"]}],respone:function(e){var t,a=void 0;for(var s in e=e.trim().toLowerCase(),t=this.AI.length,a=0,this.nav)if(this.nav[s].includes(e))return[s];for(;a<t;a++)if(this.AI[a].user.test(e)){var n=this.AI[a].sys.length,o=Math.round(Math.random()*n-.5);return"[令狐长老]: "+this.AI[a].sys[o]}return"[系统回复 ~]: 你说啥？"}},u=void 0,v=void 0;u=[],v=0;var m={name:"command",data:function(){return{helpText:d.nav.help.join(" &nbsp; |  &nbsp; "),input:document.createElement("input")}},mounted:function(){var e=this;function t(){var t=document.createElement("div"),a=document.createElement("span"),s=e.input.value;if(t.className="command-line-user",a.className="command-head",a.innerText="[Guest ~]: ",e.input.parentNode&&(e.input.parentNode.insertBefore(document.createTextNode(s),e.input),s)){var n=document.createElement("div"),o=d.respone(s);if(n.className="command-sys","object"===(void 0===o?"undefined":l()(o)))switch(o[0]){case"help":n.innerHTML=e.help();break;case"clear":e.clear();break;default:e.$router.push(o[0])}else n.innerHTML=o;e.$el.appendChild(n),u.includes(s)||(u.push(s),v=u.length-1)}t.appendChild(a),t.appendChild(e.input),e.$el.appendChild(t),e.input.style.width=t.offsetWidth-a.offsetWidth-12+"px",e.input.value="",e.$el.scrollTop=e.$el.scrollHeight,e.input.focus()}this.input.className="command-input",t(),document.addEventListener("keydown",function(a){switch(a.key){case"Enter":t();break;case"ArrowUp":v>0&&v--,e.input.value=u[v];break;case"ArrowDown":u[v+1]&&(e.input.value=u[++v])}}),c(this.$el),e.$el.addEventListener("click",function(){e.input.focus()})},methods:{clear:function(){u=[],v=0,this.$el.innerHTML=""},help:function(){var e="";for(var t in d.nav)e+=d.nav[t][0]+"："+d.nav[t].join("  &nbsp; |  &nbsp; ")+"<br>";return e}}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"command"},[t("div",{staticStyle:{"font-size":"14px","margin-bottom":"1em"}},[this._v("\n    欢迎进入老夫的互动系统，可与老夫进行简单的交流，想进入其他页面必须输入正确的指令。查看全部指令可输入："),t("br"),this._v(" "),t("div",{staticClass:"command-sys"},[t("span",{domProps:{innerHTML:this._s(this.helpText)}}),t("br"),t("br"),this._v("\n      注意：不是输入上面的一整串，而是竖线之间所有单词的任意一个。"),t("br"),this._v("\n      举个例：输入“帮助”后Enter。 来试一哈\n    ")])])])},staticRenderFns:[]};var p={name:"keyboard",data:function(){return{keys:[[{html:"Esc",code:"Escape"},{html:"F1",code:"F1"},{html:"F2",code:"F2"},{html:"F3",code:"F3"},{html:"F4",code:"F4"},{html:"F5",code:"F5"},{html:"F6",code:"F6"},{html:"F7",code:"F7"},{html:"F8",code:"F8"},{html:"F9",code:"F9"},{html:"F10",code:"F10"},{html:"F11",code:"F11"},{html:"F12",code:"F12"},{html:"Delete",code:"Delete"}],[{html:"~<br>`",code:"Backquote"},{html:"!<br>1",code:"Digit1"},{html:"@<br>2",code:"Digit2"},{html:"#<br>3",code:"Digit3"},{html:"$<br>4",code:"Digit4"},{html:"%<br>5",code:"Digit5"},{html:"^<br>6",code:"Digit6"},{html:"&<br>7",code:"Digit7"},{html:"*<br>8",code:"Digit8"},{html:"(<br>9",code:"Digit9"},{html:")<br>0",code:"Digit0"},{html:"—<br>-",code:"Minus"},{html:"+<br>=",code:"Equal"},{html:"Backspace",code:"Backspace"}],[{html:"Tab",code:"Tab"},{html:"Q",code:"KeyQ"},{html:"W",code:"KeyW"},{html:"E",code:"KeyE"},{html:"R",code:"KeyR"},{html:"T",code:"KeyT"},{html:"Y",code:"KeyY"},{html:"U",code:"KeyU"},{html:"I",code:"KeyI"},{html:"O",code:"KeyO"},{html:"P",code:"KeyP"},{html:"{<br>[",code:"BracketLeft"},{html:"}<br>]",code:"BracketRight"},{html:"|<br>\\",code:"Backslash"}],[{html:"CapsLock",code:"CapsLock"},{html:"A",code:"KeyA"},{html:"S",code:"KeyS"},{html:"D",code:"KeyD"},{html:"F",code:"KeyF"},{html:"G",code:"KeyG"},{html:"H",code:"KeyH"},{html:"J",code:"KeyJ"},{html:"K",code:"KeyK"},{html:"L",code:"KeyL"},{html:":<br>;",code:"Semicolon"},{html:"\"<br>'",code:"Quote"},{html:"Enter",code:"Enter"}],[{html:"Shift",code:"ShiftLeft"},{html:"Z",code:"KeyZ"},{html:"X",code:"KeyX"},{html:"C",code:"KeyC"},{html:"V",code:"KeyV"},{html:"B",code:"KeyB"},{html:"N",code:"KeyN"},{html:"M",code:"KeyM"},{html:"&lt;<br>,",code:"Comma"},{html:"&gt;<br>.",code:"Period"},{html:"?<br>/",code:"Slash"},{html:"Shift",code:"ShiftRight"}],[{html:"Ctrl",code:"ControlLeft"},{html:"Fn",code:"Fn"},{html:"Win",code:"MetaLeft"},{html:"Alt",code:"AltLeft"},{html:"Space",code:"Space"},{html:"Alt",code:"AltRight"},{html:"PrtSc",code:"PrintScreen"},{html:"Win",code:"MetaRight"},{html:"Ctrl",code:"ControlRight"}]]}},mounted:function(){var e=void 0,t=void 0,a=void 0,s=void 0;function n(){this.classList.remove("active"),this.style.color=""}e={},t=this.$el.querySelectorAll("[data-code]"),a=/^F([1-4]|[6-9]|11)$/i;for(var o=0,i=t.length;o<i;o++)e[t[o].dataset.code]=t[o],t[o].addEventListener("animationend",n,!1);t=null,document.addEventListener("keydown",function(t){a.test(t.code)&&t.preventDefault(),e[t.code]&&(e[t.code].classList.remove("active"),clearTimeout(s),s=setTimeout(function(){clearTimeout(s),e[t.code].classList.add("active")},20))})}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"keyboard"},e._l(e.keys,function(t,s){return a("div",{key:s,staticClass:"keyboard-row"},[e._l(t,function(t){return[a("div",{key:t.code,staticClass:"keyboard-item",class:"keyboard-"+t.code,attrs:{"data-code":t.code}},[a("div",{staticClass:"keyboard-content",domProps:{innerHTML:e._s(t.html)}})])]})],2)}))},staticRenderFns:[]};var b={name:"home",components:{commad:a("VU/8")(m,h,!1,function(e){a("mi/6")},null,null).exports,keyboard:a("VU/8")(p,f,!1,function(e){a("nEvJ")},null,null).exports}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("div",{staticClass:"computer"},[t("div",{staticClass:"computer-cover"},[this._m(0),this._v(" "),t("div",{staticClass:"computer-screen"},[t("commad")],1)]),this._v(" "),t("div",{staticClass:"computer-keyboard"},[t("keyboard")],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"computer-back-cover"},[t("img",{staticClass:"logo",attrs:{src:a("iHha"),alt:""}}),this._v(" "),t("p",[this._v("RUDY")])])}]};var g,_=a("VU/8")(b,y,!1,function(e){a("5yG7")},null,null).exports,C=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=0,n=0,o=0,i=0,r=0,l={passive:!1},c=void 0,d="scrollTop",u="clientY",v=a.length,m=void 0;function h(t){t.preventDefault(),n=t[u],r=n-i,i=n,e[d]=o+(s-n)}function p(){document.removeEventListener("mousemove",h,l),document.removeEventListener("mouseup",p),f(Math.abs(r),n-s,n-s<0?1:-1)}function f(t,a,s){if(Math.abs(a)>5){cancelAnimationFrame(c),c=requestAnimationFrame(function a(){t*=.8,cancelAnimationFrame(c),c=requestAnimationFrame(a),t<1&&cancelAnimationFrame(c),e[d]+=t*s})}}t&&"x"===t.toLowerCase()&&(d="scrollLeft",u="clientX"),e.addEventListener("mousedown",function(t){for(m=0;m<v;m++)if(t[a[m]])return!1;t.preventDefault(),s=t[u],o=e[d],i=s,document.addEventListener("mousemove",h,l),document.addEventListener("mouseup",p)},l),e.addEventListener("mousewheel",function(t){for(m=0;m<v;m++)if(t[a[m]])return!1;var s=t.wheelDelta<0?1:-1;e[d]+=10*s,f(10,6,s)})},k={mask:(g=document.createElement("div"),g.setAttribute("style","position: fixed;width: 100vw;height: 100vh;left: 0;top: 0;z-index: 999;"),g),data:{nav:d.getCommonNav(),chartColor:[{color:"rgba(111,174,9,.5)",text:"程序编程语言及框架"},{color:"rgba(211, 108, 16, 0.5)",text:"UI、工程设计及动画软件应用"},{color:"rgba(96, 43, 161, 0.5)",text:"业余爱好"}],skills:[{type:0,name:"javascript",value:90,detail:"前端任意需求，封装库、写框架、写web游戏，可实现ES6和ES5互转。\n        陌生框架，扫几眼就能用，并能猜测其大概构架和原理，可修改和优化源码。\n        90%的程度值是针对web前端而言的，其余的10%代表冷门、偏门的对象和API。\n        然而，如果非把webGL算在内，则降为70%。"},{type:0,name:"html",value:96,detail:"常用的都没什么技术含量，除非算上SEO、svg、XML。SEO我虽不深入，但因为尝试过写简单的爬虫，心中有数。svg绘图基本掌握，动画方面稍弱。XML则用得不多。"},{type:0,name:"css",value:94,detail:"任意布局均可实现，并且知道多种方法及其性能优劣和兼容性。比如关于浮动、文档流、动画、3D等。"},{type:0,name:"vue",value:79,detail:"多种方法实现任意需求，抽象复用组件，可以在不用vuex的情况模拟store功能。\n        事实上不止vue，之所以只列出vue，是想以它代表主流框架，比如angular、微信小程序、react等。\n        解释一下：vue、angular、微信小程序虽不是一个妈生的，但理念和用法的相似度很高，只要会其中一个，其他的分分钟就能够想得通。\n        只有react与其他几个的理念不同，react是函数式创建虚拟DOM输出UI，全程js思维，所以又回到了对js（尤其ES6）的熟悉程度。\n        可见，学好原生如同练就一双火眼金睛，框架都是小妖精。"},{type:0,name:"bootstrap",value:86,detail:"所有UI框架没有什么难度，如layui、elementUI、amazeUI、mui等亦同理。"},{type:0,name:"nodejs",value:76,detail:"写接口，IO处理，数据库增删改查，WebSockect图文与视频直播系统，包括结合ffmpeg实现视频切片点播和直播。"},{type:0,name:"php",value:78,detail:"写接口，封装常用类，数据库操作等。我认为是最容易上手和理解的后端语言，我怀疑ES6似乎就是模仿php。"},{type:0,name:"mysql",value:81,detail:"数据库语句并不多，因它不需要也不宜处理过多或过于复杂的逻辑，所以几乎所有的语法都会，此外，看了Oracle，感觉语法都几乎一样，其他的数据库估计相差不远。"},{type:0,name:"java",value:68,detail:"java是标准而舒服的面向对象编程的语言，掌握得差不多了，包括内存机制。\n        java对js的面向对象编程方面帮助极大，尤其关于类的三大特性以及静态属性/方法、原型链属性/方法、私有属性/方法等方面的关系和内存机制。\n        再加上看过C++的入门，对内存有更深的了解，还有所谓的指针，其实就是一串16进制的地址，这就更容易明白java或js甚至其他语言的指针和对象实体的存在关系。\n        由于缺少java方面更多的实战，就68%吧。"},{type:0,name:"node-webkit",value:66,detail:"会nodejs、js、html、css基本也就会node-webkit（其简称是nwjs）了，另有比较多人用的electron也一样，都是这些组合，只是构建APP的方式不同而已。\n        用它完全是为了结合ffmpeg命令写一个媒体处理软件，就是作品中的RMedia。\n        对于写软件尤其移动平台软件，不建议用，因为nwjs、electron打包都很大，而用QT最适合。"},{type:0,name:"actionscript",value:87,detail:"被淘汰的基于flash的脚本语言，是我最早掌握的语言，刚学完，html5时代就来了。不过，针对IE6、7、8的兼容性，曾用到它来处理播放器以及批量上传功能。"},{type:1,name:"photoshop",value:98,detail:"ps是我惟一永远不会忘掉怎么用的软件，任意需求必能满足，并且可以全程脱离工具栏、菜单栏，直接快捷键操作，一种效果至少可以用三种方式实现。\n        其实本想直接给100%的，最后留2%作为退路。\n        如果只单纯谈使用，还不足以如此自信，但涉及容差、阈值、色相原理、填充和透明度的区别、混合模式中的各种算法、色彩通道等，\n        我敢说几乎没有UI设计师真正的通透明白，大多数都是凭感觉调试和使用，达到目的即止。"},{type:1,name:"AE",value:68,detail:"AE功能太多，而且大多数都是基于插件的运用。68%是对基本动画实现、表达式的书写、图形动画、过渡等功能和一些常用抠像、骨骼、灯光、粒子系统、仿真系统等插件的掌握的评估值。"},{type:1,name:"AI",value:49,detail:"曾经很熟，但时隔多年，只能评估为49%了，基本的绘图还是毫无压力的。"},{type:1,name:"CDr",value:52,detail:"掌握程度与AI一样。"},{type:1,name:"CAD",value:88,detail:"读的景观设计专业，CAD是必修软件，不用多说。"},{type:1,name:"3Dmax",value:89,detail:"除了较为复杂的异形比较难（有些可能不会）之外，基本想要做什么模型都可以完成。动画方面会，只是很少用，因为它对电脑要求高，而且效果并不太好，一般都是结合AE来完成动画。"},{type:1,name:"sketchup",value:92,detail:"虽然景观专业课程里没有它，但它依然是必修的软件，快速建模，效率极高。"},{type:1,name:"vary",value:82,detail:"其实就是灯光和材质的运用，以及对一些光子传递的理解。"},{type:1,name:"lumion",value:65,detail:"做建筑场景的镜头动画和调节材质其实没有难度，基本上就靠素材库和素材的质量。"},{type:1,name:"flash",value:87,detail:"这是最早学的动画软件，如果抛开脚本代码(actionscript)，就非常简单。然而，会用代码了其实也简单。"},{type:2,name:"绘画",value:38,detail:"无法跟专业的比，还是能看出一点功底，毕竟是自学成才。"},{type:2,name:"吉他",value:36,detail:"会弹唱，指弹（即独奏）方面很弱。"},{type:2,name:"编曲",value:12,detail:"知道原理，能玩简单的。"},{type:2,name:"FLstudio",value:58,detail:"到是不难，长时间不玩而已。"},{type:2,name:"cubase",value:26,detail:"比FLstudio难一些，玩得少。"}],career:[{date:"2012年7月",company:"深圳市朗形数码影像传播有限公司",logo:"../../static/company-logo-lx.png",job:"后期设计师",harvest:"这是毕业后的第一份工作，我在效果图部负责后期。效果图部的职位分三个：建模师，渲染师，后期设计师。\n        虽然在学校的时候我的ps能力已经挺强，但在朗形工作后，ps得到了质的提升，自此我从来不敢说自己精通任何知识。"},{date:"2014年11月",company:"深圳市溪林峰园林绿化工程有限公司",logo:"../../static/company-logo-xlf.png",job:"景观设计师",harvest:"由于是个小公司，所以身兼多职，一个项目从测量、绘制CAD、建模、效果、报价预算、施工图绘制、竣工决算等全程一人全包。\n      期间，CAD、3Dmax、Sketchup等软件的运用也大幅度提升，还自学了vary、lumion两个新的。\n      其实，在此公司之前，还进了一个更小的公司（浩峰园林绿化工程有限公司）做了半年，\n      由于待遇太低，年底得还第一笔学校的贷款，后经朋友介绍到溪林峰。"},{date:"2016年3月",company:"香港文汇网",logo:"../../static/company-logo-wwp.png",job:"前端开发工程师",harvest:"2015年底因为朋友创业想让我帮做网站，本来想在凡科网那种建站的，发现太丑，于是决定自学代码，从此一发不可收拾。\n      立刻，2015年12月离职奔回老家闷在家里自学代码三个月不出门，从html5、css3、js到php、mysql，很快把前端到后台的数据来龙去脉都搞通了。\n      2016年春节过完便回深圳投简历，3月收到香港文汇网的面试邀请，经三轮面试后，在香港文汇网新媒体中心入职前端工程师，正式加入前端行业。\n      入行之后，一开始很多同事、同行建议学习使用主流框架，然而我一直把精力放在深入原生，从模拟jquery，到后来看到框架就想看源码了解大概原理的强迫症。\n      然后我惊喜的发现，不管什么框架很快的就能用，看到bug立即猜出问题，可以在必要时修改或优化框架的源码。\n      体悟到原生功底带给我的不只是原生本身，更是给了我一个俯瞰众框架的致高点。\n      两年多，不仅完全通透面向对象编程，还学了nodejs、nwjs、java、ffmpeg、c++等新知识，并学习用它们写桌面应用。"},{date:"2018年9月",company:"期待",job:"大前端 / 全栈 / 全能",harvest:"争取一份荣耀，而不止是待遇。"}]}},E={name:"popup",props:{options:{type:[Object],default:function(){return{mask:"background: rgba(0,0,0,0.6)",wrapper:""}}}},data:function(){return{isShow:!1}},mounted:function(){var e,t=void 0;e=this,(t=this.$el).addEventListener("click",function(a){e.$emit("click"),(a.target===t||a.target.classList.contains("popup-close"))&&e.hide()})},methods:{show:function(e){var t,a=void 0;t=this,a=this.$el,t.$emit("beforeShow"),a.classList.add("popup-show"),t.isShow=!0,a.addEventListener("animationend",function s(){a.removeEventListener("animationend",s,!1),e&&e(),t.$emit("showEnd")},!1)},hide:function(e){var t,a=void 0;t=this,a=this.$el,t.$emit("beforeHide"),a.classList.add("popup-hide"),t.isShow=!1,a.addEventListener("animationend",function s(){a.removeEventListener("animationend",s,!1),t.$emit("hideEnd"),a.classList.remove("popup-hide","popup-show"),e&&e()},!1)}}},L={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"popup",style:this.options.mask},[t("div",{ref:"wrapper",staticClass:"popup-wrapper",style:this.options.wrapper},[this._t("default")],2)])},staticRenderFns:[]};var F={name:"about",components:{popup:a("VU/8")(E,L,!1,function(e){a("/zY3")},null,null).exports},data:function(){return k.data},created:function(){document.body.appendChild(k.mask)},mounted:function(){var e,t=void 0,a=void 0,s=void 0,n=void 0,o=void 0,i=void 0,r=void 0,l=void 0,c=void 0,d=void 0,u=void 0,v=void 0,m=void 0,h=void 0,p=void 0,f=void 0,b=void 0,y=void 0;function g(e){e.altKey&&b&&(h+=20*(e.wheelDelta<0?-1:1),F())}function _(e){e.shiftKey||(a.classList.remove("about-in"),n=e.clientX,o=e.clientY,p[0]=p[1]=0,b=!0,F(),a.addEventListener("mousemove",E))}function E(e){e.shiftKey||(i=e.clientX-n,r=e.clientY-o,p.push(e.clientX),p.shift(),e.ctrlKey?(c=l+i,u=d+r):m=v+i/10,F())}function L(){m+=f*=.96,cancelAnimationFrame(y),y=requestAnimationFrame(L),Math.abs(f)<.1&&cancelAnimationFrame(y),F(),v=m}function F(){s.style.transform="translate3d("+c+"px, "+u+"px, "+h+"vh) rotateY("+m+"deg)"}a=(t=this).$el,s=t.$refs.screens,l=c=d=u=v=m=0,h=-20,p=[0,0],e=["altKey","ctrlKey"],a.classList.add("about-in"),s.addEventListener("animationend",function e(s){this.removeEventListener(s.type,e,!1);document.body.removeChild(k.mask);t.$refs.nav.classList.add("nav-show");t.$refs.helpPopup.show();a.addEventListener("mousewheel",g);a.addEventListener("mousedown",_)},!1),document.addEventListener("mouseup",function(e){if(a.removeEventListener("mousemove",E),e.shiftKey)return;e.ctrlKey?(l=c,d=u,F()):(f=(p[1]-p[0])/10,p[0]>0&&p[1]>0&&(cancelAnimationFrame(y),y=requestAnimationFrame(L)))}),C(t.$refs.screen2,"",e),C(t.$refs.screen3,"",e)},methods:{toggleDetail:function(e){e.shiftKey||e.currentTarget.classList.toggle("chart-detail-show")},toggleHelp:function(){this.$refs.helpPopup.isShow?this.$refs.helpPopup.hide():this.$refs.helpPopup.show()}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("nav",{ref:"nav",staticClass:"nav"},[e._l(e.nav,function(t,s){return a("router-link",{key:s,staticClass:"nav-item",attrs:{to:"/"+s,tag:"a"}},[e._v(e._s(t[0]))])}),e._v(" "),a("a",{staticClass:"nav-item",attrs:{href:"javascript:void(0)"},on:{click:e.toggleHelp}},[e._v("指南")])],2),e._v(" "),a("popup",{ref:"helpPopup"},[a("b",{staticClass:"popup-close fs18"},[e._v("×")]),e._v(" "),a("p",[a("b",[e._v("操作指南：")])]),e._v(" "),a("p",[e._v("这是炫酷的css3 3D："),a("br"),e._v("\n      鼠标左键左右拖动 = 旋转"),a("br"),e._v("\n      ctrl键 + 鼠标左键上下左右拖动 = 移动"),a("br"),e._v("\n      al键 + 鼠标滚轮 = 缩放"),a("br"),e._v("\n      shift键 = 禁止3D变换。\n    ")]),e._v(" "),a("p",[e._v("页面内容溢出时，滚动条虽是隐藏的，但支持上下拖动，也支持滚轮。")])]),e._v(" "),a("div",{ref:"screens",staticClass:"about-screens"},[e._m(0),e._v(" "),a("div",{ref:"screen2",staticClass:"about-screen about-screen-2"},[a("h3",{staticClass:"fs16 about-title"},[e._v("技能篇")]),e._v(" "),a("div",{staticClass:"fs10 chart-header"},[e._v("为了避免使用精通、熟练、掌握、了解等这类模糊概念容易词，以图表试展示不仅更直观，而且结合各项详细描述的话更能准确评估。知识往深了学，便不敢轻易使用“精通”二字。")]),e._v(" "),a("div",{staticClass:"chart fs9"},e._l(e.skills,function(t,s){return a("div",{key:s,staticClass:"chart-line",on:{click:e.toggleDetail}},[a("div",{staticClass:"chart-hd"},[e._v(e._s(t.name))]),e._v(" "),a("div",{staticClass:"chart-td"},[a("span",{staticClass:"chart-progress",attrs:{title:t.name}},[a("i",{staticClass:"chart-progress-value",style:"width:"+t.value+"%;background:"+e.chartColor[t.type].color},[e._v(e._s(t.value)+"%")])]),e._v(" "),a("div",{staticClass:"chart-detail fs10",domProps:{innerHTML:e._s(t.detail)}})]),e._v(" "),e._m(1,!0)])})),e._v(" "),a("div",{staticClass:"chart-legendbar fs10"},e._l(e.chartColor,function(t,s){return a("div",{key:s,staticClass:"chart-legend"},[a("i",{staticClass:"chart-legend-color",style:"background:"+t.color,attrs:{title:t.text}}),e._v(" "),a("span",{staticClass:"chart-legend-text"},[e._v(e._s(t.text))])])}))]),e._v(" "),a("div",{ref:"screen3",staticClass:"about-screen  about-screen-3"},[a("h3",{staticClass:"about-title"},[e._v("工作经历篇")]),e._v(" "),a("section",{staticClass:"career"},e._l(e.career,function(t,s){return a("article",{key:s,staticClass:"career-item"},[a("h4",[a("span",{staticClass:"career-date"},[e._v(e._s(t.date))]),a("span",{staticClass:"career-job"},[e._v(e._s(t.job))])]),e._v(" "),t.logo?a("img",{staticClass:"career-logo",attrs:{src:t.logo}}):a("div",{staticClass:"career-no-logo"},[e._v("?")]),e._v(" "),a("p",{staticClass:"career-company"},[e._v(e._s(t.company))]),e._v(" "),a("p",{staticClass:"career-harvest"},[e._v(e._s(t.harvest))])])}))])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"about-screen about-screen-1"},[t("p",{staticClass:"about-p"},[t("img",{staticClass:"about-face",attrs:{src:"/static/face.png",alt:"Rudy",draggable:"false"}})]),this._v(" "),t("p",{staticClass:"fs18 about-p"},[this._v("我是谁并不重要，重要的是我能做什么。")]),this._v(" "),t("p",{staticClass:"fs18 about-p"},[this._v("It's not important who I am, but what I can do.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"fs18 chart-more"},[t("b",{staticClass:"chart-more-icon"},[this._v("»")])])}]};var $=a("VU/8")(F,w,!1,function(e){a("LS+m")},null,null).exports,A=a("u2KI"),T=a.n(A),x={name:"canvasplayer",props:{src:[String],autoplay:{type:[Boolean],default:!1},loop:{type:[Boolean],default:!1},onplay:{type:[Function],default:function(){}},onpause:{type:[Function],default:function(){}}},beforeCreate:function(){this.$video=document.createElement("video")},created:function(){this.$video.src=this.src,this.$video.autoplay=this.autoplay,this.$video.loop=this.loop},mounted:function(){var e=void 0,t=void 0,a=void 0,s=void 0,n=void 0;function o(){a||(a=e.$video.videoWidth,e.$el.width=a),s||(s=e.$video.videoHeight,e.$el.height=s),n.drawImage(e.$video,0,0),cancelAnimationFrame(t),t=requestAnimationFrame(o)}n=(e=this).$el.getContext("2d"),this.$video.addEventListener("play",function(a){cancelAnimationFrame(t),t=requestAnimationFrame(o),e.onplay(a)}),this.$video.addEventListener("pause",function(a){cancelAnimationFrame(t),e.onpause(a)})},methods:{play:function(){this.$video.play()},pause:function(){this.$video.pause()}}},R={render:function(){var e=this.$createElement;return(this._self._c||e)("canvas")},staticRenderFns:[]};var S={name:"bookcover",components:{canvasplayer:a("VU/8")(x,R,!1,function(e){a("T2aP")},null,null).exports},props:["book"]},j={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.book.video?a("canvasplayer",{staticClass:"cover-img",attrs:{src:e.book.video,autoplay:!0,loop:!0}}):e._e(),e._v(" "),a("img",{staticClass:"cover-img",attrs:{src:e.book.cover,draggable:"false"}}),e._v(" "),a("h1",{staticClass:"cover-title"},[e._v(e._s(e.book.title))]),e._v(" "),a("h2",{staticClass:"cover-subtitle"},[e._v(e._s(e.book.subtitle))])],1)},staticRenderFns:[]};var K={name:"works",components:{bookcover:a("VU/8")(S,j,!1,function(e){a("9SCy")},null,null).exports},data:function(){var e,t,a=void 0,s=void 0;for(e=(a=[{title:"规划设计类",subtitle:"2008在学校",cover:"../../static/works/01/01.jpg"},{title:"效果图类",subtitle:"2012 在朗形",cover:"../../static/works/02/01.jpg"},{title:"景观方案设计类",subtitle:"2014 在溪林峰",cover:"../../static/works/03/01.jpg"},{title:"Web网站网页类",subtitle:"2016 在文汇",cover:"../../static/works/cover01.jpg"},{title:"小游戏H5类",subtitle:"2016 在文汇",video:"../../static/works/v02.mp4"},{title:"桌面APP类",subtitle:"2016 在文汇",video:"../../static/works/v03.mp4"}]).length,s=0;s<e;s++)a[s].rotateY=Math.round(s*(360/e));return{books:a,inits:t=T()({stagePerspective:100,tableRotateX:60,tableTranslateY:0}),status:0,stagePerspective:t.stagePerspective,tableRotateX:t.tableRotateX,tableRotateZ:180,tableTranslateY:t.tableTranslateY,allTransition:"transform 1s",bookScale:.25}},mounted:function(){var e=void 0,t=void 0,a=void 0,s=void 0,n=void 0,o=void 0,i=void 0,r=void 0;function l(o){e.allTransition="none",s=a+(t-o.clientX)/10,n.push(o.clientX),n.shift(),r=!0,e.tableRotateZ=s}function c(){e.allTransition="none",s+=o*=.9,cancelAnimationFrame(i),i=requestAnimationFrame(c),Math.abs(o)<.1&&(cancelAnimationFrame(i),r=!1,e.allTransition="transform 1s"),e.tableRotateZ=s,a=s}e=this,s=a=this.tableRotateZ,n=[0,0],o=0,this.$el.addEventListener("mousedown",function(c){t=c.clientX,n[0]=n[1]=o=0,s=a=e.tableRotateZ,r=!1,cancelAnimationFrame(i),document.addEventListener("mousemove",l)}),document.addEventListener("mouseup",function(){e.allTransition="transform 1s",document.removeEventListener("mousemove",l),o=(n[0]-n[1])/10,n[0]>0&&n[1]>0&&r&&(cancelAnimationFrame(i),i=requestAnimationFrame(c))})},methods:{spineTextFilter:function(e){return e.split("").join("<br>")},readBook:function(e){this.status?(this.status=0,this.tableRotateX=this.inits.tableRotateX,this.tableTranslateY=this.inits.tableTranslateY,this.stagePerspective=this.inits.stagePerspective,this.bookScale=.25):(this.status=1,this.tableRotateX=90,this.tableRotateZ=this.books[e].rotateY-90+360*Math.round(this.tableRotateZ/360),this.tableTranslateY=16,this.stagePerspective=50,this.bookScale=.32)}}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stage flex-center",style:"perspective: "+e.stagePerspective+"vh"},[a("div",{staticClass:"table flex-center",style:{transition:e.allTransition,transform:"translateY("+e.tableTranslateY+"vh) rotateX("+e.tableRotateX+"deg) rotateZ("+e.tableRotateZ+"deg)"}},e._l(e.books,function(t,s){return a("div",{key:s,staticClass:"book",style:{transition:e.allTransition,transform:"scale3d("+e.bookScale+","+e.bookScale+","+e.bookScale+") rotateX(-90deg) rotateY("+t.rotateY+"deg) translate3d("+(e.status?"-100vh":"-80vh")+",-50vh,0)"},on:{dblclick:function(t){e.readBook(s)}}},[a("bookcover",{staticClass:"cover flex-center",attrs:{book:t}}),e._v(" "),a("div",{staticClass:"spine spine-a flex-center"},[a("div",{staticClass:"spine-title",domProps:{innerHTML:e._s(e.spineTextFilter(t.title))}}),e._v(" "),a("div",{staticClass:"spine-subtitle",domProps:{innerHTML:e._s(e.spineTextFilter(t.subtitle))}})]),e._v(" "),a("div",{staticClass:"spine spine-b"}),e._v(" "),a("div",{staticClass:"spine spine-c"}),e._v(" "),a("div",{staticClass:"spine spine-d"}),e._v(" "),a("bookcover",{staticClass:"back-cover flex-center",attrs:{book:t}})],1)})),e._v(" "),a("div",{staticClass:"table-leg",style:{transition:e.allTransition,transform:"rotateX("+(e.tableRotateX+90)+"deg) translate3d(0, -"+(42+e.tableTranslateY)+"vh, -20vh)"}})])},staticRenderFns:[]};var P=a("VU/8")(K,D,!1,function(e){a("xQD4")},null,null).exports,M={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("blog")])},staticRenderFns:[]};var Y=a("VU/8")({name:"blog"},M,!1,function(e){a("gd72")},null,null).exports,I={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("album")])},staticRenderFns:[]};var X=a("VU/8")({name:"album"},I,!1,function(e){a("lrUo")},null,null).exports;s.a.use(i.a);var U=new i.a({routes:[{path:"/",alias:["/home","/index"],name:"home",component:_},{path:"/about",name:"about",component:$},{path:"/works",name:"works",component:P},{path:"/blog",name:"blog",component:Y},{path:"/album",name:"album",component:X}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:U,components:{App:o},template:"<App/>"})},T2aP:function(e,t){},dtir:function(e,t){},gd72:function(e,t){},iHha:function(e,t,a){e.exports=a.p+"static/img/face.24692ac.png"},lrUo:function(e,t){},"mi/6":function(e,t){},nEvJ:function(e,t){},xQD4:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.54b825bb02cfb1f2dfb7.js.map