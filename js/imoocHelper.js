setInterval(function () {
    if ($("#next-mask").css("visibility") === "visible") {
        $("#next-mask a.next-btn")[0].click();
    }
    if ($(".J-next-btn")[0] != undefined) {
        $(".J-next-btn")[0].click();
    }
}, 3000);




