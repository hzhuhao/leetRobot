
const { Wechaty } = require("wechaty") // Wechaty核心包
const { PuppetPadplus } = require("wechaty-puppet-padplus") // padplus协议包
const config = require("./config/config") // 配置文件
const onScan = require("./src/onScan") // 机器人需要扫描二维码时监听回调
const onRoomJoin = require("./src/onRoomJoin") // 加入房间监听回调
const onMessage = require("./src/onMessage") // 消息监听回调
const onFriendShip = require("./src/onFriendShip") // 好友添加监听回调

// 初始化
const bot = new Wechaty({
    puppet: new PuppetPadplus({
        token: config.token
    }),
    name: config.name
})
bot
    .on("scan", onScan) // 机器人需要扫描二维码时监听
    .on("room-join", onRoomJoin) // 加入房间监听
    .on('login', (user) => {
        console.log(`user ${user} login`)
    })
    .on("message", onMessage(bot)) // 消息监听
    .on("friendship", onFriendShip) // 好友添加监听
    .start()
