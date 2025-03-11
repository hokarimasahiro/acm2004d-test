function putData (data: number) {
    pins.i2cWriteNumber(
    i2c_addr,
    logicalFunction.or(logicalFunction.hex2number("4000"), data),
    NumberFormat.UInt16BE,
    false
    )
    serial.writeLine("data=" + logicalFunction.number2hex(data))
}
function putCmd (cmd: number) {
    pins.i2cWriteNumber(
    i2c_addr,
    logicalFunction.or(logicalFunction.hex2number("0000"), cmd),
    NumberFormat.UInt16BE,
    false
    )
    serial.writeLine("cmd=" + logicalFunction.number2hex(cmd))
    basic.pause(20)
}
let i2c_addr = 0
serial.redirectToUSB()
i2c_addr = logicalFunction.hex2number("3f")
let line1 = "P-17381 ZETTLER DISP"
let line2 = "ACM2004D-FLW-FBW-IIC"
let line3 = "ABCDEFGHIJabcdefghij"
let line4 = "" + String.fromCharCode(logicalFunction.hex2number("b1")) + String.fromCharCode(logicalFunction.hex2number("b2")) + String.fromCharCode(logicalFunction.hex2number("b3")) + String.fromCharCode(logicalFunction.hex2number("b4")) + String.fromCharCode(logicalFunction.hex2number("b5")) + String.fromCharCode(logicalFunction.hex2number("b6")) + String.fromCharCode(logicalFunction.hex2number("b7")) + String.fromCharCode(logicalFunction.hex2number("b8")) + String.fromCharCode(logicalFunction.hex2number("b9")) + String.fromCharCode(logicalFunction.hex2number("ba")) + String.fromCharCode(logicalFunction.hex2number("bb")) + String.fromCharCode(logicalFunction.hex2number("bc")) + String.fromCharCode(logicalFunction.hex2number("bd")) + String.fromCharCode(logicalFunction.hex2number("be")) + String.fromCharCode(logicalFunction.hex2number("bf")) + String.fromCharCode(logicalFunction.hex2number("c0")) + String.fromCharCode(logicalFunction.hex2number("c1")) + String.fromCharCode(logicalFunction.hex2number("c2")) + String.fromCharCode(logicalFunction.hex2number("c3")) + String.fromCharCode(logicalFunction.hex2number("c4"))
putCmd(logicalFunction.hex2number("38"))
putCmd(logicalFunction.hex2number("01"))
putCmd(logicalFunction.hex2number("02"))
putCmd(logicalFunction.hex2number("0c"))
putCmd(logicalFunction.logicFunction(logicalFunction.hex2number("80"), logicalFunction.lFunc.or, logicalFunction.hex2number("00")))
for (let カウンター = 0; カウンター <= 19; カウンター++) {
    putData(line1.charCodeAt(カウンター))
}
putCmd(logicalFunction.logicFunction(logicalFunction.hex2number("80"), logicalFunction.lFunc.or, logicalFunction.hex2number("40")))
for (let カウンター = 0; カウンター <= 19; カウンター++) {
    putData(line2.charCodeAt(カウンター))
}
putCmd(logicalFunction.logicFunction(logicalFunction.hex2number("80"), logicalFunction.lFunc.or, logicalFunction.hex2number("14")))
for (let カウンター = 0; カウンター <= 19; カウンター++) {
    putData(line3.charCodeAt(カウンター))
}
putCmd(logicalFunction.logicFunction(logicalFunction.hex2number("80"), logicalFunction.lFunc.or, logicalFunction.hex2number("54")))
for (let カウンター = 0; カウンター <= 19; カウンター++) {
    putData(line4.charCodeAt(カウンター))
}
