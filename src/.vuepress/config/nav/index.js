/* 导航栏 */
module.exports = [
  {text: "简介", link: "/guide"},
  {
    text: "Java",
    icon: 'reco-api',
    items: [
      { text: "JavaSE基础", link: "/Java/SE/" },
      { text: "JavaWeb", link: "/Java/Web/"},
      { text: "Spring家族", link: "/Java/Frame/"}
    ]
  },
  {
    text: "微服务",
    icon: "reco-twitter",
    items: [
      {text: "Nacos", link: "/Microservice/Nacos/"},
      {text: "Gateway", link: "/Microservice/Gateway/"},
      {text: "Ribbon", link: "/Microservice/Ribbon/"},
      {text: "Sentinel", link: "/Microservice/Sentinel/"},
      {text: "OpenFeign", link: "/Microservice/OpenFeign/"},
      {text: "Seata", link: "/Microservice/Seata/"},
      {text: "Zipkin", link: "/Microservice/Zipkin/"},
    ]
  },
  {
    text: "数据库",
    icon: "reco-lock",
    items: [
      {text: "MySQL", link: "/database/MySQL/"},
      {text: "Redis", link: "/database/Redis"},
      {text: "Oracle", link: "/database/Oracle"},
    ]
  },
  {
    text: "数据结构与算法",
    icon: "reco-huawei",
    link: "/data"
  },
  {
    text: "设计模式",
    icon: "reco-document",
    link: "/design"
  },
  {
    text: "大前端",
    icon: "reco-theme",
    items: [
      {text: "前端三剑客", link: "/FrontEnd/Three/"},
      {text: "ES6", link: "/FrontEnd/ES6/"},
      {text: "Ajax", link: "/FrontEnd/Ajax/"},
      {text: "Antd", link: "/FrontEnd/Antd/"},
      {text: "NodeJs", link: "/FrontEnd/NodeJs/"},
      {text: "Vue", link: "/FrontEnd/Vue/"},
      {text: "React", link: "/FrontEnd/React/"},
      {text: "Flutter", link: "/FrontEnd/Flutter/"},
    ]
  },
  {
    text: "工具 | 部署",
    icon: "reco-gitlab",
    items: [
      {text: "Maven", link: "/Tool/Maven/"},
      {text: "Gradle", link: "/Tool/Gradle/"},
      {text: "Git", link: "/Tool/Git/"},
      {text: "Linux", link: "/Tool/Linux/"},
      {text: "Docker", link: "/Tool/Docker/"},
      {text: "K8S", link: "/Tool/K8S/"},
      {text: "Jenkins", link: "/Tool/Jenkins/"},
    ]
  },
  {
    text: "编程导航",
    icon: 'reco-api', link: "/Nav/"
  },
  {
    text: "关于我",
    icon: "reco-account",
    items: [
      {text: "Github", link: "https://github.com/BPDBSIR", icon: "reco-github"},
      {text: "Dribbble", link: "https://dribbble.com/BPDBSIR", icon: "reco-color"},
    ]
  }
]