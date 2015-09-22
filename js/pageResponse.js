/* 
 * 名称 ：移动端响应式框架
 * 作者 ：白树 http://peunzhang.cnblogs.com
 * 版本 ：v1.0
 * 日期 ：2015.6.23
 * 兼容 ：ios4+、android2.3+、winphone8+
 */
function pageResponse(opt) {
    //getElementsByClassName
    function getElementsByClassName(cl) {
        if(document.getElementsByClassName){
            return  document.getElementsByClassName(cl)
        }
        else{    
            var ele = [],
                els =  document.getElementsByTagName("*"),
                i = els.length;
            cl = cl.replace(/\-/g, "\\-");
            var pa = new RegExp("(^|\\s)" + cl + "(\\s|$)");
            while(--i >= 0){
                if (pa.test(els[i].className)){
                    ele.push(els[i]);
                }
            }
            return ele;
        }
    }
    //模板
    function template(mode, obj, num){
        var s = obj.style; 
            s.width = pw + "px";
            s.height = ph + "px";
            s.webkitTransformOrigin = "left top 0";
            s.transformOrigin = "left top 0";
            s.webkitTransform = "scale(" + num + ")";
            s.transform = "scale(" + num + ")";
        if(mode == "auto"){
            document.body.style.height = ph * num + "px";// 兼容android2.3.5系统下body高度不自动刷新的bug
        }
        else if(mode == "contain" || mode == "cover"){
            s.position = "absolute";
            s.left = "50%";
            s.top = "50%";
            s.marginLeft = pw / -2 + "px";
            s.marginTop = ph / -2 + "px";
            s.webkitTransformOrigin = "center center 0";
            s.transformOrigin = "center center 0";
            document.body.style.msTouchAction = "none";// 阻止默认滑屏事件
            document.ontouchmove = function(e){e.preventDefault()}
        }
    }
    var dw = document.documentElement.clientWidth,
        dh = document.documentElement.clientHeight,
        ds = dw / dh,// 设备宽高初始比例
        pw = opt.width || 320,
        ph = opt.height || 504,
        ps = pw / ph,// 页面宽高初始比例
        pd = getElementsByClassName(opt.class),
        sm = opt.mode || "auto",
        sn = (sm == "contain") ? (ds > ps ? dh / ph : dw / pw) : (sm == "cover") ? (ds < ps ? dh / ph : dw / pw) : dw / pw;// 页面缩放比例，默认模式为auto
    for(i = 0;i < pd.length;i++){
        template(sm, pd[i], sn);
    }
}
/*  使用方法
 *  var page = new pageResponse({
 *       class : '输入类名', //模块的类名
 *       mode : 'contain',    // auto || contain || cover 
 *       width : '320',     //默认宽320px 
 *       height : '504'     //默认高504px
 *   })
 */
