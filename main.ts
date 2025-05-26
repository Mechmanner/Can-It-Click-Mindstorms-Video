let cookie_amount = 0                //Amount of cookies (Default: 0)
let page = 1                         //Current page (Default: 1)
let factory_name = "Name me!"        //Factory name (Default: "Mechmanner")


basic.forever(function () {
    brick.printString("",0,0)
    if (page >= 1 && page <= 3) {
        screen.drawLine(screen.width / 3, 0 ,screen.width / 3 ,128, 1)
        screen.drawLine((screen.width / 3) * 2, 0, (screen.width / 3) * 2, 128 ,1)
        screen.drawLine((screen.width / 3) * 2, 16, screen.width / 3, 16, 1)
        screen.drawLine(0, 64, screen.width / 3, 64, 1)
        screen.printCenter(factory_name,4,1) // Factory name (from: factory_name)
        screen.drawCircle(28, 28, 22, 1)
        screen.fillTriangle(13, 15, 26, 15, 21, 21, 1)
        screen.fillTriangle
    }
})