<h1>移动端响应式框架</h1>
<p>无需rem、无需媒体查询、无需百分比布局，让h5页面自动适配各种移动设备</p>
<p>兼容：ios4+、android2.3+、winphone8+</p>
<p>大小：1.24K</p>
<h2>模式一：auto</h2>
<p>保持页面的宽高比，调整页面的宽度，使页面宽度完全包含在移动设备中</p>
<a href="http://1.peunzhang.sinaapp.com/demo/pageResponse/pageResponse_auto.html" target="_blank">预览</a>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_auto.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_auto.gif" width="400" height="582"></p>
<h2>模式二：contian</h2>
<ol>
<li>保持页面的宽高比，调整页面的宽度或高度（较大者），使页面完全包含在移动设备中</li>
<li>页面水平垂直居中，左右或上下可能出现空白</li>
<li>适合滑屏页面、单屏页面</li>
</ol>
<a href="http://1.peunzhang.sinaapp.com/demo/pageResponse/pageResponse_contain.html" target="_blank">预览</a>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_contain.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_contain.gif" width="400" height="582"></p>
<h2>模式三：cover</h2>
<ol>
<li>保持页面的宽高比，调整页面的宽度或高度（较小者），使页面完全包含在移动设备中</li>
<li>页面水平垂直居中，超出屏幕左右或上下的内容会被隐藏 </li>
<li>适合滑屏页面、单屏页面</li>
</ol>
<a href="http://1.peunzhang.sinaapp.com/demo/pageResponse/pageResponse_cover.html" target="_blank">预览</a>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_cover.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_cover.gif" width="400" height="582"></p>
<h2>结合fullPage滑屏框架</h2>
<a href="http://1.peunzhang.sinaapp.com/demo/pageResponse/pageResponse_fullPage.html" target="_blank">预览</a>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_fullPage.png" width="200" height="200"></p>
<p><img src="https://raw.githubusercontent.com/peunzhang/pageResponse/master/pic/pageResponse_fullPage.gif" width="400" height="582"></p>
<h2>使用方法</h2>
<pre>
window.onload = window.onresize = function(){
    var page = new pageResponse({
        class : 'page',     //模块的类名，使用class来控制页面上的模块(1个或多个)
        mode : 'auto',     // auto || contain || cover 
        width : '320',      //输入页面的宽度，默认宽320px 
        height : '504'      //输入页面的高度，默认高504px
    })
}
</pre>
<p>如果你的视觉稿是640*1008，页面样式是视觉稿尺寸除以2来计算，那么输入页面的宽度为320px和高度为504px</p>
<p>如果你的视觉稿是640*1008，页面样式是以视觉稿原始尺寸来计算，那么输入页面的宽度为640px和高度为1008px</p>
