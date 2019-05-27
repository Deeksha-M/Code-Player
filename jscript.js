            function codeOutput(){
                $("#outputArea").contents().find("html").html("<html><head><style>" + $("#cssArea").val() + "</style></head><body>" + $("#htmlArea").val() + "</body></html>");
                 document.getElementById("outputArea").contentWindow.eval($("#javascriptArea").val());
            };
            
            function setArea(){
                var countPanel = $(".clearPanel").length;
                if($("textarea").attr("class") != "clearPanel"){
                    $("textarea").width(($("body").width()/(4-countPanel))-15);
                    $("iframe").width(($("body").width()/(4-countPanel))-15);
                }
            };
            
            $(".toggleButton").hover(function(){
                $(this).css("background-color", "darkgrey");
                }, function(){
                    if($(this).attr("class")=="toggleButton active"){
                        $(this).css("background-color", "aliceblue");
                    }else{
                        $(this).css("background-color", "rgb(238, 238, 238)");
                    }
                });
            
            $(".toggleButton").click(function(){
                if($(this).attr("class")=="toggleButton active"){
                    $(this).removeClass("active");
                }else{
                    $(this).addClass("active");
                }
            });
        
            $(".toggleButton").click(function(){
                if($(this).attr("class")=="toggleButton active"){
                    if($(this).attr("id")=="toggleHtml"){
                        $("#htmlArea").removeClass("clearPanel");
                    }else if($(this).attr("id")=="toggleCss"){
                        $("#cssArea").removeClass("clearPanel");
                    }else if($(this).attr("id")=="toggleJavascript"){
                        $("#javascriptArea").removeClass("clearPanel");
                    }else{
                        $("#outputArea").removeClass("clearPanel");
                    }
                }else{
                    if($(this).attr("id")=="toggleHtml"){
                        $("#htmlArea").addClass("clearPanel");
                    }else if($(this).attr("id")=="toggleCss"){
                        $("#cssArea").addClass("clearPanel");
                    }else if($(this).attr("id")=="toggleJavascript"){
                        $("#javascriptArea").addClass("clearPanel");
                    }else{
                        $("#outputArea").addClass("clearPanel");
                    }
                }
                setArea();
            });
            codeOutput();
            
            $("textarea").on('change keyup paste',function(){
                codeOutput();
            });