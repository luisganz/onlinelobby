radio.onReceivedNumber(function (receivedNumber) {
    onlineposition = receivedNumber
    led.plot(onlineposition, 2)
    led.plot(onlineposition, 3)
    if (onlineposition - 1 != position) {
        led.unplot(onlineposition - 1, 2)
        led.unplot(onlineposition - 1, 3)
    }
    if (onlineposition + 1 != position) {
        led.unplot(onlineposition + 1, 2)
        led.unplot(onlineposition + 1, 3)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    position = Math.constrain(position, 0, 4) - 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    position = Math.constrain(position, 0, 4) + 1
})
let onlineposition = 0
let position = 0
radio.setGroup(1)
position = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.forever(function () {
    radio.sendNumber(position)
    led.plot(position, 2)
    led.plot(position, 3)
    if (position - 1 != onlineposition) {
        led.unplot(position - 1, 2)
        led.unplot(position - 1, 3)
    }
    if (position + 1 != onlineposition) {
        led.unplot(position + 1, 2)
        led.unplot(position + 1, 3)
    }
})
