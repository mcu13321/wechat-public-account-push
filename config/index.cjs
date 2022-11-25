/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '陕西',
  CITY: '西安',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'gy',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obmud5_e9-jfO25iuQXLdu9b_wkI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'M8Xg37OWj-OuNC4rerxla-5FF6DWrczep-I6HaJkIoY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      // 所在省份
      province: "陕西",
      // 所在城市
      city: "西安",
      horoscopeDate: '03-10',
      festivals: [
        {"type": "节日", "name": "在一起的纪念日", "year": "2022", "date": "09-26"}
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2022-09-26"},
        {"keyword": "meet_day", date: "2022-08-19"}
      ],
    },
    // {
    //   // 想要发送的人的名字
    //   name: "kc",
    //   // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
    //   id: "obmud5-PsXqi27eOPRSiGem4-GvY",
    //   // 你想对他发送的模板消息的模板ID
    //   useTemplateId: "M8Xg37OWj-OuNC4rerxla-5FF6DWrczep-I6HaJkIoY",
    //   // 所在省份
    //   province: "陕西",
    //   // 所在城市
    //   city: "西安",
    //   // 新历生日, 仅用作获取星座运势, 格式必须
    //   horoscopeDate: '03-10',
    //   // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
    //   festivals: [
    //     // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    //     {"type": "节日", "name": "在一起的纪念日", "year": "2022", "date": "09-26"},
    //   ],
    //   // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
    //   customizedDateList: [
    //     // 在一起的日子
    //     {"keyword": "love_day", date: "2022-09-26"},
    //     {"keyword": "meet_day", date: "2022-08-19"}
    //   ]
    // }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'mGABFfasoptHz23igPp44FM9esUF6K5vb5nlxDBu3sw',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obmud5-PsXqi27eOPRSiGem4-GvY',
    }
  ],
  SLOT_LIST: [
    { keyword: 'remind_gy', contents: '今天记得打卡哦' }
  ]

}

module.exports = USER_CONFIG

