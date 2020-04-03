class Boot extends Phaser.Scene {
  constructor() {super("bootGame");}

  preload()
  {
    // console.log("Boot State Started");
    var dir = "game/assets/sprites/";

    this.load.image('howToPlay', 'game/assets/sprites/user_interface/spr_how_to_play.png');
    this.load.image('howToPlay_sp', 'game/assets/sprites/user_interface/spr_sp_how_to_play.png');
    this.load.image('storyImage', 'game/assets/sprites/user_interface/spr_intro.png');
    this.load.image('Tom_dialog', 'game/assets/sprites/dialogue/spr_tom_portrait_1.png');
    this.load.image('Tom_happy_dialog', 'game/assets/sprites/dialogue/spr_tom_portrait_3.png');
    this.load.image('Tom_bat_dialog', 'game/assets/sprites/dialogue/spr_tom_portrait_2.png');
    this.load.image('Zoey_dialog', 'game/assets/sprites/dialogue/spr_zoey_portrait.png');
    this.load.image('Harry_dialog', 'game/assets/sprites/dialogue/spr_harry_portrait.png');
    this.load.image('creditsBackground', 'game/assets/sprites/user_interface/spr_credits_background.png');
    this.load.image('gameOverImage', 'game/assets/sprites/user_interface/spr_game_over.png');
    this.load.image('winImage', 'game/assets/sprites/user_interface/spr_win_screen.png');
    this.load.image("darkness",  'game/assets/sprites/spr_vignette_overlay.png');
    this.load.image('shadow', 'game/assets/sprites/spr_shadow.png');
    this.load.image('ammo_pu', 'game/assets/sprites/pick_ups/spr_ammo_pickup.png');
    this.load.image('melee_attack', 'game/assets/sprites/spr_melee_attack.png');
    this.load.spritesheet('enemy', 'game/assets/sprites/enemies/spr_enemy_clown.png',{frameWidth: 48, frameHeight: 48});
    this.load.spritesheet('meleeEnemy', 'game/assets/sprites/enemies/EnemyBears.png',{frameWidth: 32, frameHeight: 32});
    this.load.image('barrier', 'game/assets/sprites/spr_fence.png');
    this.load.image('generator', 'game/assets/sprites/spr_generator.png');
    this.load.image('level2_atlas','game/assets/sprites/tilemaps/level2_atlas.png');

    // Character Select
    this.load.spritesheet('harry_char_select', 'game/assets/sprites/user_interface/spr_harry_character_select.png',{frameWidth: 500, frameHeight: 500});
    this.load.spritesheet('tom_char_select', 'game/assets/sprites/user_interface/spr_tom_character_select.png',{frameWidth: 500, frameHeight: 500});
    this.load.spritesheet('zoey_char_select', 'game/assets/sprites/user_interface/spr_zoey_character_select.png',{frameWidth: 500, frameHeight: 500});

    // User Interface
    this.load.spritesheet('backButtons', 'game/assets/sprites/user_interface/spr_back_button.png',{frameWidth: 55, frameHeight: 24});
    this.load.spritesheet('buttons', 'game/assets/sprites/user_interface/spr_menu_buttons.png',{frameWidth: 736, frameHeight: 276});
    this.load.image('charSelect', 'game/assets/sprites/user_interface/spr_character_select_menu.png');
    this.load.spritesheet('continueButton', 'game/assets/sprites/user_interface/spr_continue_button.png',{frameWidth: 195, frameHeight: 66});
    this.load.image('menuImage', 'game/assets/sprites/user_interface/spr_main_menu.png');
    this.load.spritesheet('dialogue_Buttons','game/assets/sprites/user_interface/spr_dialogue_buttons.png',{frameWidth: 745, frameHeight: 208});

    // Players
    this.load.spritesheet('player', 'game/assets/sprites/players/spr_player_zoey.png',{frameWidth: 53, frameHeight: 53});
    this.load.spritesheet('player_tom', 'game/assets/sprites/players/spr_player_tom.png',{frameWidth: 53, frameHeight: 53});
    this.load.spritesheet('player_harry', 'game/assets/sprites/players/spr_player_harry.png',{frameWidth: 53, frameHeight: 53});
    this.load.spritesheet('player_tom_attack', 'game/assets/sprites/players/spr_player_tom_attack.png',{frameWidth: 53, frameHeight: 53});


    this.load.spritesheet('beam', 'game/assets/sprites/players/spr_player_bullet.png',{frameWidth: 16, frameHeight: 16});
    this.load.spritesheet('enemy_beam', 'game/assets/sprites/players/spr_enemy_bullet.png',{frameWidth: 16, frameHeight: 16});
    this.load.spritesheet('health_pickUp', 'game/assets/sprites/pick_ups/spr_health_pickup.png',{frameWidth: 43, frameHeight: 67});

    this.load.audio('titleMusic', ['game/assets/sounds/music/mus_title.ogg']);
    this.load.audio('gameOverMusic', ['game/assets/sounds/music/mus_game_over.wav']);
    this.load.audio('winMusic', ['game/assets/sounds/music/mus_win.wav']);
    this.load.audio('characterSelectMusic', ['game/assets/sounds/music/mus_character_Select.ogg']);
    this.load.audio('level1Music', ['game/assets/sounds/music/mus_level_1.ogg']);
    this.load.audio('confirmSound', ['game/assets/sounds/sound effects/snd_confirm.ogg']);
    this.load.audio('melee_attack', ['game/assets/sounds/sound effects/snd_attack.wav']);
    this.load.audio('gun_attack', ['game/assets/sounds/sound effects/snd_bubble_gun.wav']);
    this.load.audio('tom_pickup_Sound', ['game/assets/sounds/voices/snd_tom_pickup.wav']);
    this.load.audio('harry_pickup_Sound', ['game/assets/sounds/voices/snd_harry_pickup.wav']);
    this.load.audio('zoey_pickup_Sound', ['game/assets/sounds/voices/snd_zoey_pickup.wav']);
    this.load.audio('enemy_hurt_sound', ['game/assets/sounds/voices/snd_monster_hurt_02.wav']);

    this.load.tilemapTiledJSON('level2', 'game/assets/maps/level2.json');
  }
  create() {
    var loadingText = this.add.text(20, 20, "The game is loading");
    music = this.sound.add('titleMusic');
    music.loop = true;
    music.play();
    pauseMusic = this.sound.add('characterSelectMusic');
    pauseMusic.loop = true;
    pauseMusic.stop();
    
    this.anims.create({
      key: "tom_run_right",
      frames: this.anims.generateFrameNumbers("player_tom", {
        start: 23,
        end: 0
      }),
      frameRate: 30,
      repeat: 1
    });
    this.anims.create({
      key: "tom_run_down",
      frames: this.anims.generateFrameNumbers("player_tom", {
        start: 47,
        end: 24
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "tom_run_left",
      frames: this.anims.generateFrameNumbers("player_tom", {
        start: 71,
        end: 48
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "tom_run_up",
      frames: this.anims.generateFrameNumbers("player_tom", {
        start: 95,
        end: 72
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "tom_run_up_right",
      frames: this.anims.generateFrameNumbers("player_tom", {
        start:119,
        end: 96
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "tom_run_down_right",
      frames: this.anims.generateFrameNumbers("player_tom", {
        start:143,
        end: 120
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "tom_run_down_left",
      frames: this.anims.generateFrameNumbers("player_tom", {
        start:167,
        end: 144
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "tom_run_up_left",
      frames: this.anims.generateFrameNumbers("player_tom", {
        start:190,
        end: 168
      }),
      frameRate: 30,
      repeat: -1
    });



    this.anims.create({
      key: "tom_attack_down_left",
      frames: this.anims.generateFrameNumbers("player_tom_attack", {
        start:24,
        end: 47
      }),
      frameRate: 30,
      repeat: 0
    });
    this.anims.create({
      key: "tom_attack_down_right",
      frames: this.anims.generateFrameNumbers("player_tom_attack", {
        start:0,
        end: 23
      }),
      frameRate: 30,
      repeat: 0
    });
    this.anims.create({
      key: "tom_attack_up_right",
      frames: this.anims.generateFrameNumbers("player_tom_attack", {
        start:48,
        end: 71
      }),
      frameRate: 30,
      repeat: 0
    });
    this.anims.create({
      key: "tom_attack_up_left",
      frames: this.anims.generateFrameNumbers("player_tom_attack", {
        start:72,
        end: 95
      }),
      frameRate: 30,
      repeat: 0
    });
    this.anims.create({
      key: "tom_attack_left",
      frames: this.anims.generateFrameNumbers("player_tom_attack", {
        start:96,
        end: 119
      }),
      frameRate: 30,
      repeat: 0
    });
    this.anims.create({
      key: "tom_attack_right",
      frames: this.anims.generateFrameNumbers("player_tom_attack", {
        start:120,
        end: 143
      }),
      frameRate: 30,
      repeat: 0
    });
    this.anims.create({
      key: "tom_attack_up",
      frames: this.anims.generateFrameNumbers("player_tom_attack", {
        start:144,
        end: 167
      }),
      frameRate: 30,
      repeat: 0
    });
    this.anims.create({
      key: "tom_attack_down",
      frames: this.anims.generateFrameNumbers("player_tom_attack", {
        start:168,
        end: 190
      }),
      frameRate: 30,
      repeat: 0
    });



    this.anims.create({
      key: "zoey_run_right",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 23
      }),
      frameRate: 30,
      repeat: 1
    });
    this.anims.create({
      key: "zoey_run_down",
      frames: this.anims.generateFrameNumbers("player", {
        start: 24,
        end: 47
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "zoey_run_left",
      frames: this.anims.generateFrameNumbers("player", {
        start: 48,
        end: 71
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "zoey_run_up",
      frames: this.anims.generateFrameNumbers("player", {
        start: 72,
        end: 95
      }),
      frameRate: 30,
      repeat: -1
    });

    this.anims.create({
      key: "harry_run_right",
      frames: this.anims.generateFrameNumbers("player_harry", {
        start: 48,
        end: 63
      }),
      frameRate: 30,
      repeat: 1
    });
    this.anims.create({
      key: "harry_run_down",
      frames: this.anims.generateFrameNumbers("player_harry", {
        start: 80,
        end: 95
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "harry_run_left",
      frames: this.anims.generateFrameNumbers("player_harry", {
        start: 64,
        end: 79
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "harry_run_up",
      frames: this.anims.generateFrameNumbers("player_harry", {
        start: 32,
        end: 47
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "harry_run_up_right",
      frames: this.anims.generateFrameNumbers("player_harry", {
        start:16,
        end: 31
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "harry_run_down_right",
      frames: this.anims.generateFrameNumbers("player_harry", {
        start:112,
        end: 127
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "harry_run_down_left",
      frames: this.anims.generateFrameNumbers("player_harry", {
        start:96,
        end: 111
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "harry_run_up_left",
      frames: this.anims.generateFrameNumbers("player_harry", {
        start:0,
        end: 15
      }),
      frameRate: 30,
      repeat: -1
    });
    
    this.anims.create({
      key: "health_pu",
      frames: this.anims.generateFrameNumbers("health_pickUp", {
        start:0,
        end: 4
      }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key: "beam_anim",
      frames: this.anims.generateFrameNumbers("beam"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "enemy_beam_anim",
      frames: this.anims.generateFrameNumbers("enemy_beam"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "enemy_run_down",
      frames: this.anims.generateFrameNumbers("enemy", {
        start:48,
        end: 71
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "enemy_run_left",
      frames: this.anims.generateFrameNumbers("enemy", {
        start:25,
        end: 47
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "enemy_run_up",
      frames: this.anims.generateFrameNumbers("enemy", {
        start:0,
        end: 24
      }),
      frameRate: 30,
      repeat: -1
    });
    this.anims.create({
      key: "enemy_run_right",
      frames: this.anims.generateFrameNumbers("enemy", {
        start:72,
        end: 94
      }),
      frameRate: 30,
      repeat: -1
    });

    // Melee enemy animation setup
    this.anims.create({
        key: "meleeEnemy_run_down",
        frames: this.anims.generateFrameNumbers("meleeEnemy", {
            start:0,
            end: 14
        }),
        frameRate: 30,
        repeat: -1
    });
    this.anims.create({
        key: "meleeEnemy_run_left",
        frames: this.anims.generateFrameNumbers("meleeEnemy", {
            start:45,
            end: 59
        }),
        frameRate: 30,
        repeat: -1
    });
    this.anims.create({
        key: "meleeEnemy_run_up",
        frames: this.anims.generateFrameNumbers("meleeEnemy", {
            start:15,
            end: 29
        }),
        frameRate: 30,
        repeat: -1
    });
    this.anims.create({
        key: "meleeEnemy_run_right",
        frames: this.anims.generateFrameNumbers("meleeEnemy", {
            start:30,
            end: 44
        }),
        frameRate: 30,
        repeat: -1
    });

    this.anims.create({
      key: "anim_dialogue_Buttons",
      frames: this.anims.generateFrameNumbers("dialogue_Buttons", {
        start:0,
        end: 7
      }),
      frameRate: 16,
      repeat: -1
    });
    if (quickStart) this.scene.start("sp_1");
    else this.scene.start("mainMenu");

  }
  update () {

  }
}
