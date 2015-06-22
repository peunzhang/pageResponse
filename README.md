<h1>移动端响应式插件</h1>
<p>使用transform:scale缩放页面，要求视觉稿高清</p>
<p>页面以px为单位即可让h5适配各种移动设备，适配原则根据视觉稿比例缩放页面</p>
<p>告别rem、媒体查询、百分比等相对复杂且定位不精准的布局</p>
<p>兼容性良好，支持ios4+、android2.3+、winphone8+系统</p>
<p>大小1.22k，零依赖</p>
<p>三种适配模式可选 auto || contain || cover </p>
<p>真实案例：超级收银员</p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/eg1.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/eg1.jpg" width="600" height="632"></p>
<h2>contain模式（推荐）</h2>
<ol>
<li>保持页面的宽高比，调整页面的宽度或高度（较大者），使页面完全包含在浏览器窗口中</li>
<li>页面水平垂直居中，左右或上下可能出现空白，页面背景使用纯色或可复制背景可解决此类问题</li>
<li>适合滑屏页面、单屏页面</li>
</ol>
<a href="http://peunzhang.sinaapp.com/demo/pageResponse/pageResponse_contain.html" target="_blank">预览</a>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_contain.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_contain.gif" width="400" height="582"></p>
<h2>cover模式</h2>
<ol>
<li>保持页面的宽高比，调整页面的宽度或高度（较小者），使页面完全覆盖浏览器窗口</li>
<li>页面水平垂直居中，超出浏览器窗口左右或上下的内容会被隐藏</li>
<li>适合滑屏页面、单屏页面，且页面边缘无重要内容</li>
</ol>
<a href="http://peunzhang.sinaapp.com/demo/pageResponse/pageResponse_cover.html" target="_blank">预览</a>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_cover.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_cover.gif" width="400" height="582"></p>
<h2>auto模式（默认模式）</h2>
<p>保持页面的宽高比，调整页面的宽度，使页面宽度完全包含在浏览器窗口中</p>
<a href="http://peunzhang.sinaapp.com/demo/pageResponse/pageResponse_auto.html" target="_blank">预览</a>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_auto.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_auto.gif" width="400" height="582"></p>
<h2>结合fullPage滑屏框架的例子</h2>
<a href="http://peunzhang.sinaapp.com/demo/pageResponse/pageResponse_fullPage.html" target="_blank">预览</a>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_fullPage.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_fullPage.gif" width="400" height="582"></p>
<h2>快速上手</h2>
<p>meta的viewport设置：</p>
<pre>&lt;meta content=&quot;width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no&quot; name=&quot;viewport&quot;&gt;</pre>
<p>启用插件代码示例一：</p>
<pre>
&lt;div class=&quot;page&quot;&gt;
&lt;img src=&quot;img/demo1.jpg&quot; alt=&quot;&quot; width=&quot;320&quot; height=&quot;504&quot;&gt;
&lt;h1&gt;你一定也有过一个翱翔天际的梦1&lt;/h1&gt;
&lt;p&gt;-  回家，或踏上旅途，飞机是自由的符号  -&lt;/p&gt;
&lt;/div&gt;
</pre>
<pre>
//如果视觉稿尺寸是640px*1008px，页面样式是以视觉稿尺寸除以2来计算，那么输入页面的宽度为320px和高度为504px
window.onload = window.onresize = function(){
    var page = new pageResponse({
        class : 'page',     //模块的类名，使用class来控制页面上的模块(1个或多个)
        mode : 'contain',     // auto || contain || cover 
        width : '320',      //输入页面的宽度，只支持输入数值，默认宽度为320px
        height : '504'      //输入页面的高度，只支持输入数值，默认高度为504px
    })
}
</pre>
<p>启用插件代码示例二：</p>
<pre>
&lt;!-- 2个模块（包含隐藏的）都包含class:page，pageResponse可对这2个模块起作用 --&gt;<br>
&lt;div class=&quot;page&quot;&gt;
&lt;img src=&quot;img/demo1.jpg&quot; alt=&quot;&quot; width=&quot;640&quot; height=&quot;1008&quot;&gt;
&lt;h1&gt;你一定也有过一个翱翔天际的梦1&lt;/h1&gt;
&lt;p&gt;-  回家，或踏上旅途，飞机是自由的符号  -&lt;/p&gt;
&lt;/div&gt;
&lt;div class=&quot;page hide&quot;&gt;
&lt;p&gt;是否还记得她&lt;/p&gt;
&lt;img src=&quot;img/logo.jpg&quot; alt=&quot;&quot; width=&quot;40&quot; height=&quot;40&quot;&gt;
&lt;/div&gt;
</pre>
<pre>
//如果视觉稿尺寸是640px*1008px，页面样式是以视觉稿原始尺寸来计算，那么输入页面的宽度为640px和高度为1008px
window.onload = window.onresize = function(){
    var page = new pageResponse({
        class : 'page',     //模块的类名，使用class来控制页面上的模块(1个或多个)
        mode : 'contain',     // auto || contain || cover 
        width : '640',      //输入页面的宽度，只支持输入数值，默认宽度为320px
        height : '1008'      //输入页面的高度，只支持输入数值，默认高度为504px
    })
}
</pre>
