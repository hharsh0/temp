const menu = {
  list() {
    return [
      {
        backMenu: [
          {
            child: [
              {
                buttons: ["查看", "新增", "修改", "删除"],
                menu: "管理员管理",
                menuJump: "列表",
                tableName: "users",
              },
            ],
            menu: "管理员管理",
          },
          {
            child: [
              {
                buttons: ["查看", "新增", "修改", "删除"],
                menu: "宠物信息管理",
                menuJump: "列表",
                tableName: "chongwu",
              },
              {
                buttons: ["查看", "修改", "删除"],
                menu: "宠物留言管理",
                menuJump: "列表",
                tableName: "chongwuLiuyan",
              },
              {
                buttons: ["查看", "删除"],
                menu: "宠物收藏管理",
                menuJump: "列表",
                tableName: "chongwuCollection",
              },
            ],
            menu: "宠物信息管理",
          },
          {
            child: [
              {
                buttons: ["查看", "审核", "删除"],
                menu: "宠物寄养管理",
                menuJump: "列表",
                tableName: "chongwujiyang",
              },
            ],
            menu: "宠物寄养管理",
          },
          {
            child: [
              {
                buttons: ["查看", "新增", "修改", "删除"],
                menu: "宠物领养管理",
                menuJump: "列表",
                tableName: "chongwulingyang",
              },
            ],
            menu: "宠物领养管理",
          },
          {
            child: [
              {
                buttons: ["查看", "审核", "删除"],
                menu: "宠物领养审核管理",
                menuJump: "列表",
                tableName: "chongwulingyangshenhe",
              },
            ],
            menu: "宠物领养审核管理",
          },
          {
            child: [
              {
                buttons: ["查看", "新增", "删除", "修改"],
                menu: "宠物类型管理",
                menuJump: "列表",
                tableName: "dictionaryChongwu",
              },
              {
                buttons: ["查看", "新增", "删除", "修改"],
                menu: "公告类型管理",
                menuJump: "列表",
                tableName: "dictionaryNews",
              },
            ],
            menu: "基础数据管理",
          },
          {
            child: [
              {
                buttons: ["查看", "新增", "修改", "删除"],
                menu: "论坛管理",
                menuJump: "列表",
                tableName: "forum",
              },
            ],
            menu: "论坛管理",
          },
          {
            child: [
              {
                buttons: ["查看", "新增", "修改", "删除"],
                menu: "公告信息管理",
                menuJump: "列表",
                tableName: "news",
              },
            ],
            menu: "公告信息管理",
          },
          {
            child: [
              {
                buttons: ["查看", "新增", "修改", "删除"],
                menu: "用户管理",
                menuJump: "列表",
                tableName: "yonghu",
              },
            ],
            menu: "用户管理",
          },
          {
            child: [
              {
                buttons: ["查看", "新增", "修改", "删除"],
                menu: "自愿者管理",
                menuJump: "列表",
                tableName: "ziyuanzhe",
              },
            ],
            menu: "自愿者管理",
          },
          {
            child: [
              {
                buttons: ["查看", "新增", "修改", "删除"],
                menu: "轮播图管理",
                menuJump: "列表",
                tableName: "config",
              },
            ],
            menu: "轮播图信息",
          },
        ],
        frontMenu: [],
        hasBackLogin: "是",
        hasBackRegister: "否",
        hasFrontLogin: "否",
        hasFrontRegister: "否",
        roleName: "管理员",
        tableName: "users",
      },
      {
        backMenu: [
          {
            child: [
              {
                buttons: ["查看"],
                menu: "宠物信息管理",
                menuJump: "列表",
                tableName: "chongwu",
              },
            ],
            menu: "宠物信息管理",
          },
          {
            child: [
              {
                buttons: ["查看"],
                menu: "宠物寄养管理",
                menuJump: "列表",
                tableName: "chongwujiyang",
              },
            ],
            menu: "宠物寄养管理",
          },
          {
            child: [
              {
                buttons: ["查看"],
                menu: "宠物领养管理",
                menuJump: "列表",
                tableName: "chongwulingyang",
              },
            ],
            menu: "宠物领养管理",
          },
          {
            child: [
              {
                buttons: ["查看", "新增", "删除"],
                menu: "论坛管理",
                menuJump: "列表",
                tableName: "forum",
              },
            ],
            menu: "论坛管理",
          },
          {
            child: [
              {
                buttons: ["查看"],
                menu: "公告信息管理",
                menuJump: "列表",
                tableName: "news",
              },
            ],
            menu: "公告信息管理",
          },
        ],
        frontMenu: [],
        hasBackLogin: "是",
        hasBackRegister: "否",
        hasFrontLogin: "否",
        hasFrontRegister: "否",
        roleName: "自愿者",
        tableName: "ziyuanzhe",
      },
      {
        backMenu: [
          {
            child: [
              {
                buttons: ["查看"],
                menu: "宠物信息管理",
                menuJump: "列表",
                tableName: "chongwu",
              },
              {
                buttons: ["查看", "删除"],
                menu: "宠物留言管理",
                menuJump: "列表",
                tableName: "chongwuLiuyan",
              },
              {
                buttons: ["查看", "删除"],
                menu: "宠物收藏管理",
                menuJump: "列表",
                tableName: "chongwuCollection",
              },
            ],
            menu: "宠物信息管理",
          },
          {
            child: [
              {
                buttons: ["查看", "新增", "删除"],
                menu: "宠物寄养管理",
                menuJump: "列表",
                tableName: "chongwujiyang",
              },
            ],
            menu: "宠物寄养管理",
          },
          {
            child: [
              {
                buttons: ["查看"],
                menu: "宠物领养管理",
                menuJump: "列表",
                tableName: "chongwulingyang",
              },
            ],
            menu: "宠物领养管理",
          },
          {
            child: [
              {
                buttons: ["查看", "删除"],
                menu: "宠物领养审核管理",
                menuJump: "列表",
                tableName: "chongwulingyangshenhe",
              },
            ],
            menu: "宠物领养审核管理",
          },
          {
            child: [
              {
                buttons: ["查看", "新增", "删除"],
                menu: "论坛管理",
                menuJump: "列表",
                tableName: "forum",
              },
            ],
            menu: "论坛管理",
          },
          {
            child: [
              {
                buttons: ["查看"],
                menu: "公告信息管理",
                menuJump: "列表",
                tableName: "news",
              },
            ],
            menu: "公告信息管理",
          },
        ],
        frontMenu: [],
        hasBackLogin: "是",
        hasBackRegister: "否",
        hasFrontLogin: "否",
        hasFrontRegister: "否",
        roleName: "用户",
        tableName: "yonghu",
      },
    ];
  },
};
export default menu;
