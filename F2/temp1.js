
$(document).ready(function () {
    var img_index = 1;
    var img_amount = 3;
    var old_image_id = "giao1";

    var autoplay = () => {

        setInterval(() => {
            console.log(img_index);
            if (img_index < img_amount) {
                img_index++;
                change_img();
            }
            else {
                img_index = 1;
                change_img();
            }
        }
            , 3000);
        console.log("timer is done");

    }

    function change_img() {

        let new_image_id = 'giao' + img_index;
        let new_image_address = './img/' + new_image_id + '.jpeg';
        console.log("old_imge_id is " + old_image_id);
        console.log("new is " + new_image_id);

        $("#" + old_image_id).fadeOut(1500, function () {
            $("#" + old_image_id).fadeIn(1000);
            $("#" + old_image_id).attr('src', new_image_address);
        });

        old_image_id = new_image_id;

    }


    //听滑动屏幕操作部分 抄的网络上代码 滑动换图部分自己写的

    var startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };

    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;

        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }

        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }

        return result;
    }
    //手指接触屏幕
    document.addEventListener("touchstart", function (e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", function (e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                alert("未滑动！");
                break;
            case 1:
                alert("向上！")
                break;
            case 2:
                alert("向下！")
                break;
            case 3:
            //这部分是自己写的
                if (img_index > 1) {
                    img_index--;
                    change_img();
                }
                break;
            case 4:
                alert("向右！")
                if (img_index < img_amount) {
                    img_index++;
                    change_img();
                }
                break;
            default:
        }
    }, false);



    for (let index = 1; index <= img_amount; index++) {
        $("#btn" + index).click(function () {
            clearInterval(autoplay);
            img_index = index;
            console.log(img_index);
            console.log("btn" + index);
            change_img();
        });
    }




    autoplay();




});

    // $("#img_container").click(function() {
    //     console.log("In click");
    //     console.log($("#ter1").text());
    //     console.log($("giao_img").css("position"));


    // });
    //$("#giao1").click(function() {
    //  $("#giao1").attr('src','./img/giao2.jpeg')
    //console.log($("giao_img").css("position"));


    //});
    // var x =1;
    // function imgClick(){
    //     $("#giao1").click(function() {
    //         let newImgageId = 'giao'+(x+1);
    //         let newImage = './img/' + newImgageId + '.jpeg';
    //         $("#giao1").attr('src',newImage);
    //         x = x+1;

    //     });
    // }


    // var x =1;
    // function imgClick(){
    //     $("#img_container").click(function() {
    //         let newImgageId = 'giao'+(x+1);
    //         let newImage = './img/' + newImgageId + '.jpeg';
    //         $("#giao1").attr('src',newImage);
    //         x = x+1;

    //     });
    // }
    // imgClick();




    // $("#img_container").click(function(){
    //     clearInterval(autoplay);
    //     console.log(img_index); 
    //     if (img_index<img_amount) {
    //         img_index= img_index+ 1;
    //         change_img();

    //     }
    // });

