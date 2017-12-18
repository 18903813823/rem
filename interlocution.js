/**
 * Created by Shinelon on 2017/10/4.
 */
$(function(){
    //$('#textArea').on("keyup",function(){
    //    $('#textNum').text($('#textArea').val().length);})

    var textNum=$("#textNum");

    $("#textArea").on("keyup",function(){
        var length=$('#textArea').val().length;
          textNum.text(length+"/60");

    });


    //$("#dui").click(function(){
    //    if($("#dui").has(".duihao")){
    //        $("#dui").removeClass("duihao");
    //    }
    //    else{
    //        $(this).addClass("duihao")
    //    }
    //
    //});

    $("#dui").click(function() {

        $(this).toggleClass("duihao");

    });


});

