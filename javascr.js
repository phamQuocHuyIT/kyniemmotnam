function funcAlert() {
    window.alert(
        "Có vẻ em đã biết được vài sự thú vị của trang web này rồi!. Trang web được anh đặc biệt làm riêng để nhân ngày kỷ niệm của 1 năm quen nhau của anh và em. Anh đã bố trí các nút để khi em ấn vào sẽ có một điều đặc biệt xảy ra và nó được nằm rả rác trong trang web. Em hãy thử tự mình khám phá đi nhóa. à mà quên có tổng cộng 4 bí ẩn đấy"
        );
    let playto = document.getElementById("myAudio");
    playto.play();
};
function anAnhanh() {
    document.getElementById("anhanh1").style.display="none";
    document.getElementById("Tamsu1").style.display="inline-block";
    
};

function quayLai1() {
    document.getElementById("anhanh1").style.display="inline-block";
    document.getElementById("Tamsu1").style.display="none";
    
};
/*  function anAnhem() {
    document.getElementById("anhEm1").style.display="none";
    document.getElementById("Tamsu2").style.display="inline-block";
    
};
*/
function quayLai2() {
    document.getElementById("anhEm1").style.display="inline-block";
    document.getElementById("Tamsu2").style.display="none";
    
};

function funckyniem() {
    window.alert(
        "Anh mong rằng chúng ta của tương lai sẽ có chúng ta của hiện tại. Chúng ta đã trãi qua nhiều chuyện cùng nhau anh mong rằng những điều ấy sẽ giúp cho chúng ta gắn kết hơn với nhau. Đừng vì những cám dỗ ngoài kia mà chúng ta sẽ đánh mất nhau. Chúng ta đã có những giọt nước mắt nụ cười cùng nhau. Hãy cùng nhau cố gắng để phát triển bản thân cùng nhau. Chúng ta không ai là hoàn hoản, Nhưng hãy yêu thương nhau bằng cách hoàn hoản nhất mà chúng ta có. Anh mong tương tai tới sẽ là tương lai của chúng ta chứ không phải là tương lai của riêng anh hoặc riêng em. Cảm ơn em vì đã đến bên anh. Vài dòng chữ không thể nào nói lên hết tất cả tình cảm anh giành cho em. Cùng nhau cố gắng em nhoaaaa. Chúc mừng 1 năm của chúng ta"
    );
}


$(document).ready(function() {
   $("#btnEm").click(function() {
    $("#anhEm1").hide();
    $("#Tamsu2").show();
   });
   
   
});
