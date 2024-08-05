IR.onPressEvent(RemoteButton.Up, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
IR.onPressEvent(RemoteButton.Left, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 100)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
IR.onPressEvent(RemoteButton.Down, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 255)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
IR.onPressEvent(RemoteButton.Minus, function () {
    for (let i = 0; i <= 255; i++) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, i)
        basic.pause(100)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
})
IR.onPressEvent(RemoteButton.Power, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.White)
})
IR.onPressEvent(RemoteButton.Right, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 100)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
IR.onPressEvent(RemoteButton.Back, function () {
    for (let i = 0; i <= 255; i++) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, i)
        basic.pause(100)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
})
IR.onPressEvent(RemoteButton.Plus, function () {
    music.ringTone(262)
    basic.pause(100)
    music.rest(music.beat(BeatFraction.Quarter))
})
IR.init(Pins.P8)
basic.forever(function () {
    basic.showString("Hello!")
})
