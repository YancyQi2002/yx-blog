// 定义每个社交链接对象
interface SocialLink {
  name: string // 社交媒体平台的名称
  url: string // 社交媒体平台的URL
  svg: string // 社交媒体平台的SVG图标
}

// 定义SocialLinksProps
interface SocialLinksProps {
  data: SocialLink[] // 一个SocialLink对象的数组
}

// 定义FeatureItem
interface FeatureItem {
  title: string // 标题
  Svg: React.ComponentType<React.ComponentProps<'svg'>> | any // 图标
  description: JSX.Element // 描述
}

// 定义Video
interface Video {
  title: string // 视频标题
  tip_content: string // 提示信息
  url: string // 视频地址
  webm_url?: string // 可选参数：视频WebM格式地址
}

const initJingjuVedioList: Video[] = [ // 视频列表
  {
    title: '狸猫换太子·平寇进猫',
    tip_content: '<p>名段欣赏·南派京剧狸猫换太子第一本</p><p class="-mt-4">曹文豹打败阿利托汉</p>',
    url: '/video/pkjm.mp4',
    webm_url: '/video/pkjm.webm',
  },
  {
    title: '狸猫换太子·陈琳吊场',
    tip_content: '<p>名段欣赏·南派京剧狸猫换太子第一本</p><p class="-mt-4">陈琳吊场</p>',
    url: '/video/cldc.mp4',
    webm_url: '/video/cldc.webm',
  },
  {
    title: '狸猫换太子·庆功赐帕(上)',
    tip_content: '<p>名段欣赏·南派京剧狸猫换太子第一本</p><p class="-mt-4">百花亭庆功·寇准题诗·真宗赐帕</p>',
    url: '/video/qgcp1.mp4',
  },
  // { title: '狸猫换太子·狸猫换子', url: '/video/lmhz.mp4' },
  // { title: '狸猫换太子·九曲救主', url: '/video/jqjz.mp4' },
]

export { FeatureItem, SocialLink, SocialLinksProps, Video, initJingjuVedioList }