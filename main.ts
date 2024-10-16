/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Oct 2024
 * This program finds distance to object using sonar
*/

let objectDistance:number = 0

//setup
basic.showIcon(IconNames.Happy)

//getting distance from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    objectDistance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(objectDistance)
    basic.showIcon(IconNames.Happy)
})