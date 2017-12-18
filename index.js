/**
 * Created by Shinelon on 2017/9/29.
 */
$(function () {
    var index = 0;
    var ul = $(".yk-banner").children("ul");
    var bannerwidth = $(".yk-banner").width();
    var lis = ul.find("li");
    var count = lis.length;
    ul.width(count * bannerwidth);
    lis.each(function (index, value) {
        $(lis[index]).width(bannerwidth);
    });
    $(ul).css("left", -index * bannerwidth + "px");
    setInterval(function () {
        index++;
        //$(ul).css("transition", "left 0.5s");
        //$(ul).css("left", -index * bannerwidth + "px");

           $("ul").animate({"left":-index*bannerwidth},200,function() {
               if (index == count - 1) {
                   index = 1;
                   ul.css("left", -index * bannerwidth);

               }
           } );

        //console.log(Date.now() - time);

    }, 3000)
});