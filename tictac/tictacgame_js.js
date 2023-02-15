$(document).ready(function () {
    hideThem();
    function hideThem() {
        $("img").hide();
        $(".bottom_div1").hide();
    }
    tictac();
    function tictac() {
        for (let i = 1; i < 10; i++) 
        {
            if (i % 2 != 0) {
                if($(".inner_div1").click){
                    $(`#imge1`).attr("src", "image_x.png").show("fast");
                }
            }
            else{
                
            }
        }
    }
    // logicWin();
    // function logicWin(){
    //     if($("#imge1").attr("src") && $("#imge2").attr("src") && $("#imge3").attr("src") == "image_x.png" ||
    //     $("#imge4").attr("src") && $("#imge5").attr("src") && $("#imge6").attr("src") == "image_x.png" ||
    //     $("#imge7").attr("src") && $("#imge8").attr("src") && $("#imge9").attr("src") == "image_x.png" ||
    //     $("#imge1").attr("src") && $("#imge5").attr("src") && $("#imge9").attr("src") == "image_x.png" ||
    //     $("#imge3").attr("src") && $("#imge5").attr("src") && $("#imge7").attr("src") == "image_x.png"
    //     ){
    //         $(".bottom_div1").show("fast");
    //         $("#win1").text("PLAYER1 WINS!");
    //     }
    //     else if($("#imge1").attr("src") && $("#imge2").attr("src") && $("#imge3").attr("src") == "image_o.png" ||
    //     $("#imge4").attr("src") && $("#imge5").attr("src") && $("#imge6").attr("src") == "image_o.png" ||
    //     $("#imge7").attr("src") && $("#imge8").attr("src") && $("#imge9").attr("src") == "image_o.png" ||
    //     $("#imge1").attr("src") && $("#imge5").attr("src") && $("#imge9").attr("src") == "image_o.png" ||
    //     $("#imge3").attr("src") && $("#imge5").attr("src") && $("#imge7").attr("src") == "image_o.png"
    //     ){
    //         $(".bottom_div1").show("fast");
    //         $("#win1").text("PLAYER2 WINS!");
    //     }
    //     else {
    //         $(".bottom_div1").show("fast");
    //         $("#win1").text("MATCH DRAW");
    //     }
    // }
});
