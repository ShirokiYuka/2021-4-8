enchant();

window.onload = function(){
    var game = new Game(1280, 720); 
    
    game.preload('button_sprite.png');
    game.preload('image01.png');
    game.preload('image02.png');
    game.preload('image03.png');
    game.preload('image04.png');
    game.preload('image06.png');
    game.preload('image07.png');
    game.preload('image08.png');
    game.preload('image09.png');
    game.preload('image10.png');
    game.preload('image11.png');
    game.preload('quizImage01B.png');
    game.preload('quizImage01C.png');
    game.preload('quizImage02A.png');
    game.preload('quizImage02B.png');
    game.preload('quizImage02C.png');
    game.preload('buttonImage01.png');
    game.preload('buttonImage02.png');
    game.preload('buttonImage03.png');
    game.preload('buttonImage04.png');
    game.preload('cardI01.png');
    game.preload('cardI02.png');
    game.preload('spritesheet.png');
    game.preload('spritesheet1.png');
    game.preload('spritesheet2.png');


    game.onload = function(){

        var point = 4;

        var sousyoku = new Group();

        var upperRight = new Sprite(750, 750);
        upperRight.image = game.assets['image03.png'];
        upperRight.scaleX = 0.15;
        upperRight.scaleY = 0.15;
        upperRight.moveTo(800, -300);
        sousyoku.addChild(upperRight);

        var upperLeft = new Sprite(750, 750);
        upperLeft.image = game.assets['image03.png'];
        upperLeft.scaleX = 0.15;
        upperLeft.scaleY = 0.15;
        upperLeft.rotation = 270;
        upperLeft.moveTo(-270, -300);
        sousyoku.addChild(upperLeft);

        var downRight = new Sprite(750, 750);
        downRight.image = game.assets['image03.png'];
        downRight.scaleX = 0.15;
        downRight.scaleY = 0.15;
        downRight.rotation = 90;
        downRight.moveTo(800, 250);
        sousyoku.addChild(downRight);

        var downLeft = new Sprite(750, 750);
        downLeft.image = game.assets['image03.png'];
        downLeft.scaleX = 0.15;
        downLeft.scaleY = 0.15;
        downLeft.rotation = 180;
        downLeft.moveTo(-270, 250);
        sousyoku.addChild(downLeft);

        //ボタンの画僧
        var buttonGroup01 = new Group();
        buttonGroup01.moveTo(540,140);
        //ボタンの背景
        var buttonBack = new Sprite(750, 750);
        buttonBack.image = game.assets['cardI01.png'];
        buttonBack.scaleX = 0.35;
        buttonBack.scaleY = 0.35;
        buttonBack.moveTo(-175, 0);
        buttonGroup01.addChild(buttonBack);
        //画像
        var button01 = new Sprite(400, 750);
        button01.image = game.assets['buttonImage01.png'];
        button01.scaleX = 0.35;
        button01.scaleY = 0.35;
        buttonGroup01.addChild(button01);
        //文章
        var buttonLabel01 = new Label("");
        buttonLabel01.width = 120;
        buttonLabel01.font = '16px "凸版文久明朝"';
        buttonLabel01.color = "rgb(255, 255, 255)";
        buttonLabel01.moveTo(145, 350);
        buttonGroup01.addChild(buttonLabel01);

        //ボタンの画像2
        var buttonGroup02 = new Group();
        buttonGroup02.moveTo(680,140);
        //ボタンの背景
        var buttonBack2 = new Sprite(750, 750);
        buttonBack2.image = game.assets['cardI01.png'];
        buttonBack2.scaleX = 0.35;
        buttonBack2.scaleY = 0.35;
        buttonBack2.moveTo(-175, 0);
        buttonGroup02.addChild(buttonBack2);
        //画像
        var button02 = new Sprite(400, 750);
        button02.image = game.assets['buttonImage02.png'];
        button02.scaleX = 0.35;
        button02.scaleY = 0.35;
        buttonGroup02.addChild(button02);
        //文章
        var buttonLabel02 = new Label("");
        buttonLabel02.width = 120;
        buttonLabel02.font = '16px "凸版文久明朝"';
        buttonLabel02.color = "rgb(255, 255, 255)";
        buttonLabel02.moveTo(145, 350);
        buttonGroup02.addChild(buttonLabel02);
        
        //ボタンの画像3
        var buttonGroup03 = new Group();
        buttonGroup03.moveTo(820,140);
        //ボタンの背景
        var buttonBack3 = new Sprite(750, 750);
        buttonBack3.image = game.assets['cardI01.png'];
        buttonBack3.scaleX = 0.35;
        buttonBack3.scaleY = 0.35;
        buttonBack3.moveTo(-175, 0);
        buttonGroup03.addChild(buttonBack3);
        //画像
        var button03 = new Sprite(400, 750);
        button03.image = game.assets['buttonImage03.png'];
        button03.scaleX = 0.35;
        button03.scaleY = 0.35;
        buttonGroup03.addChild(button03);
        //文章
        var buttonLabel03 = new Label("");
        buttonLabel03.width = 120;
        buttonLabel03.font = '16px "凸版文久明朝"';
        buttonLabel03.color = "rgb(255, 255, 255)";
        buttonLabel03.moveTo(145, 350);
        buttonGroup03.addChild(buttonLabel03);


        //WebUSB接続のためのシーンを作成
        var webusbScene = function(){
            var scene = new Scene();//新しいシーンを作る
            scene.backgroundColor = "rgb(255, 255, 224)";

            scene.addChild(sousyoku);
            
            var label = new Label("FeliCaリーダーを接続してください");
            label.width = 900;
            label.font = '50px "筑紫B丸ゴシック"';
            label.x = 260;
            label.y = 250;
            scene.addChild(label);

            var group = new Group();
            group.moveTo(270, 180);

            var button = new Sprite(750, 750);
            button.image = game.assets['buttonImage04.png'];
            button.scaleX = 0.5;
            button.scaleY = 0.5;
            group.addChild(button);

            var button_label = new Label("接続");
            button_label.font = '45px "凸版文久明朝"';
            button_label.color = "rgb(255, 255, 255)";
            button_label.width = 200;
            button_label.x = 330;
            button_label.y = 300;
            group.addChild(button_label);

            scene.addChild(group);
            
            group.ontouchstart = function(){
                //ボタンがクリックされた時に実行される
                const webUSBEvent = new CustomEvent('webUSBclick');
                document.dispatchEvent(webUSBEvent);

                //シーンを第１シーンに切り替える
                game.replaceScene(gameStartScene());
            };
            return scene;
        };

        var gameStartScene = function(){

            point = 4;
            
            var scene = new Scene();
            scene.backgroundColor = "rgb(255, 255, 224)";

            var backImage = new Sprite(1280, 720);
            backImage.image = game.assets['image07.png'];
            scene.addChild(backImage);

            scene.addChild(sousyoku);

            var back_image2 = new Sprite(750, 750);
            back_image2.image = game.assets['image02.png'];
            back_image2.moveTo(-5, -100);
            back_image2.scaleX = 0.5;
            back_image2.scaleY = 0.5;
            scene.addChild(back_image2);

            var title_group = new Group();
            title_group.moveTo(130, 240);

            var main_title = new Label("世界の幻獣の棲家");
            main_title.width = 600;
            main_title.font = '60px "凸版文久見出し明朝"';
            main_title.color = "rgb(85, 75, 50)";
            title_group.addChild(main_title);

            var sub_title = new Label("〜謎に包まれた存在たち〜");
            sub_title.width = 900;
            sub_title.font = '30px "凸版文久明朝"';
            sub_title.x = 60;
            sub_title.y = 80;
            title_group.addChild(sub_title);
            scene.addChild(title_group);


            var group = new Group();
            group.moveTo(-15, 200);

            var button = new Sprite(750, 750);
            button.image = game.assets['buttonImage04.png'];
            button.scaleX = 0.5;
            button.scaleY = 0.5;
            group.addChild(button);

            var button_label = new Label("スタート");
            button_label.font = '40px "凸版文久明朝"';
            button_label.color = "rgb(255, 255, 255)";
            button_label.width = 200;
            button_label.x = 295;
            button_label.y = 305;
            group.addChild(button_label);

            scene.addChild(group);
            
            group.ontouchstart = function(){
                game.replaceScene(game1Scene());
            };

            return scene;

        };


        //第１シーン
        var game1Scene = function(){
            var scene = new Scene();
            scene.backgroundColor = "rgb(255, 255, 224)";

            var timer = 120;

            buttonBack.opacity = 1;
            buttonBack2.opacity = 1;
            buttonBack3.opacity = 1;


            //背景画像を設定する
            var backImage = new Sprite(1280, 720);
            backImage.image = game.assets['image08.png'];
            scene.addChild(backImage);

            //問題番号の表示と、その装飾
            var quizNumber = new Group();
            quizNumber.moveTo(420,-220);
            //画像
            var quizNumberImage = new Sprite(750, 750);
            quizNumberImage.image = game.assets['buttonImage04.png'];
            quizNumberImage.scaleX = 0.35;
            quizNumberImage.scaleY = 0.35;
            quizNumber.addChild(quizNumberImage);
            //問題番号
            var quizNumberLabel = new Label("第一問");
            quizNumberLabel.width = 250;
            quizNumberLabel.font = '40px "凸版文久明朝"';
            quizNumberLabel.x = 314;
            quizNumberLabel.y = 316;
            quizNumber.addChild(quizNumberLabel);

            scene.addChild(quizNumber);

            //問題に関連した画像を用意する
            var quizImageB = new Sprite(750, 750);
            quizImageB.image = game.assets['quizImage01B.png'];
            quizImageB.scaleX = 0.65;
            quizImageB.scaleY = 0.65;
            quizImageB.moveTo(20, -90);
            scene.addChild(quizImageB);

            //問題文を表示する
            var label = new Label("深海に生息し、船を波間に引きずり込む　　巨大な海の幻獣、『クラーケン』。　　　　非常に攻撃的で敵意に満ちたこの幻獣は、　一体どこを棲家としているのだろうか？");
            label.width = 400;
            label.font = '20px "筑紫B丸ゴシック"';
            label.x = 690;
            label.y = 220;
            scene.addChild(label);


            //選択肢を準備する
            //選択肢は全部で3つ用意する


            //選択肢1 -> 正解へ
            scene.addChild(buttonGroup01);

            buttonBack.image = game.assets['cardI01.png'];

            buttonLabel01.text = "グリーンランドやノルウェー　沿岸";
            //デバック用
            //選択肢をクリックすると　正解　へ移動する
            buttonGroup01.ontouchstart = function(){
                game.replaceScene(gameTrue1Scene());
            };


            //選択肢2 -> 不正解
            scene.addChild(buttonGroup02);

            buttonBack2.image = game.assets['cardI01.png'];

            buttonLabel02.text = "太平洋や　　　オーストラリア沿岸";
            //デバック用
            //選択肢をクリックすると　不正解　へ移動する
            buttonGroup02.ontouchstart = function(){
                game.replaceScene(gameFalse2Scene());
            };


            //選択肢3 -> 不正解
            scene.addChild(buttonGroup03);

            buttonBack3.image = game.assets['cardI01.png'];

            buttonLabel03.text = "マリアナ諸島　東の沿岸";
            //デバック用
            //選択肢をクリックすると　不正解　へ移動する
            buttonGroup03.ontouchstart = function(){
                game.replaceScene(gameFalse1Scene());
            };


            //カードを置いた時間をカウントする
            //画像
            var countImage = new Sprite(750, 750);
            countImage.image = game.assets['image02.png'];
            countImage.scaleX = 0.2;
            countImage.scaleY = 0.2;
            countImage.moveTo(20, 160);
            scene.addChild(countImage);
            //文字列
            var count = new Label("Thinking...");
            count.width = 300;
            count.font = '50px "凸版文久明朝"';
            count.color = "rgb(0, 0, 0)";
            count.moveTo(285, 500);
            scene.addChild(count);
            

            //シーン全体の装飾
            scene.addChild(sousyoku);

            //Felicaリーダーにカードを置くと起こるイベント
            //全部で3つ
            //カード1を置いた時に起こるイベント
            document.addEventListener('felica1', function(e){
                timer = 120;
                scene.onenterframe = function(){

                    if(game.frame % 10 <= 0){
                        buttonBack.opacity = 0.2;
                    }
                    else if(game.frame % 10 <= 1){
                        buttonBack.opacity = 0.4;
                    }
                    else if(game.frame % 10 <= 2){
                        buttonBack.opacity = 0.6;
                    }
                    else{
                        buttonBack.opacity = 0.8;
                    };
    
                    var time = Math.floor(timer/game.fps);
                    count.text = time;
                    count.font = '100px "凸版文久明朝"';
                    count.moveTo(370, 460);
                    timer -= 1;
                    if(time == 0){
                        game.replaceScene(gameTrue1Scene());
                    };
                };
            });
            //カード2を置いた時に起こるイベント
            document.addEventListener('felica2', function(e){
                timer = 120;
                scene.onenterframe = function(){

                    if(game.frame % 10 <= 0){
                        buttonBack2.opacity = 0.2;
                    }
                    else if(game.frame % 10 <= 1){
                        buttonBack2.opacity = 0.4;
                    }
                    else if(game.frame % 10 <= 2){
                        buttonBack2.opacity = 0.6;
                    }
                    else{
                        buttonBack2.opacity = 0.8;
                    };

                    var time = Math.floor(timer/game.fps);
                    count.text = time;
                    count.font = '100px "凸版文久明朝"';
                    count.moveTo(370, 460);
                    timer -= 1;
                    if(time == 0){
                        game.replaceScene(gameFalse1Scene());
                    };
                };
            });
            //カード3を置いた時に起こるイベント
            document.addEventListener('felica3', function(e){
                timer = 120;
                scene.onenterframe = function(){

                    if(game.frame % 10 <= 0){
                        buttonBack3.opacity = 0.2;
                    }
                    else if(game.frame % 10 <= 1){
                        buttonBack3.opacity = 0.4;
                    }
                    else if(game.frame % 10 <= 2){
                        buttonBack3.opacity = 0.6;
                    }
                    else{
                        buttonBack3.opacity = 0.8;
                    };

                    var time = Math.floor(timer/game.fps);
                    count.text = time;
                    count.font = '100px "凸版文久明朝"';
                    count.moveTo(370, 460);
                    timer -= 1;
                    if(time == 0){
                        game.replaceScene(gameFalse2Scene());
                    };
                };
            });

            //カードを離した時に起こるイベント
            document.addEventListener('felicaOff', function(e){
                scene.onenterframe = function(){

                    buttonBack.opacity = 1;
                    buttonBack2.opacity = 1;
                    buttonBack3.opacity = 1;

                    count.text = "Thinking...";
                    count.width = 300;
                    count.font = '50px "凸版文久明朝"';
                    count.color = "rgb(0, 0, 0)";
                    count.moveTo(285, 500);        
                };
            });

            return scene;
        };


        var gameTrue1Scene = function(){
            var scene = new Scene();
            scene.backgroundColor = "rgb(255, 255, 224)";


            //>>>>>
            var timer = 180;
            
            var replaceSceneFlag = false;

            // シーン切り替えのタイマー処理
            var replaceSceneTimer = function() {
                if(replaceSceneFlag) game.replaceScene(game2Scene());
            };

            document.addEventListener('felicaOff', function(e){
                replaceSceneFlag = true;
                // シーン切り替えのタイマーを５秒でセット
                setTimeout(replaceSceneTimer, 5000);
            });

            scene.onenterframe = function(){
                var time = Math.floor(timer / game.fps);

                timer -= 1;
                
                if(time <= 0){
                    nextLabel.text = "カードを離して　次の問題へ";
                    nextLabel.width = 200;
                    nextLabel.font = '25px "凸版文久明朝"';
                    nextLabel.color = "rgb(0, 0, 0)";
                    nextLabel.moveTo(275, 308);
        
                   if(replaceSceneFlag) {
                        game.replaceScene(game2Scene());
                   }
                };
            };
                //<<<<<


            //背景画像を設定する
            var backImage = new Sprite(1280, 720);
            backImage.image = game.assets['image09.png'];
            scene.addChild(backImage);

            //回答に関連した画像を用意する
            var quizImageB = new Sprite(750, 750);
            quizImageB.image = game.assets['quizImage01C.png'];
            quizImageB.scaleX = 0.65;
            quizImageB.scaleY = 0.65;
            quizImageB.moveTo(20, -90);
            scene.addChild(quizImageB);


            var buttonBack3 = new Sprite(750, 750);
            buttonBack3.image = game.assets['cardI01.png'];
            buttonBack3.scaleX = 0.4;
            buttonBack3.scaleY = 0.4;
            buttonBack3.moveTo(380, -120);
            scene.addChild(buttonBack3);

            var button01 = new Sprite(400, 750);
            button01.image = game.assets['buttonImage01.png'];
            button01.scaleX = 0.4;
            button01.scaleY = 0.4;
            button01.moveTo(555,-120);
            scene.addChild(button01);

                        
            //解説文を表示する
            var label = new Label("クラーケンの起源は北欧民話からだと言われ、　その姿形は様々。　　　世界最大のイカ　　　「ダイオウイカ」のものもあれば、タコとイカをミックスしたような　　見た目のものもある。");
            label.width = 200;
            label.font = '18px "筑紫B丸ゴシック"';
            label.x = 870;
            label.y = 160;
            scene.addChild(label);

            //画像
            var countImage = new Sprite(750, 750);
            countImage.image = game.assets['image02.png'];
            countImage.scaleX = 0.2;
            countImage.scaleY = 0.2;
            countImage.moveTo(20, 160);
            scene.addChild(countImage);
            //文字列
            var count = new Label("正解");
            count.width = 300;
            count.font = '100px "凸版文久明朝"';
            count.color = "rgb(0, 0, 0)";
            count.moveTo(290, 460);
            scene.addChild(count);


            var silhouette = new Sprite(750, 750);
            silhouette.image = game.assets['quizImage02A.png'];
            silhouette.scaleX = 0.4;
            silhouette.scaleY = 0.4;
            silhouette.moveTo(500,150);
            scene.addChild(silhouette);
            
            //シーン全体の装飾
            scene.addChild(sousyoku);

            var nextGroup = new Group();
            nextGroup.moveTo(500, 230);

            var nextImage = new Sprite(750, 750);
            nextImage.image = game.assets['buttonImage04.png'];
            nextImage.scaleX = 0.55;
            nextImage.scaleY = 0.4;
            nextGroup.addChild(nextImage);

            var nextLabel = new Label("次の問題へ");
            nextLabel.width = 300;
            nextLabel.font = '40px "凸版文久明朝"';
            nextLabel.color = "rgb(0, 0, 0)";
            nextLabel.moveTo(275, 312);
            nextGroup.addChild(nextLabel);

            scene.addChild(nextGroup);

            nextGroup.ontouchstart = function(){
                game.replaceScene(game2Scene());
            };
            
            return scene;
        };

        var gameFalse1Scene = function(){

            point -= 1;

            var scene = new Scene();
            scene.backgroundColor = "rgb(255, 255, 224)";

            var timer = 180;

            scene.onenterframe = function(){
                
                var time = Math.floor(timer / game.fps);

                timer -= 1;

                if(time <= 0){
                    game.replaceScene(game1Scene());
                };

            };
            

            //背景画像を設定する
            var backImage = new Sprite(1280, 720);
            backImage.image = game.assets['image08.png'];
            scene.addChild(backImage);

            var buttonBack3 = new Sprite(750, 750);
            buttonBack3.image = game.assets['cardI01.png'];
            buttonBack3.scaleX = 0.4;
            buttonBack3.scaleY = 0.4;
            buttonBack3.moveTo(380, -90);
            scene.addChild(buttonBack3);

            var button01 = new Sprite(400, 750);
            button01.image = game.assets['buttonImage02.png'];
            button01.scaleX = 0.4;
            button01.scaleY = 0.4;
            button01.moveTo(555,-90);
            scene.addChild(button01);

                        
            //解説文を表示する
            var label = new Label("違うようだ。もう一度考えてみよう。");
            label.width = 200;
            label.font = '20px "筑紫B丸ゴシック"';
            label.x = 870;
            label.y = 290;
            scene.addChild(label);

            //画像
            var countImage = new Sprite(750, 750);
            countImage.image = game.assets['image02.png'];
            countImage.scaleX = 0.4;
            countImage.scaleY = 0.4;
            countImage.moveTo(30, -15);
            scene.addChild(countImage);
            //文字列
            var count = new Label("不正解");
            count.width = 300;
            count.font = '100px "凸版文久明朝"';
            count.color = "rgb(0, 0, 0)";
            count.moveTo(255, 285);
            scene.addChild(count);
            
            //シーン全体の装飾
            scene.addChild(sousyoku);

            var nextGroup = new Group();
            nextGroup.moveTo(500, 180);

            var nextImage = new Sprite(750, 750);
            nextImage.image = game.assets['buttonImage04.png'];
            nextImage.scaleX = 0.55;
            nextImage.scaleY = 0.4;
            nextGroup.addChild(nextImage);

            var nextLabel = new Label("問題へ戻る");
            nextLabel.width = 300;
            nextLabel.font = '30px "凸版文久明朝"';
            nextLabel.color = "rgb(0, 0, 0)";
            nextLabel.moveTo(295, 320);
            nextGroup.addChild(nextLabel);

            scene.addChild(nextGroup);

            nextGroup.ontouchstart = function(){
                game.replaceScene(game1Scene());
            };

            return scene;
        };

        var gameFalse2Scene = function(){

            point -= 1;

            var scene = new Scene();
            scene.backgroundColor = "rgb(255, 255, 224)";

            var timer = 180;

            scene.onenterframe = function(){
                
                var time = Math.floor(timer / game.fps);

                timer -= 1;

                if(time <= 0){
                    game.replaceScene(game1Scene());
                };

            };


            //背景画像を設定する
            var backImage = new Sprite(1280, 720);
            backImage.image = game.assets['image08.png'];
            scene.addChild(backImage);

            var buttonBack3 = new Sprite(750, 750);
            buttonBack3.image = game.assets['cardI01.png'];
            buttonBack3.scaleX = 0.4;
            buttonBack3.scaleY = 0.4;
            buttonBack3.moveTo(380, -90);
            scene.addChild(buttonBack3);

            var button01 = new Sprite(400, 750);
            button01.image = game.assets['buttonImage03.png'];
            button01.scaleX = 0.4;
            button01.scaleY = 0.4;
            button01.moveTo(555,-90);
            scene.addChild(button01);

                        
            //解説文を表示する
            var label = new Label("違うようだ。もう一度考えてみよう。");
            label.width = 200;
            label.font = '20px "筑紫B丸ゴシック"';
            label.x = 870;
            label.y = 290;
            scene.addChild(label);

            //画像
            var countImage = new Sprite(750, 750);
            countImage.image = game.assets['image02.png'];
            countImage.scaleX = 0.4;
            countImage.scaleY = 0.4;
            countImage.moveTo(30, -15);
            scene.addChild(countImage);
            //文字列
            var count = new Label("不正解");
            count.width = 300;
            count.font = '100px "凸版文久明朝"';
            count.color = "rgb(0, 0, 0)";
            count.moveTo(255, 285);
            scene.addChild(count);
            
            //シーン全体の装飾
            scene.addChild(sousyoku);

            var nextGroup = new Group();
            nextGroup.moveTo(500, 180);

            var nextImage = new Sprite(750, 750);
            nextImage.image = game.assets['buttonImage04.png'];
            nextImage.scaleX = 0.55;
            nextImage.scaleY = 0.4;
            nextGroup.addChild(nextImage);

            var nextLabel = new Label("問題へ戻る");
            nextLabel.width = 300;
            nextLabel.font = '30px "凸版文久明朝"';
            nextLabel.color = "rgb(0, 0, 0)";
            nextLabel.moveTo(295, 320);
            nextGroup.addChild(nextLabel);

            scene.addChild(nextGroup);

            nextGroup.ontouchstart = function(){
                game.replaceScene(game1Scene());
            };

            return scene;
        };
        
        var game2Scene = function(){
            var scene = new Scene();
            scene.backgroundColor = "rgb(255, 255, 224)";

            var timer = 120;

            buttonBack.opacity = 1;
            buttonBack2.opacity = 1;
            buttonBack3.opacity = 1;


            //背景画像を設定する
            var backImage = new Sprite(1280, 720);
            backImage.image = game.assets['image08.png'];
            scene.addChild(backImage);

            //問題番号の表示と、その装飾
            var quizNumber = new Group();
            quizNumber.moveTo(420,-220);
            //画像
            var quizNumberImage = new Sprite(750, 750);
            quizNumberImage.image = game.assets['buttonImage04.png'];
            quizNumberImage.scaleX = 0.35;
            quizNumberImage.scaleY = 0.35;
            quizNumber.addChild(quizNumberImage);
            //問題番号
            var quizNumberLabel = new Label("第二問");
            quizNumberLabel.width = 250;
            quizNumberLabel.font = '40px "凸版文久明朝"';
            quizNumberLabel.x = 314;
            quizNumberLabel.y = 316;
            quizNumber.addChild(quizNumberLabel);

            scene.addChild(quizNumber);

            //問題に関連した画像を用意する
            var quizImageB = new Sprite(750, 750);
            quizImageB.image = game.assets['quizImage02B.png'];
            quizImageB.scaleX = 0.65;
            quizImageB.scaleY = 0.65;
            quizImageB.moveTo(20, -90);
            scene.addChild(quizImageB);

            //問題文を表示する
            var label = new Label("動物と動物を組み合わせた伝説上の生き物、『キマイラ』。ギリシア神話にて登場するこの生物は、一体どこで誕生したのだろうか？");
            label.width = 400;
            label.font = '20px "筑紫B丸ゴシック"';
            label.x = 690;
            label.y = 220;
            scene.addChild(label);


            //選択肢を準備する
            //選択肢は全部で3つ用意する


            //選択肢1 -> 不正解へ
            scene.addChild(buttonGroup01);

            buttonBack.image = game.assets['cardI02.png'];

            buttonLabel01.text = "雲の中";
            //デバック用
            //選択肢をクリックすると　不正解　へ移動する
            buttonGroup01.ontouchstart = function(){
                game.replaceScene(gameFalse122Scene());
            };


            //選択肢2 -> 正解へ
            scene.addChild(buttonGroup02);

            buttonBack2.image = game.assets['cardI02.png'];

            buttonLabel02.text = "手のひらの上";
            //デバック用
            //選択肢をクリックすると　正解　へ移動する
            buttonGroup02.ontouchstart = function(){
                game.replaceScene(gameTrue2Scene());
            };


            //選択肢3 -> 不正解
            scene.addChild(buttonGroup03);

            buttonBack3.image = game.assets['cardI02.png'];

            buttonLabel03.text = "湖の近くの洞穴";
            //デバック用
            //選択肢をクリックすると　不正解　へ移動する
            buttonGroup03.ontouchstart = function(){
                game.replaceScene(gameFalse22Scene());
            };


            //カードを置いた時間をカウントする
            //画像
            var countImage = new Sprite(750, 750);
            countImage.image = game.assets['image02.png'];
            countImage.scaleX = 0.2;
            countImage.scaleY = 0.2;
            countImage.moveTo(20, 160);
            scene.addChild(countImage);
            //文字列
            var count = new Label("Thinking...");
            count.width = 300;
            count.font = '50px "凸版文久明朝"';
            count.color = "rgb(0, 0, 0)";
            count.moveTo(285, 500);
            scene.addChild(count);
            

            //シーン全体の装飾
            scene.addChild(sousyoku);

            //Felicaリーダーにカードを置くと起こるイベント
            //全部で3つ
            //カード1を置いた時に起こるイベント
            document.addEventListener('felica1', function(e){
                timer = 120;
                scene.onenterframe = function(){

                    if(game.frame % 10 <= 0){
                        buttonBack.opacity = 0.2;
                    }
                    else if(game.frame % 10 <= 1){
                        buttonBack.opacity = 0.4;
                    }
                    else if(game.frame % 10 <= 2){
                        buttonBack.opacity = 0.6;
                    }
                    else{
                        buttonBack.opacity = 0.8;
                    };

                    var time = Math.floor(timer/game.fps);
                    count.text = time;
                    count.font = '100px "凸版文久明朝"';
                    count.moveTo(370, 460);
                    timer -= 1;
                    if(time == 0){
                        game.replaceScene(gameFalse12Scene());
                    };
                };
            });
            //カード2を置いた時に起こるイベント
            document.addEventListener('felica2', function(e){
                timer = 120;
                scene.onenterframe = function(){

                    if(game.frame % 10 <= 0){
                        buttonBack2.opacity = 0.2;
                    }
                    else if(game.frame % 10 <= 1){
                        buttonBack2.opacity = 0.4;
                    }
                    else if(game.frame % 10 <= 2){
                        buttonBack2.opacity = 0.6;
                    }
                    else{
                        buttonBack2.opacity = 0.8;
                    };

                    var time = Math.floor(timer/game.fps);
                    count.text = time;
                    count.font = '100px "凸版文久明朝"';
                    count.moveTo(370, 460);
                    timer -= 1;
                    if(time == 0){
                        game.replaceScene(gameTrue2Scene());
                    };
                };
            });
            //カード3を置いた時に起こるイベント
            document.addEventListener('felica3', function(e){
                timer = 120;
                scene.onenterframe = function(){

                    if(game.frame % 10 <= 0){
                        buttonBack3.opacity = 0.2;
                    }
                    else if(game.frame % 10 <= 1){
                        buttonBack3.opacity = 0.4;
                    }
                    else if(game.frame % 10 <= 2){
                        buttonBack3.opacity = 0.6;
                    }
                    else{
                        buttonBack3.opacity = 0.8;
                    };

                    var time = Math.floor(timer/game.fps);
                    count.text = time;
                    count.font = '100px "凸版文久明朝"';
                    count.moveTo(370, 460);
                    timer -= 1;
                    if(time == 0){
                        game.replaceScene(gameFalse22Scene());
                    };
                };
            });

            //カードを離した時に起こるイベント
            document.addEventListener('felicaOff', function(e){
                scene.onenterframe = function(){

                    buttonBack.opacity = 1;
                    buttonBack2.opacity = 1;
                    buttonBack3.opacity = 1;

                    count.text = "Thinking...";
                    count.width = 300;
                    count.font = '50px "凸版文久明朝"';
                    count.color = "rgb(0, 0, 0)";
                    count.moveTo(285, 500);        
                };
            });

            return scene;
        };

        var gameTrue2Scene = function(){
            var scene = new Scene();
            scene.backgroundColor = "rgb(255, 255, 224)";

            var timer = 180;
            
            var replaceSceneFlag = false;

            // シーン切り替えのタイマー処理
            var replaceSceneTimer = function() {
                if(replaceSceneFlag) game.replaceScene(gameFinScene());
            };

            document.addEventListener('felicaOff', function(e){
                replaceSceneFlag = true;
                // シーン切り替えのタイマーを５秒でセット
                setTimeout(replaceSceneTimer, 5000);
            });

            scene.onenterframe = function(){
                var time = Math.floor(timer / game.fps);

                timer -= 1;

                if(time <= 0){
                    nextLabel.text = "カードを離して　結果へ";
                    nextLabel.width = 200;
                    nextLabel.font = '25px "凸版文久明朝"';
                    nextLabel.color = "rgb(0, 0, 0)";
                    nextLabel.moveTo(275, 308);
        
                    if(replaceSceneFlag) {
                        game.replaceScene(gameFinScene());
                   };
                };

            };


            //背景画像を設定する
            var backImage = new Sprite(1280, 720);
            backImage.image = game.assets['image09.png'];
            scene.addChild(backImage);

            //回答に関連した画像を用意する
            var quizImageB = new Sprite(750, 750);
            quizImageB.image = game.assets['quizImage02C.png'];
            quizImageB.scaleX = 0.65;
            quizImageB.scaleY = 0.65;
            quizImageB.moveTo(20, -90);
            scene.addChild(quizImageB);


            var buttonBack3 = new Sprite(750, 750);
            buttonBack3.image = game.assets['cardI02.png'];
            buttonBack3.scaleX = 0.4;
            buttonBack3.scaleY = 0.4;
            buttonBack3.moveTo(380, -120);
            scene.addChild(buttonBack3);

            var button01 = new Sprite(400, 750);
            button01.image = game.assets['buttonImage02.png'];
            button01.scaleX = 0.4;
            button01.scaleY = 0.4;
            button01.moveTo(555,-120);
            scene.addChild(button01);

                        
            //解説文を表示する
            var label = new Label("キマイラは巨人テューポーンと、半身が蛇の怪物エキドナとの娘です。キマイラは恐怖や不吉の象徴で、何でも食い荒らす、非常に危険な怪物として恐れられていました。");
            label.width = 200;
            label.font = '18px "筑紫B丸ゴシック"';
            label.x = 870;
            label.y = 160;
            scene.addChild(label);

            //画像
            var countImage = new Sprite(750, 750);
            countImage.image = game.assets['image02.png'];
            countImage.scaleX = 0.2;
            countImage.scaleY = 0.2;
            countImage.moveTo(20, 160);
            scene.addChild(countImage);
            //文字列
            var count = new Label("正解");
            count.width = 300;
            count.font = '100px "凸版文久明朝"';
            count.color = "rgb(0, 0, 0)";
            count.moveTo(290, 460);
            scene.addChild(count);


            var silhouette = new Sprite(750, 750);
            silhouette.image = game.assets['quizImage02A.png'];
            silhouette.scaleX = 0.4;
            silhouette.scaleY = 0.4;
            silhouette.moveTo(500,150);
            scene.addChild(silhouette);
            
            //シーン全体の装飾
            scene.addChild(sousyoku);

            var nextGroup = new Group();
            nextGroup.moveTo(500, 230);

            var nextImage = new Sprite(750, 750);
            nextImage.image = game.assets['buttonImage04.png'];
            nextImage.scaleX = 0.55;
            nextImage.scaleY = 0.4;
            nextGroup.addChild(nextImage);

            var nextLabel = new Label("最終結果へ");
            nextLabel.width = 300;
            nextLabel.font = '40px "凸版文久明朝"';
            nextLabel.color = "rgb(0, 0, 0)";
            nextLabel.moveTo(275, 312);
            nextGroup.addChild(nextLabel);

            scene.addChild(nextGroup);

            nextGroup.ontouchstart = function(){
                game.replaceScene(gameFinScene());
            };
          
            return scene;
        };

        var gameFalse12Scene = function(){

            point -= 1;

            var scene = new Scene();
            scene.backgroundColor = "rgb(255, 255, 224)";

            var timer = 180;

            scene.onenterframe = function(){
                
                var time = Math.floor(timer / game.fps);

                timer -= 1;

                if(time <= 0){
                    game.replaceScene(game2Scene());
                };

            };


            //背景画像を設定する
            var backImage = new Sprite(1280, 720);
            backImage.image = game.assets['image08.png'];
            scene.addChild(backImage);

            var buttonBack3 = new Sprite(750, 750);
            buttonBack3.image = game.assets['cardI02.png'];
            buttonBack3.scaleX = 0.4;
            buttonBack3.scaleY = 0.4;
            buttonBack3.moveTo(380, -90);
            scene.addChild(buttonBack3);

            var button01 = new Sprite(400, 750);
            button01.image = game.assets['buttonImage01.png'];
            button01.scaleX = 0.4;
            button01.scaleY = 0.4;
            button01.moveTo(555,-90);
            scene.addChild(button01);

                        
            //解説文を表示する
            var label = new Label("違うようだ。もう一度考えてみよう。");
            label.width = 200;
            label.font = '20px "筑紫B丸ゴシック"';
            label.x = 870;
            label.y = 290;
            scene.addChild(label);

            //画像
            var countImage = new Sprite(750, 750);
            countImage.image = game.assets['image02.png'];
            countImage.scaleX = 0.4;
            countImage.scaleY = 0.4;
            countImage.moveTo(30, -15);
            scene.addChild(countImage);
            //文字列
            var count = new Label("不正解");
            count.width = 300;
            count.font = '100px "凸版文久明朝"';
            count.color = "rgb(0, 0, 0)";
            count.moveTo(255, 285);
            scene.addChild(count);
            
            //シーン全体の装飾
            scene.addChild(sousyoku);

            var nextGroup = new Group();
            nextGroup.moveTo(500, 180);

            var nextImage = new Sprite(750, 750);
            nextImage.image = game.assets['buttonImage04.png'];
            nextImage.scaleX = 0.55;
            nextImage.scaleY = 0.4;
            nextGroup.addChild(nextImage);

            var nextLabel = new Label("問題へ戻る");
            nextLabel.width = 300;
            nextLabel.font = '30px "凸版文久明朝"';
            nextLabel.color = "rgb(0, 0, 0)";
            nextLabel.moveTo(295, 320);
            nextGroup.addChild(nextLabel);

            scene.addChild(nextGroup);

            nextGroup.ontouchstart = function(){
                game.replaceScene(game2Scene());
            };

            return scene;
        };


        var gameFalse22Scene = function(){

            point -= 1;

            var scene = new Scene();
            scene.backgroundColor = "rgb(255, 255, 224)";

            var timer = 180;

            scene.onenterframe = function(){
                
                var time = Math.floor(timer / game.fps);

                timer -= 1;

                if(time <= 0){
                    game.replaceScene(game2Scene());
                };

            };


            //背景画像を設定する
            var backImage = new Sprite(1280, 720);
            backImage.image = game.assets['image08.png'];
            scene.addChild(backImage);

            var buttonBack3 = new Sprite(750, 750);
            buttonBack3.image = game.assets['cardI02.png'];
            buttonBack3.scaleX = 0.4;
            buttonBack3.scaleY = 0.4;
            buttonBack3.moveTo(380, -90);
            scene.addChild(buttonBack3);

            var button01 = new Sprite(400, 750);
            button01.image = game.assets['buttonImage03.png'];
            button01.scaleX = 0.4;
            button01.scaleY = 0.4;
            button01.moveTo(555,-90);
            scene.addChild(button01);

                        
            //解説文を表示する
            var label = new Label("違うようだ。もう一度考えてみよう。");
            label.width = 200;
            label.font = '20px "筑紫B丸ゴシック"';
            label.x = 870;
            label.y = 290;
            scene.addChild(label);

            //画像
            var countImage = new Sprite(750, 750);
            countImage.image = game.assets['image02.png'];
            countImage.scaleX = 0.4;
            countImage.scaleY = 0.4;
            countImage.moveTo(30, -15);
            scene.addChild(countImage);
            //文字列
            var count = new Label("不正解");
            count.width = 300;
            count.font = '100px "凸版文久明朝"';
            count.color = "rgb(0, 0, 0)";
            count.moveTo(255, 285);
            scene.addChild(count);
            
            //シーン全体の装飾
            scene.addChild(sousyoku);

            var nextGroup = new Group();
            nextGroup.moveTo(500, 180);

            var nextImage = new Sprite(750, 750);
            nextImage.image = game.assets['buttonImage04.png'];
            nextImage.scaleX = 0.55;
            nextImage.scaleY = 0.4;
            nextGroup.addChild(nextImage);

            var nextLabel = new Label("問題へ戻る");
            nextLabel.width = 300;
            nextLabel.font = '30px "凸版文久明朝"';
            nextLabel.color = "rgb(0, 0, 0)";
            nextLabel.moveTo(295, 320);
            nextGroup.addChild(nextLabel);

            scene.addChild(nextGroup);

            nextGroup.ontouchstart = function(){
                game.replaceScene(game2Scene());
            };

            return scene;
        };


        var gameFinScene = function(){
            var scene = new Scene();
            scene.backgroundColor = "rgb(255, 255, 224)";

            var backImage = new Sprite(1280, 720);
            backImage.image = game.assets['image07.png'];
            backImage.scaleX = -1;
            scene.addChild(backImage);

            //シーン全体の装飾
            scene.addChild(sousyoku);

            var back_image2 = new Sprite(750, 750);
            back_image2.image = game.assets['image02.png'];
            back_image2.moveTo(545, -120);
            back_image2.scaleX = 0.5;
            back_image2.scaleY = 0.5;
            scene.addChild(back_image2);

            var result = new Sprite(750, 750);
            result.image = game.assets['image02.png'];
            result.moveTo(540, -120);
            result.scaleX = 0.7;
            result.scaleY = 0.7;
            scene.addChild(result);


            var title_group = new Group();
            title_group.moveTo(680, 400);

            var main_title = new Label("フェニックス級");
            main_title.width = 600;
            main_title.font = '60px "凸版文久見出し明朝"';
            main_title.color = "rgb(85, 75, 50)";
            title_group.addChild(main_title);

            var sub_title = new Label("あなたは・・・");
            sub_title.width = 900;
            sub_title.font = '30px "凸版文久明朝"';
            sub_title.x = 60;
            sub_title.y = -23;
            title_group.addChild(sub_title);

            var label = new Label("もう一度遊ぶと結果が変わるかも・・・？");
            label.width = 900;
            label.font = '20px "凸版文久明朝"';
            label.moveTo(40, 80);
            title_group.addChild(label);

            scene.addChild(title_group);

            if(point == 4){
                result.image = game.assets['image11.png'];
            }
            else if(point >= 0 && point <= 3){
                result.image = game.assets['image01.png'];
                main_title.text = "ケルピー級";
            }
            else if(point < 0){
                result.image = game.assets['image10.png'];
                result.scaleX = 0.6;
                result.scaleY = 0.6;
                main_title.text = "ジャッカロープ級";
            }


            var group = new Group();
            group.moveTo(538, 250);

            var button = new Sprite(750, 750);
            button.image = game.assets['buttonImage04.png'];
            button.scaleX = 0.5;
            button.scaleY = 0.5;
            group.addChild(button);

            var button_label = new Label("最初へ戻る");
            button_label.font = '30px "凸版文久明朝"';
            button_label.color = "rgb(255, 255, 255)";
            button_label.width = 200;
            button_label.x = 297;
            button_label.y = 308;
            group.addChild(button_label);

            scene.addChild(group);
            
            group.ontouchstart = function(){
                game.replaceScene(gameStartScene());
            };

            return scene;

        };

        game.replaceScene(webusbScene());
    };

    game.start();
}