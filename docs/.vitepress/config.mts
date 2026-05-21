import { defineConfig } from 'vitepress'

const base = process.env.BASE_PATH || '/'

export default defineConfig({
  title: '网络代理教程',
  description: '多平台网络代理客户端使用教程',
  base,
  cleanUrls: true,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '网络代理教程',
      description: '多平台网络代理客户端使用教程',
      themeConfig: {
        nav: [
          { text: '教程', link: '/tutorials/ios' }
        ],
        sidebar: [
          {
            text: '客户端教程',
            items: [
              { text: 'iPhone / iPad / Mac', link: '/tutorials/ios' },
              { text: '安卓 FlClash', link: '/tutorials/android-flclash' },
              { text: '安卓 V2RayNG', link: '/tutorials/android-v2rayng' },
              { text: 'Windows', link: '/tutorials/windows' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/' }
        ],
        search: {
          provider: 'local'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Proxy Client Guide',
      description: 'Multi-platform proxy client setup guides',
      themeConfig: {
        nav: [
          { text: 'Tutorials', link: '/en/tutorials/ios' }
        ],
        sidebar: [
          {
            text: 'Client Tutorials',
            items: [
              { text: 'iPhone / iPad / Mac', link: '/en/tutorials/ios' },
              { text: 'Android FlClash', link: '/en/tutorials/android-flclash' },
              { text: 'Android V2RayNG', link: '/en/tutorials/android-v2rayng' },
              { text: 'Windows', link: '/en/tutorials/windows' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/' }
        ],
        search: {
          provider: 'local'
        }
      }
    }
  }
})
