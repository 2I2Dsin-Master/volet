// gerer appui manuel et overcurrent
// (on peut relacher)
// 
// commander les relais
// 
// gerer autre bouton quand auto
// (manuel autre sens ou stop)
function to_do () {
	
}
function manu_up () {
    if (input.buttonIsPressed(Button.A) && (mode == 5 && n > 3)) {
        // break
        mode = 4
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # . .
            . # # . .
            . . # . .
            `)
    }
}
function manu_down () {
    if (input.buttonIsPressed(Button.B) && (mode == 3 && n > 3)) {
        // break
        mode = 2
        basic.showLeds(`
            . . # . .
            . . # # .
            . . # # #
            . . # # .
            . . # . .
            `)
    }
}
function auto_down () {
    if (mode == 0 && input.buttonIsPressed(Button.B)) {
        // break
        mode = 3
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    }
}
function gere_n () {
    if (mode == 0) {
        n = 0
    } else {
        n += 1
    }
}
function auto_up () {
    if (mode == 0 && input.buttonIsPressed(Button.A)) {
        // break
        mode = 5
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    }
}
function manu_up_fin () {
    if (mode == 4) {
        if (input.buttonIsPressed(Button.A)) {
        	
        } else {
            // break
            mode = 0
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
}
function manu_down_fin () {
    if (mode == 2) {
        if (input.buttonIsPressed(Button.B)) {
        	
        } else {
            // break
            mode = 0
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
}
let n = 0
let mode = 0
// 0=off 4=up 2=down +1 si auto 
mode = 0
// compteur duree appui
n = 0
basic.forever(function () {
    basic.pause(100)
    gere_n()
    auto_up()
    manu_up()
    manu_up_fin()
    auto_down()
    manu_down()
    manu_down_fin()
})
// surveillance courant moteur
basic.forever(function () {
    if (input.lightLevel() > 150) {
        // break
        mode = 0
        basic.showLeds(`
            . . . . .
            # . . . #
            # # # # #
            # . . . #
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
