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
  url: string // 视频地址
  webm_url?: string // 可选参数：视频WebM格式地址
}

export { SocialLink, SocialLinksProps, FeatureItem, Video }