/**
 * Created by Shinelon on 2017/9/29.
 */
/*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
window.onload=function(){
    var html = document.getElementsByTagName('html')[0];
    //console.log(html);
    /*取到屏幕的宽度*/
    var width = window.innerWidth;
    //console.log(width);
    /* 640 100  320 50 */
    if(width>640){
        width=640;
    }
    if(width<320){
        width=320;
    }
    var fontSize = 100/640*width;
    //console.log(fontSize);
    /*设置fontsize*/

    html.style.fontSize = fontSize +'px';
    window.onresize = function(){
        var html = document.getElementsByTagName('html')[0];
        //console.log(html);
        /*取到屏幕的宽度*/
        var width = window.innerWidth;
        if(width>640){
            width=640;
        }
        if(width<320){
            width=320;
        }
        //console.log(width);
        /* 640 100  320 50 */
        var fontSize = 100/640 * width;
        //console.log(fontSize);
        /*设置fontsize*/
        html.style.fontSize = fontSize +'px';


    }



}

