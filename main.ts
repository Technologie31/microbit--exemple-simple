input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
