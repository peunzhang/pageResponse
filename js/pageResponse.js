/* 
 * 名称 ：移动端响应式框架
 * 作者 ：白树 http://peunzhang.cnblogs.com
 * 版本 ：v2.0
 * 日期 ：2015.9.22
 * 兼容 ：ios 5+、android 2.3.5+、winphone 8+
 */
function pageResponse(opt) {
    var ua = navigator.userAgent,
        wp = ua.match(/Windows Phone ([\d.]+)/),
        android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),

        // 设备宽高初始比例
        dw = document.documentElement.clientWidth,
        dh = document.documentElement.clientHeight,
        ds = dw / dh,

        // 页面宽高初始比例
        pw = opt.width || 320,
        ph = opt.height || 504,
        ps = pw / ph,

        // 调用的选择器
        pd = document.querySelectorAll(opt.selectors),
        i = pd.length,

        // 核心代码：页面缩放比例
        sm = opt.mode || "auto",
        sn = (sm == "contain") ? (ds > ps ? dh / ph : dw / pw) : (sm == "cover") ? (ds < ps ? dh / ph : dw / pw) : dw / pw; 

    //样式模板 auto || contain || cover
    function template(mode, obj, num) {
        var _o = obj.style;
        _o.width = pw + "px";
        _o.height = ph + "px";
        _o.webkitTransformOrigin = "left top 0";
        _o.transformOrigin = "left top 0";
        _o.webkitTransform = "scale(" + num + ")";
        _o.transform = "scale(" + num + ")";
        // 兼容android 2.3.5系统下body高度不自动刷新的bug
        if (mode == "auto" && android) {
            document.body.style.height = ph * num + "px";
        } else
        if (mode == "contain" || mode == "cover") {
            _o.position = "absolute";
            _o.left = (dw - pw) / 2 + "px";
            _o.top = (dh - ph) / 2 + "px";
            _o.webkitTransformOrigin = "center center 0";
            _o.transformOrigin = "center center 0";
            // 阻止默认滑屏事件
            if (wp) {
                document.body.style.msTouchAction = "none";
            } else {
                document.ontouchmove = function(e) {
                    e.preventDefault()
                }
            }
        }
    }

    //运行
    while (--i >= 0) {
        template(sm, pd[i], sn);
    }
}
/*  使用方法
 *  window.onload = window.onresize = function(){
 *      pageResponse({
 *          selector : '输入类名', //模块的类名
 *          mode : 'contain',    // auto || contain || cover 
 *          width : '320',     //默认宽320px 
 *          height : '504'     //默认高504px
 *      })
 *   }
 */