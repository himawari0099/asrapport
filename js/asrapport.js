$(function(){
    // 背景画像のリスト　　　　　　　　　　
    var bgImageList = [// 配列順
        "slider_01.jpg",
        "slider_02.jpg",
        "slider_03.jpg",
        "slider_04.jpg",
        "slider_05.jpg",
        "slider_06.jpg"
    ];

    //タグ情報の取得
    var container = $(`#container`);
    var bgContent = $(`#bgContent`);

    // 設定関係
    // 表示する背景画像の番号
    var bgImageListIndex = 2;//配列順になるから、初めからにしたいときは0から




        //#containerの背景画像をbgImageList内の内容に変更する
        container.css({
            backgroundImage:`url(img/${bgImageList[bgImageListIndex]})`///直接ファイル名を書かない
        });    

      // 一定時間ごとに画像を切り替えるする処理
      setInterval(function(){
          var nextIndex;
       // もし表示する背景画像の番号が最後じゃない時
       if( bgImageListIndex <bgImageList.length -1 ){ //配列順だからゴールの番号は12

      //表示する背景画像の番号を更新する
        nextIndex=bgImageListIndex+1;


       }
        // 最後の時
        else{
            //bgImageListIndexを最初に戻す
            nextIndex=0;
        }
        //#bgContentの背景画像をbgImageList内の内容に変更する
        bgContent
        .css({
            backgroundImage:`url(img/${bgImageList[nextIndex]})`///直接ファイル名を書かない 
        })
        .removeClass(`fade`);

        setTimeout(function(){
            bgContent.addClass(`fade`);
        },40);
        
        //#containerの背景画像をbgImageList内の内容に変更する
        container.css({
            backgroundImage:`url(img/${bgImageList[bgImageListIndex]})`///直接ファイル名を書かない
        });
            bgImageListIndex=nextIndex;
        },3000);


});

(function($) {
    $(function () {
      $('#nav-toggle').on('click', function() {
        $('body').toggleClass('open');
      });
    });
})(jQuery);