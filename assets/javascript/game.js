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
        enemies: ["Storm Trooper", "Kylo Ren", "Starkiller", "Darth Vader"]
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

// function load(any) {
//     for (var i = 0; i < array[any].length; i++) {
//         image = $("<img>");
//         image.addClass(`${any} img-fluid float-left mx-2`);
//         image.attr("src", image[`${any}[i]`]);
//         image.attr("data-characterAttack", attack[any + i]);
//         image.attr("data-characterHealth", health[any + i]);        image.attr("data-characterHealth", health[any]);
//         image.attr("style", "height: 110px")
//         element[any].append(image);
//         console.log(enemies)
//         console.log(characters)
//     };
// };

// load(`enemies`);
// load(`characters`);

function label() {

}

//Loop that creates the character images
for (var i = 0; i < array.characters.length; i++) {
    var characterImage = $("<img>");
    characterImage.addClass("character stats img-fluid float-left");
    characterImage.attr("src", image.characters[i]);
    characterImage.attr("data-Attack", attack.characters[i]);
    characterImage.attr("data-Health", health.characters[i]);
    characterImage.attr("data-select", false);
    characterImage.attr("id", array.characters[i])
    characterImage.css({ "max-width": "110px", "z-index": "2" })
    element.characters.append(characterImage);
}

$(".stats").ready(function () {
    

})

//Loop that creates the enemy images
for (var i = 3; i >= 0; i--) {
    var enemyImage = $("<img>");
    enemyImage.addClass("enemy stats img-fluid float-right");
    enemyImage.attr("src", image.enemies[i]);
    enemyImage.attr("data-Attack", attack.enemies[i]);
    enemyImage.attr("data-Health", health.enemies[i]);
    enemyImage.attr("data-select", false);
    enemyImage.css({ "max-width": "110px", "z-index": "2" })
    enemyImage.attr("id", array.enemies[i])
    element.enemies.append(enemyImage);
    console.log(enemyImage)
}

var character = $(".character");

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
                images.addClass("characterLoaded img-fluid float-left m-5");
                images.attr("src", ready.characters[j]);
                images.attr("data-Attack", attack.characters);
                images.attr("data-Health", health.characters);
                images.attr("id", array.characters[j]);
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
    };
    if (select.enemies == true) {
        for (var j = 3; j >= 0; j--) {
            if (loader.enemies != true && $(this).attr("id") == array.enemies[j]) {
                loader.enemies = true;
                console.log("Enemy Loaded: " + loader.enemies)
                var images = $("<img>");
                images.addClass("enemyLoaded img-fluid float-right m-5");
                images.attr("src", ready.enemies[j]);
                images.attr("data-Attack", attack.enemies[j]);
                images.attr("data-Health", health.enemies[j]);
                images.attr("id", array.enemies[j]);
                element.enemyReady.append(images);
            }
        }
    }
});
var stats = $(".stats")


$(document).ready(function () {
    $(".stats li").hover(function () {
        $(".label", this).slideDown(100);
    }, function () {
        $(".label", this).stop().slideUp(100);
    });
});