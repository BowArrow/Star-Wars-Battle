

function label() {

}

function loadCharacter(para) {
    $(para).each(function () {
        var div = $("<div>");
        var name = ($(this).attr("id"));
        var appendData = $(`#id${name}`)
        div.addClass(`dropdown-content`);
        div.attr("id", `label${name}`)
        div.css({ "bottom": "-68px", "position": "absolute", "color": "white", "width": "120px" })
        div.appendTo(appendData);
        var label = $(`#label${name}`);
        var a = $("<a>");
        var aTwo = $("<a>")
        var health = ($(this).attr("data-Health"));
        var attack = ($(this).attr("data-Attack"));
        aTwo.text(name);
        aTwo.appendTo(label);
        a.text("HP: " + health + " " + "AP: " + attack);
        a.appendTo(label);
    });
}


gameObj = {
    elements: {
        characters: $("#characters"),
        enemies: $("#enemies"),
        characterReady: $("#character-container"),
        enemyReady: $("#enemy-container"),
        sounds: {

        }
    },
    images: {
        characters: ["assets/images/reySelect.png", "assets/images/yodaSelect.png", "assets/images/chewieSelect.png", "assets/images/lukeSelect.png"],
        enemies: ["assets/images/stormtrooperSelect.png", "assets/images/kyloSelect.png", "assets/images/starkillerSelect.png", "assets/images/vaderSelect.png"],
        ready: {
            characters: ["assets/images/Ray2.png", "assets/images/Yoda3.png", "assets/images/chewie1.png", "assets/images/Luke2.png"],
            enemies: ["assets/images/StormTrooper.png", "assets/images/kylo1.png", "assets/images/starkiller1.png", "assets/images/Vader1.png"]
        }
    },
    arrays: {
        characters: ["Rey", "Yoda", "Chewie", "Luke"],
        enemies: ["Trooper", "Kylo", "Starkiller", "Vader"]
    },
    counters: {
        attack: {
            characters: [6, 6, 6, 6],
            enemies: [5, 10, 20, 25],
        },
        health: {
            characters: [250, 250, 250, 250],
            enemies: [100, 150, 200, 250]
        }
    },
    strings: {

    },
    bool: {
        select: {
            characters: false,
            enemies: false
        },
        characterLoad: {
            characters: false,
            enemies: false
        }
    }

};

var element = gameObj.elements;
var sound = gameObj.elements.sounds;
var image = gameObj.images;
var counter = gameObj.counters;
var array = gameObj.arrays;
var string = gameObj.strings;
var attack = gameObj.counters.attack;
var health = gameObj.counters.health;
var select = gameObj.bool.select;
var loader = gameObj.bool.characterLoad;
var ready = gameObj.images.ready;
var heroHCount = 0;
var enemyHCount = 0;
var heroACount = 6;

function start() {
    $(".dropdown").remove();
    $("h2").remove();
    select.characters = false;
    select.enemies = false;
    loader.characters = false;
    loader.enemies = false;
    heroHCount = 0;
    enemyHCount = 0;
    heroACount = 6;
    //Loop that creates the character images
    for (var i = 0; i < array.characters.length; i++) {
        var characterImage = $("<img>");
        characterImage.addClass(`character  img-fluid float-left`);
        characterImage.attr("src", image.characters[i]);
        characterImage.attr("data-Attack", attack.characters[i]);
        characterImage.attr("data-Health", health.characters[i]);
        characterImage.attr("data-select", false);
        characterImage.attr("id", array.characters[i]);
        characterImage.css({ "max-width": "110px", "z-index": "2" })
        var divBox = $("<div>");
        divBox.addClass("dropdown");
        divBox.attr("id", `id${array.characters[i]}`);
        divBox.css({ "width": "110px", "height": "110px", "z-index": "1", "position": "relative" })
        element.characters.append(divBox);
        divBox.append(characterImage);
        loadCharacter(`#${array.characters[i]}`);
    };

    //Loop that creates the enemy images
    for (var i = 3; i >= 0; i--) {
        var enemyImage = $("<img>");
        enemyImage.addClass("enemy .dropdown img-fluid float-right");
        enemyImage.attr("src", image.enemies[i]);
        enemyImage.attr("data-Attack", attack.enemies[i]);
        enemyImage.attr("data-Health", health.enemies[i]);
        enemyImage.attr("data-select", false);
        enemyImage.css({ "max-width": "110px" })
        enemyImage.attr("id", array.enemies[i])
        var divBox = $("<div>");
        divBox.addClass("dropdown");
        divBox.attr("id", `id${array.enemies[i]}`);
        divBox.css({ "width": "110px", "height": "110px", "z-index": "1", "position": "relative", "float": "right" })
        element.enemies.append(divBox);
        divBox.append(enemyImage);
        loadCharacter(`#${array.enemies[i]}`);
        console.log(enemyImage)
    }

    $(".character").on("click", function () {
        if (select.characters != true) {
            select.characters = true;
            console.log("SelectCharacter: " + select.characters)
            $(this).attr("style", "border: 3px solid rgba(43,255,0,0.66)")
        };
        if (select.characters == true) {
            for (var j = 0; j < array.characters.length; j++) {
                if (loader.characters != true && $(this).attr("id") == array.characters[j]) {
                    loader.characters = true;
                    console.log("Character Loaded: " + loader.characters)
                    var images = $("<img>");
                    var cHealth = $("#player-health");
                    var newHead = $("<h2>")
                    images.addClass("characterLoaded img-fluid float-left m-5");
                    images.attr("src", ready.characters[j]);
                    images.attr("data-Attack", attack.characters[j]);
                    images.attr("data-Health", health.characters[j]);
                    images.attr("id", array.characters[j]);
                    images.attr("id", array.characters[j]);
                    newHead.text("HP: " + health.characters[j] + "  " + "AP: " + attack.characters[j]).css({ "background-color": "black", "color": "white", "opacity": "0.8", "text-align": "center" })
                    cHealth.append(newHead);
                    element.characterReady.append(images);
                }
            }
        }
    });

    $(".enemy").on("click", function () {
        if (select.enemies != true) {
            select.enemies = true;
            console.log("SelectEnemy: " + select.enemies)
            $(this).attr("style", "border: 3px solid rgba(255,0,0,1)")
            enemyHCount = 0;
        };
        if (select.enemies === true) {
            for (var j = 3; j >= 0; j--) {
                if (loader.enemies != true && $(this).attr("id") == array.enemies[j]) {
                    loader.enemies = true;
                    console.log("Enemy Loaded: " + loader.enemies)
                    var images = $("<img>");
                    var eHealth = $("#enemy-health");
                    var newHead = $("<h2>")
                    images.addClass("enemyLoaded img-fluid float-right m-5");
                    images.attr("src", ready.enemies[j]);
                    images.attr("data-Attack", attack.enemies[j]);
                    images.attr("data-Health", health.enemies[j]);
                    images.attr("id", array.enemies[j]);
                    newHead.text("HP: " + health.enemies[j] + "  " + "AP: " + attack.enemies[j]).css({ "background-color": "black", "color": "white", "opacity": "0.8", "text-align": "center" })
                    eHealth.append(newHead);
                    element.enemyReady.append(images);

                }
            }
        }
    });
}

start();

$(document).ready(function () {
    
    if (heroHCount === 0) {
        $(".attackImg").on("click", function () {
            
            console.log("button clicked")
            var enemy = $(".enemyLoaded");
            var hero = $(".characterLoaded");
            var enemyID = enemy.attr("id");
            var heroID = hero.attr("id");
            var enemyAttack = (enemy.attr("data-Attack"));
            var enemyHealth = (enemy.attr("data-Health"));
            var heroAttack = (hero.attr("data-Attack"));
            var heroHealth = (hero.attr("data-Health"));
            if (enemyHCount === 0) {
                enemyAttack = parseInt(enemyAttack);
                enemyHealth = parseInt(enemyHealth);
                heroAttack = parseInt(heroAttack);
                heroHealth = parseInt(heroHealth);
                enemyHCount = enemyHealth;

            };
            if (heroHCount === 0) {
                heroHCount = heroHealth;
                heroACount = heroAttack;
            };
            function updateScreen(){
                var eHealth = $("#enemy-health");
                var cHealth = $("#player-health");
                cHealth.html("<h2>HP: " + heroHCount + "  " + "AP: " + heroACount.toString() + "</h2>").css({ "background-color": "black", "color": "white", "opacity": "0.8", "text-align": "center", "height": "40px" }).addClass(heroID);
                eHealth.html("<h2>HP: " + enemyHCount + "  " + "AP: " + enemyAttack.toString() + "</h2>").css({ "background-color": "black", "color": "white", "opacity": "0.8", "text-align": "center", "height": "40px" }).addClass(enemyID);
            };
            function attacking() {
                heroHCount = heroHCount - enemyAttack;
                enemyHCount = enemyHCount - heroACount;
                heroACount = heroACount + parseInt(heroAttack);
                updateScreen();

            };
            function remChar(){
                $(`#id${heroID}`).remove();
                $(`#${heroID}`).remove();
                $(`#id${enemyID}`).remove();
                $(`#${enemyID}`).remove();
            };
            if (enemyHCount < 0) {
                $(`#id${enemyID}`).remove();
                $(`#${enemyID}`).remove();
                $("<h2>").remove(`.${enemyID}`);
                loader.enemies = false;
                select.enemies = false;
                enemyHCount = 0;
                updateScreen();

            } else if (enemyHCount > 0){
                attacking();
            };
            function isEmpty( el ){
                return !$.trim(el.html())
            }
            if (isEmpty($('#enemies'))) {
                alert("You win!");
                remChar();

                setTimeout(function () {
                    start();
                }, 3000);  
            } else if (heroHCount < 0){
                alert("You lose..");
                remChar();

                setTimeout(function () {
                    start();
                }, 3000); 
            }
           
            console.log(enemyID);
            console.log(enemyHCount);
        });
    }
    
});

