/* eslint-disable */

const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbf77fe39c9bbaf42',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'om9dj6UVu3Pjg1Oux8zFyxIxdjh0',

  PROVINCE: '广东',
  CITY: '深圳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1985', date: '09-07',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '10-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-12-20' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '4suTQhy7ggmBmzXRSzQGiFoDtIeisQET73HzHdIQ0_Y',

  CALLBACK_USERS: [
    {
      name: '快乐小飞猪-张大宝',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'om9dj6UVu3Pjg1Oux8zFyxIxdjh0',
    }
  ],

}

module.exports = USER_CONFIG

