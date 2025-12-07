import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: Icons.DashboardIcon,
        items: [
          {
            title: "사용 현황 분석",
            url: "/",
          },
        ],
      },
      {
        title: "제철음식",
        icon: Icons.FoodIcon,
        items: [
          {
            title: "제철음식 관리",
            url: "/contents/food/list",
          },
          {
            title: "제철음식 API 관리",
            url: "/contents/food/api",
          },
          {
            title: "제철시세 관리",
            url: "/contents/food/price",
          },
        ],
      },
      {
        title: "제철요리",
        icon: Icons.StoreIcon,
        items: [
          {
            title: "제철요리 관리",
            url: "/contents/cooking/list",
          },
          {
            title: "제철요리 투표 관리 ",
            url: "/contents/cooking/vote",
          },
        ],
      },
      {
        title: "이야기",
        icon: Icons.StoryIcon,
        items: [
          {
            title: "이야기 관리",
            url: "/contents/story",
          },
        ],
      },
      {
        title: "플랫폼 관리",
        icon: Icons.MoneyIcon,
        items: [
          {
            title: "회원 관리",
            url: "/contents/platform/user",
          },
          {
            title: "메인 관리",
            url: "/contents/platform/main",
          },
          {
            title: "약관 관리",
            url: "/contents/platform/rule",
          },
        ],
      },
      {
        title: "메인 관리",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "메인 배너 관리",
            url: "/platform/banner",
          },
        ],
      },
      {
        title: "약관 관리",
        icon: Icons.WarnIcon,
        items: [
          {
            title: "약관 조회",
            url: "/platform/term",
          },
        ],
      },
      // {
      //   title: "Calendar",
      //   url: "/calendar",
      //   icon: Icons.Calendar,
      //   items: [],
      // },
      // {
      //   title: "Profile",
      //   url: "/profile",
      //   icon: Icons.User,
      //   items: [],
      // },
      {
        title: "Forms",
        icon: Icons.Alphabet,
        items: [
          {
            title: "제철 음식 작성",
            url: "/forms/form-elements",
          },
          {
            title: "제철 음식 관리",
            url: "/forms/form-layout",
          },
        ],
      },
      // {
      //   title: "Tables",
      //   url: "/tables",
      //   icon: Icons.Table,
      //   items: [
      //     {
      //       title: "Tables",
      //       url: "/tables",
      //     },
      //   ],
      // },
      {
        title: "Pages",
        icon: Icons.Alphabet,
        items: [
          {
            title: "Settings",
            url: "/pages/settings",
          },
        ],
      },
    ],
  },
  {
    label: "OTHERS",
    items: [
      // {
      //   title: "Charts",
      //   icon: Icons.PieChart,
      //   items: [
      //     {
      //       title: "Basic Chart",
      //       url: "/charts/basic-chart",
      //     },
      //   ],
      // },
      {
        title: "UI Elements",
        icon: Icons.FourCircle,
        items: [
          {
            title: "Alerts",
            url: "/ui-elements/alerts",
          },
          {
            title: "Buttons",
            url: "/ui-elements/buttons",
          },
        ],
      },
      {
        title: "Authentication",
        icon: Icons.Authentication,
        items: [
          {
            title: "Sign In",
            url: "/auth/sign-in",
          },
        ],
      },
    ],
  },
];
