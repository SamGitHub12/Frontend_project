$(document).ready(function () {
    hideThem();
    function hideThem() {
        $("img").hide();
        $(".bottom_div1").hide();
    }
    count = 1;
    tictac();
    function tictac() {

        $(`.inner_div1`).click(function () {
            if (count % 2 != 0 && count < 10) {
                $(`#imge1`).attr("src", "image_x.png").show("fast");
                count++;
            }
            else {
                $(`#imge1`).attr("src", "image_o.png").show("fast");
                count++;
            }
            logicWin();
        });
        $(`.inner_div2`).click(function () {
            if (count % 2 != 0 && count < 10) {
                $(`#imge2`).attr("src", "image_x.png").show("fast");
                count++;
            }
            else {
                $(`#imge2`).attr("src", "image_o.png").show("fast");
                count++;
            }
            logicWin();
        });
        $(`.inner_div3`).click(function () {
            if (count % 2 != 0 && count < 10) {
                $(`#imge3`).attr("src", "image_x.png").show("fast");
                count++;
            }
            else {
                $(`#imge3`).attr("src", "image_o.png").show("fast");
                count++;
            }
            logicWin();
        });
        $(`.inner_div4`).click(function () {
            if (count % 2 != 0 && count < 10) {
                $(`#imge4`).attr("src", "image_x.png").show("fast");
                count++;
            }
            else {
                $(`#imge4`).attr("src", "image_o.png").show("fast");
                count++;
            }
            logicWin();
        });
        $(`.inner_div5`).click(function () {
            if (count % 2 != 0 && count < 10) {
                $(`#imge5`).attr("src", "image_x.png").show("fast");
                count++;
            }
            else {
                $(`#imge5`).attr("src", "image_o.png").show("fast");
                count++;
            }
            logicWin();
        });
        $(`.inner_div6`).click(function () {
            if (count % 2 != 0 && count < 10) {
                $(`#imge6`).attr("src", "image_x.png").show("fast");
                count++;
            }
            else {
                $(`#imge6`).attr("src", "image_o.png").show("fast");
                count++;
            }
            logicWin();
        });
        $(`.inner_div7`).click(function () {
            if (count % 2 != 0 && count < 10) {
                $(`#imge7`).attr("src", "image_x.png").show("fast");
                count++;
            }
            else {
                $(`#imge7`).attr("src", "image_o.png").show("fast");
                count++;
            }
            logicWin();
        });
        $(`.inner_div8`).click(function () {
            if (count % 2 != 0 && count < 10) {
                $(`#imge8`).attr("src", "image_x.png").show("fast");
                count++;
            }
            else {
                $(`#imge8`).attr("src", "image_o.png").show("fast");
                count++;
            }
            logicWin();
        });
        $(`.inner_div9`).click(function () {
            if (count % 2 != 0 && count < 10) {
                $(`#imge9`).attr("src", "image_x.png").show("fast");
                count++;
            }
            else {
                $(`#imge9`).attr("src", "image_o.png").show("fast");
                count++;
            }
            logicWin();
        });
    }
    function logicWin(){
        if($("#imge1").attr("src") === $("#imge2").attr("src") && $("#imge1").attr("src") === $("#imge3").attr("src") && $("#imge1").attr("src") === "image_x.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER1 WINS!");
        } else if($("#imge4").attr("src") === $("#imge5").attr("src") && $("#imge4").attr("src") === $("#imge6").attr("src") && $("#imge4").attr("src") === "image_x.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER1 WINS!");
        }
        else if($("#imge7").attr("src") === $("#imge8").attr("src") && $("#imge7").attr("src") === $("#imge9").attr("src") && $("#imge7").attr("src") === "image_x.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER1 WINS!");
        }
        else if($("#imge1").attr("src") === $("#imge4").attr("src") && $("#imge1").attr("src") === $("#imge7").attr("src") && $("#imge1").attr("src") === "image_x.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER1 WINS!");
        }
        else if($("#imge1").attr("src") === $("#imge5").attr("src") && $("#imge1").attr("src") === $("#imge9").attr("src") && $("#imge1").attr("src") === "image_x.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER1 WINS!");
        }
        else if($("#imge2").attr("src") === $("#imge5").attr("src") && $("#imge2").attr("src") === $("#imge8").attr("src") && $("#imge2").attr("src") === "image_x.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER1 WINS!");
        }
        else if($("#imge3").attr("src") === $("#imge6").attr("src") && $("#imge3").attr("src") === $("#imge9").attr("src") && $("#imge3").attr("src") === "image_x.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER1 WINS!");
        }
        else if($("#imge3").attr("src") === $("#imge5").attr("src") && $("#imge3").attr("src") === $("#imge7").attr("src") && $("#imge3").attr("src") === "image_x.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER1 WINS!");
        }

        if($("#imge1").attr("src") === $("#imge2").attr("src") && $("#imge1").attr("src") === $("#imge3").attr("src") && $("#imge1").attr("src") === "image_o.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER2 WINS!");
        } else if($("#imge4").attr("src") === $("#imge5").attr("src") && $("#imge4").attr("src") === $("#imge6").attr("src") && $("#imge4").attr("src") === "image_o.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER2 WINS!");
        }
        else if($("#imge7").attr("src") === $("#imge8").attr("src") && $("#imge7").attr("src") === $("#imge9").attr("src") && $("#imge7").attr("src") === "image_o.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER2 WINS!");
        }
        else if($("#imge1").attr("src") === $("#imge4").attr("src") && $("#imge1").attr("src") === $("#imge7").attr("src") && $("#imge1").attr("src") === "image_o.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER2 WINS!");
        }
        else if($("#imge1").attr("src") === $("#imge5").attr("src") && $("#imge1").attr("src") === $("#imge9").attr("src") && $("#imge1").attr("src") === "image_o.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER2 WINS!");
        }
        else if($("#imge2").attr("src") === $("#imge5").attr("src") && $("#imge2").attr("src") === $("#imge8").attr("src") && $("#imge2").attr("src") === "image_o.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER2 WINS!");
        }
        else if($("#imge3").attr("src") === $("#imge6").attr("src") && $("#imge3").attr("src") === $("#imge9").attr("src") && $("#imge3").attr("src") === "image_o.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER2 WINS!");
        }
        else if($("#imge3").attr("src") === $("#imge5").attr("src") && $("#imge3").attr("src") === $("#imge7").attr("src") && $("#imge3").attr("src") === "image_o.png"){
            $(".bottom_div1").show("fast");
            $("#win1").text("PLAYER2 WINS!");
        }
    }
    // function logicWin() {
    //     if ((($("#imge1").attr("src") && $("#imge2").attr("src")) === "image_x.png" && ($("#imge1").attr("src") && $("#imge3").attr("src")) === "image_x.png") ||
    //         (($("#imge4").attr("src") && $("#imge5").attr("src")) === "image_x.png" && ($("#imge4").attr("src") && $("#imge6").attr("src")) === "image_x.png") ||
    //         (($("#imge7").attr("src") && $("#imge8").attr("src")) === "image_x.png" && ($("#imge7").attr("src") && $("#imge9").attr("src")) === "image_x.png") ||
    //         (($("#imge1").attr("src") && $("#imge5").attr("src")) === "image_x.png" && ($("#imge1").attr("src") && $("#imge9").attr("src")) === "image_x.png") ||
    //         (($("#imge3").attr("src") && $("#imge5").attr("src")) === "image_x.png" && ($("#imge3").attr("src") && $("#imge7").attr("src")) === "image_x.png") ||
    //         (($("#imge3").attr("src") && $("#imge6").attr("src")) === "image_x.png" && ($("#imge3").attr("src") && $("#imge9").attr("src")) === "image_x.png") ||
    //         (($("#imge1").attr("src") && $("#imge4").attr("src")) === "image_x.png" && ($("#imge1").attr("src") && $("#imge7").attr("src")) === "image_x.png") ||
    //         (($("#imge2").attr("src") && $("#imge5").attr("src")) === "image_x.png" && ($("#imge2").attr("src") && $("#imge8").attr("src")) === "image_x.png")
    //     ) {
    //         $(".bottom_div1").show("fast");
    //         $("#win1").text("PLAYER1 WINS!");
    //     }
        // else if (($("#imge1").attr("src") === "image_o.png" && $("#imge2").attr("src") === "image_o.png" && $("#imge3").attr("src") == "image_o.png") ||
        //     ($("#imge4").attr("src") === "image_o.png" && $("#imge5").attr("src", "image_o.png") === $("#imge6").attr("src") === "image_o.png") ||
        //     ($("#imge7").attr("src") === "image_o.png" && $("#imge8").attr("src", "image_o.png") === $("#imge9").attr("src") === "image_o.png") ||
        //     ($("#imge1").attr("src") === "image_o.png" && $("#imge5").attr("src", "image_o.png") === $("#imge9").attr("src") === "image_o.png") ||
        //     ($("#imge3").attr("src") === "image_o.png" && $("#imge5").attr("src", "image_o.png") === $("#imge7").attr("src") === "image_o.png") ||
        //     ($("#imge3").attr("src") === "image_o.png" && $("#imge6").attr("src", "image_o.png") === $("#imge9").attr("src") === "image_o.png") ||
        //     ($("#imge1").attr("src") === "image_o.png" && $("#imge4").attr("src", "image_o.png") === $("#imge7").attr("src") === "image_o.png") ||
        //     ($("#imge2").attr("src") === "image_o.png" && $("#imge5").attr("src", "image_o.png") === $("#imge8").attr("src") === "image_o.png")
        // ) {
        //     $(".bottom_div1").show("fast");
        //     $("#win1").text("PLAYER2 WINS!");
        // }
    // }
});
