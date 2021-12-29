enchant();

window.onload = function(){
    var game = new Game(1280, 720); 

    game.preload('./images/image10.png');
    game.preload('./images/CardImage_Witch.jpeg');
    game.preload('./images/A_OK.jpg');
    game.preload('./images/B_OK.jpg');
    game.preload('./images/button01.png');

    game.onload = function(){

        var imageWitch = new Sprite(638, 1010);
        imageWitch.image = game.assets['./images/CardImage_Witch.jpeg'];

        var okA = new Sprite(929, 1473);
        okA.image = game.assets['./images/A_OK.jpg'];

        var okB = new Sprite(898, 1066);
        okB.image = game.assets['./images/B_OK.jpg'];

        var button01 = new Sprite(64, 64);
        button01.image = game.assets['./images/button01.png'];

        var webusbScene = function(){

            var scene = new Scene();
            scene.backgroundColor = "rgb(233, 233, 233)";

            var aLabel = new Label("TATCH TO OPACITY->1.0 : RED");
            aLabel.width = 500;
            aLabel.font = '30px "Constantia"';
            aLabel.moveTo(50, 100);
            scene.addChild(aLabel);

            var bLabel = new Label("TATCH TO OPACITY->1.0 : BLUE");
            bLabel.width = 500;
            bLabel.font = '30px "Constantia"';
            bLabel.moveTo(800, 100);
            scene.addChild(bLabel);

            scene.addChild(okA);
            okA.scale(0.35, 0.35);
            okA.moveTo(-200, -300);
            okA.opacity = 0.0;

            scene.addChild(okB);
            okB.scale(0.4, 0.4);
            okB.moveTo(570, -100);
            okB.opacity = 0.0;

            var nextButton = new Group();
            nextButton.moveTo(0, 0);

            var button01Label = new Label("CLICK TO START!!");
            button01Label.width = 300;
            button01Label.font = '40px "Cambria"';
            button01Label.moveTo(490, 470);
            nextButton.addChild(button01Label);
            button01Label.opacity = 0.0;

            button01.scale(2, 2);
            button01.moveTo(620, 360);
            nextButton.addChild(button01);
            button01.opacity = 0.0;

            scene.addChild(nextButton);

            aLabel.ontouchstart = function(){
                //const webUSBAEvent = new CustomEvent('webUSBAclick');
                //document.dispatchEvent(webUSBAEvent);
                scene.onenterframe = function(){
                    okA.opacity += 0.1;

                    if(okA.opacity >= 1 && okB.opacity >= 1){
                        button01Label.opacity += 0.1;
                        button01.opacity += 0.1;

                        nextButton.y -= 10;

                        if(nextButton.y <= -100){
                            nextButton.y = -100;

                            nextButton.ontouchstart = function(){
                                game.replaceScene(gameStartScene());
                            }
                        }
                    };
                };
            };

            bLabel.ontouchstart = function(){
                //const webUSBBEvent = new CustomEvent('webUSBBclick');
                //document.dispatchEvent(webUSBBEvent);
                scene.onenterframe = function(){
                    okB.opacity += 0.1;

                    if(okA.opacity >= 1 && okB.opacity >= 1){
                        button01Label.opacity += 0.1;
                        button01.opacity += 0.1;

                        nextButton.y -= 10;

                        if(nextButton.y <= -100){
                            nextButton.y = -100;

                            nextButton.ontouchstart = function(){
                                game.replaceScene(gameStartScene());
                            }
                        }
                    };
                };
            };

            //var IMAGE_WITCH = imageWitch;
            //IMAGE_WITCH.moveTo(300, -100);
            //scene.addChild(IMAGE_WITCH);

            //scene.addChild(imageWitch);

            return scene;

        };

        var gameStartScene = function(){
            var scene = new Scene();
            scene.backgroundColor = "rgb(233, 233, 233)";

            return scene;

        };

        game.replaceScene(webusbScene());
    };

    game.start();
};