<h1>移动端响应式框架</h1>
<p>一个零依赖的框架让h5页面适配各种移动设备</p>
<p>说明：无需rem、无需媒体查询、无需百分比布局，跟PC一样使用px定义好页面的各个元素即可</p>
<p>兼容：ios4+、android2.3+、winphone8+</p>
<p>大小：1.24K</p>
<h2>示例一：auto模式</h2>
<p>保持页面的宽高比，调整页面的宽度，使页面宽度完全包含在浏览器窗口中</p>
<a href="http://peunzhang.sinaapp.com/demo/pageResponse/pageResponse_auto.html" target="_blank">预览</a>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_auto.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_auto.gif" width="400" height="582"></p>
<h2>示例二：contian模式</h2>
<ol>
<li>保持页面的宽高比，调整页面的宽度或高度（较大者），使页面完全包含在浏览器窗口中</li>
<li>页面水平垂直居中，左右或上下可能出现空白，页面背景使用纯色或可复制背景可解决此类问题</li>
<li>适合滑屏页面、单屏页面</li>
</ol>
<a href="http://peunzhang.sinaapp.com/demo/pageResponse/pageResponse_contain.html" target="_blank">预览</a>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_contain.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_contain.gif" width="400" height="582"></p>
<h2>示例三：cover模式</h2>
<ol>
<li>保持页面的宽高比，调整页面的宽度或高度（较小者），使页面完全覆盖浏览器窗口</li>
<li>页面水平垂直居中，超出浏览器窗口左右或上下的内容会被隐藏</li>
<li>适合滑屏页面、单屏页面，且页面边缘无重要内容</li>
</ol>
<a href="http://peunzhang.sinaapp.com/demo/pageResponse/pageResponse_cover.html" target="_blank">预览</a>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_cover.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_cover.gif" width="400" height="582"></p>
<h2>结合fullPage滑屏框架</h2>
<a href="http://peunzhang.sinaapp.com/demo/pageResponse/pageResponse_fullPage.html" target="_blank">预览</a>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_fullPage.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_fullPage.gif" width="400" height="582"></p>
<h2>快速上手</h2>
<p>meta的viewport设置：</p>
<pre>&lt;meta content=&quot;width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no&quot; name=&quot;viewport&quot;&gt;</pre>
<p>启用框架代码示例一：</p>
<pre>
//如果视觉稿尺寸是640px*1008px，页面样式是以视觉稿尺寸除以2来计算，那么输入页面的宽度为320px和高度为504px
window.onload = window.onresize = function(){
    var page = new pageResponse({
        class : 'page',     //模块的类名，使用class来控制页面上的模块(1个或多个)
        mode : 'contain',     // auto || contain || cover 
        width : '320',      //输入页面的宽度，默认宽320px 
        height : '504'      //输入页面的高度，默认高504px
    })
}
</pre>
<p>启用框架代码示例二：</p>
<pre>
//如果视觉稿尺寸是640px*1008px，页面样式是以视觉稿原始尺寸来计算，那么输入页面的宽度为640px和高度为1008px
window.onload = window.onresize = function(){
    var page = new pageResponse({
        class : 'page',     //模块的类名，使用class来控制页面上的模块(1个或多个)
        mode : 'contain',     // auto || contain || cover 
        width : '640',      //输入页面的宽度，默认宽320px 
        height : '1008'      //输入页面的高度，默认高504px
    })
}
</pre>
