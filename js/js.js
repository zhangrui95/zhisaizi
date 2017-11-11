var dice = $("#dice");
var dice1 = $('#dice1');
var number = [];
var sumArr = [];
var n = 3;
$("#btn").click(function(){
    start();
});
function start(){
    if(n > 0){
        n--;
        $("#result").html("");
        number = [];
        sumArr = [];
        $(".car").css({'left':'15px','top':'-20px'});
        $(".car").removeClass('an2').addClass('an1');
        $('#pop').show();
        diceFn(dice);
        diceFn(dice1);
        $('#num_item').html(n);
    }else{
        $('#no-chance').show();
//            return;
    }
}
var num_click=0;//鼠标实际点击次数
var num_ci=$(".num_ci").val();//共有点击次数
function diceFn(dice){
    dice.attr("class","dice");//清除上次动画后的点数
    dice.css("cursor","default");
    var num = Math.floor(Math.random()*6+1);//产生随机数1-6
    dice.animate({left: '+2px'}, 100,function(){
        dice.addClass("dice_t");
    }).delay(200).animate({top:'-2px'},100,function(){
        dice.removeClass("dice_t").addClass("dice_s");
    }).delay(200).animate({opacity: 'show'},600,function(){
        dice.removeClass("dice_s").addClass("dice_e");
    }).delay(100).animate({left:'-2px',top:'2px'},100,function(){
        dice.removeClass("dice_e").addClass("dice_"+num);
        num_click=++num_click;//实际点击数+1
        num_ci=--num_ci;//共有点击数-1
        number.push(num);
        var sum = 0;
        for (var i in number){
            sum += number[i];
        }
        sumArr.push(sum);
        var allSum = sumArr[1];
        if( allSum!= undefined){
            $("#result").html("您掷得点数和为<span>"+allSum+"</span>");
        }
        dice.css('cursor','pointer');
        setTimeout("go("+allSum+")",1800);
        if(num_ci==0){
            $(".wrap").append("<div id='dice_mask'></div>");//加遮罩
            $("#result2").html("您的次数已用完");
        }
    });
}
function go(allSum){
    $('#pop').hide();
    switchFn(allSum);
}

function switchFn(sum){
    switch (sum) {
        case 2:
            $(".car").animate({left: '75px', top: '-20px'}, 300);
            $(".car").animate({left: '135px', top: '-20px'}, 300);
            setTimeout('$("#gift-pop").show()', 900);
            break;
        case 3:
            $(".car").animate({left: '75px', top: '-20px'}, 300);
            $(".car").animate({left: '135px', top: '-20px'}, 300);
            $(".car").animate({left: '195px', top: '-20px'}, 300);
            setTimeout('$("#sorry").show()', 1200);
            break;
        case 4:
            $(".car").animate({left: '75px', top: '-20px'}, 300);
            $(".car").animate({left: '135px', top: '-20px'}, 300);
            $(".car").animate({left: '195px', top: '-20px'}, 300);
            $(".car").animate({left: '195px', top: '40px'}, 300);
            setTimeout('$("#sorry").show()', 1500);
            break;
        case 5:
            $(".car").animate({left: '195px', top: '-20px'}, 500);
            $(".car").animate({left: '195px', top: '100px'}, 500);
            setTimeout('$(".car").removeClass("an1").addClass("an2")', 1000);
            setTimeout('$("#sorry").show()', 1300);
            break;
        case 6:
            $(".car").animate({left: '195px', top: '-20px'}, 500);
            $(".car").animate({left: '195px', top: '100px'}, 500);
            $(".car").animate({left: '135px', top: '100px'}, 500);
            setTimeout('$(".car").removeClass("an1").addClass("an2")', 1000);
            setTimeout('$("#sorry").show()', 1800);
            break;
        case 7:
            $(".car").animate({left: '195px', top: '-20px'}, 500);
            $(".car").animate({left: '195px', top: '100px'}, 500);
            $(".car").animate({left: '75px', top: '100px'}, 500);
            setTimeout('$(".car").removeClass("an1").addClass("an2")', 1000);
            setTimeout('$("#gift-pop").show()', 1800);
            break;
        case 8:
            $(".car").animate({left: '195px', top: '-20px'}, 500);
            $(".car").animate({left: '195px', top: '100px'}, 500);
            $(".car").animate({left: '15px', top: '100px'}, 500);
            setTimeout('$(".car").removeClass("an1").addClass("an2")', 1000);
            setTimeout('$("#sorry").show()', 1800);
            break;
        case 9:
            $(".car").animate({left: '195px', top: '-20px'}, 500);
            $(".car").animate({left: '195px', top: '100px'}, 500);
            $(".car").animate({left: '15px', top: '100px'}, 500);
            $(".car").animate({left: '15px', top: '160px'}, 500);
            setTimeout('$(".car").removeClass("an1").addClass("an2")', 1000);
            setTimeout('$("#sorry").show()', 2300);
            break;
        case 10:
            $(".car").animate({left: '195px', top: '-20px'}, 500);
            $(".car").animate({left: '195px', top: '100px'}, 500);
            $(".car").animate({left: '15px', top: '100px'}, 500);
            $(".car").animate({left: '15px', top: '220px'}, 500);
            setTimeout('$(".car").removeClass("an1").addClass("an2")', 1000);
            setTimeout('$(".car").removeClass("an2").addClass("an1")', 2000);
            setTimeout('$("#gift-pop").show()', 2300);
            break;
        case 11:
            $(".car").animate({left: '195px', top: '-20px'}, 500);
            $(".car").animate({left: '195px', top: '100px'}, 500);
            $(".car").animate({left: '15px', top: '100px'}, 500);
            $(".car").animate({left: '15px', top: '220px'}, 500);
            $(".car").animate({left: '75px', top: '220px'}, 500);
            setTimeout('$(".car").removeClass("an1").addClass("an2")', 1000);
            setTimeout('$(".car").removeClass("an2").addClass("an1")', 2000);
            setTimeout('$("#sorry").show()', 2700);
            break;
        case 12:
            $(".car").animate({left: '195px', top: '-20px'}, 500);
            $(".car").animate({left: '195px', top: '100px'}, 500);
            $(".car").animate({left: '15px', top: '100px'}, 500);
            $(".car").animate({left: '15px', top: '220px'}, 500);
            $(".car").animate({left: '135px', top: '220px'}, 500);
            setTimeout('$(".car").removeClass("an1").addClass("an2")', 1000);
            setTimeout('$(".car").removeClass("an2").addClass("an1")', 2000);
            setTimeout('$("#sorry").show()', 1800);
            break;
    }
}
$('#btn1').click(function(){
    $('#gift-pop').hide();
    $('#gift-box').show();
});
$('#opens').click(function(){
    $('#gift-pop').hide();
});
$('#open-sorry').click(function(){
    $('#sorry').hide();
});
$('#one').click(function(){
    $('#sorry').hide();
    start();
});
$('#open-gift').click(function(){
    $('#gift-box').hide();
});
$('#open-chance').click(function(){
    $('#no-chance').hide();
});