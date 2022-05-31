let win_state = 0
let ball = game.createSprite(2, 2)
let wall1 = game.createSprite(0, 0)
let wall2 = game.createSprite(1, 0)
let wall3 = game.createSprite(2, 0)
let wall4 = game.createSprite(3, 0)
let wall5 = game.createSprite(4, 0)
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
    if (ball.isTouchingEdge()) {
        ball.turn(Direction.Left, randint(0, 180))
    }
    if (win_state == 5) {
        basic.showIcon(IconNames.Yes)
        game.pause()
    }
})
