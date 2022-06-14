input.onButtonPressed(Button.A, function () {
    if (padle_location == 0) {
        padle1.change(LedSpriteProperty.X, -1)
        padle2.change(LedSpriteProperty.X, -1)
        padle_location += -1
    } else if (padle_location == 1) {
        padle1.change(LedSpriteProperty.X, -1)
        padle2.change(LedSpriteProperty.X, -1)
        padle_location += -1
    } else if (padle_location == 2) {
        padle1.change(LedSpriteProperty.X, -1)
        padle2.change(LedSpriteProperty.X, -1)
        padle_location += -1
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (padle_location == 0) {
        padle1.change(LedSpriteProperty.X, 1)
        padle2.change(LedSpriteProperty.X, 1)
        padle_location += 1
    } else if (padle_location == -1) {
        padle1.change(LedSpriteProperty.X, 1)
        padle2.change(LedSpriteProperty.X, 1)
        padle_location += 1
    } else if (padle_location == 1) {
        padle1.change(LedSpriteProperty.X, 1)
        padle2.change(LedSpriteProperty.X, 1)
        padle_location += 1
    } else {
    	
    }
})
let padle_location = 0
let padle2: game.LedSprite = null
let padle1: game.LedSprite = null
let win_state = 0
let ball = game.createSprite(2, 2)
let wall1 = game.createSprite(0, 0)
let wall2 = game.createSprite(1, 0)
let wall3 = game.createSprite(2, 0)
let wall4 = game.createSprite(3, 0)
let wall5 = game.createSprite(4, 0)
padle1 = game.createSprite(1, 4)
padle2 = game.createSprite(2, 4)
basic.forever(function () {
    if (ball.isTouching(wall1)) {
        wall1.delete()
        win_state += 1
    } else if (ball.isTouching(wall2)) {
        wall2.delete()
        win_state += 1
    } else if (ball.isTouching(wall3)) {
        wall3.delete()
        win_state += 1
    } else if (ball.isTouching(wall4)) {
        wall4.delete()
        win_state += 1
    } else if (ball.isTouching(wall5)) {
        wall5.delete()
        win_state += 1
    } else {
    	
    }
    ball.move(1)
    basic.pause(300)
    if (ball.isTouchingEdge()) {
        ball.turn(Direction.Left, randint(0, 180))
    }
    if (win_state == 5) {
        basic.showIcon(IconNames.Yes)
        game.pause()
    }
    if (ball.isTouching(padle1)) {
        basic.showIcon(IconNames.No)
        game.pause()
    } else if (ball.isTouching(padle2)) {
        basic.showIcon(IconNames.No)
        game.pause()
    } else {
    	
    }
})
