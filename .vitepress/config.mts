import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "司晓龙 | About Me",
  description: "About Me",
  head: [['link', { rel: 'icon', href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGMWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZiwgMjAyMi8wOC8xNi0xODowMjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wMy0wOFQyMzozNzowMSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDMtMDhUMjM6NDA6MDErMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDMtMDhUMjM6NDA6MDErMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYxYmMwZjc0LTA3YTAtNGQ0Ni04MTViLWUwZDE0ODY3NGZkZSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjUyNGExNTQ2LTk0NDctODU0Yy1iMTgyLTU3ZTBmYmQ2MWVlOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY4Yjg0NDgyLTdiMjItNTk0MC05M2I2LWRjZjBjMGVlNzY5YiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjhiODQ0ODItN2IyMi01OTQwLTkzYjYtZGNmMGMwZWU3NjliIiBzdEV2dDp3aGVuPSIyMDI0LTAzLTA4VDIzOjM3OjAxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjFiYzBmNzQtMDdhMC00ZDQ2LTgxNWItZTBkMTQ4Njc0ZmRlIiBzdEV2dDp3aGVuPSIyMDI0LTAzLTA4VDIzOjQwOjAxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UrAhRQAABXlJREFUWIXFV0uIHGUQ/ur/u3t6XuvOsrvmYNCbLxAPhgRED3pQMR4MHhQNgo+DIKgoih4UbxFEL0oEgxsfiIKyR13woBFR9OzBkwcv8YFsZmdn+n9UlYfp7p3HZrOJggU99ND1V33/V1/V302qiv/TkjNnzgAAiAjMjGI4Qt5sYnllGdZaEBGICBVQYwxUFdba+r5a2+l0rgLwGzMzEQEAVLX2GQ6HGAwGUFWEEOAKB3MpqIkIIgJmhojAOQcAS71e750sy/Isy5CmKbIsQ5Zle8a6aACqCmMMqh0CQIwRKysrJ/I8v4OIro8xQlUhIiCimqn/BAAAMHNNbVEUWFhYuHZxcfFxAGg0Gg9OJtsN8CUBqHZT1b4Kbq3F6urqOgAIC9I0vT9Jkqm1lZZ2Y2HfACoaqyBEhBAClpeXn2k2m1cXRYEQA4hoNUmS25m5Bjm5/l8BmAQRQkCe5ysLCwtvFEUBZq6vJEmOV8mr63xl2BeAyV1PWq/X+0RV4ZwDMyPGiBACABwjolxEpsRorZ1jYV8AqvpVbee9R6vVOpZl2W1FUdQtycwIIYCIugAeGo1GcM7VVzUPJi3ZPeXOzifbqOr/LMtsu93+0HsPZp4bVN57HQ6H33vva8ESEWKMc2LcEwAI9c4rY2a0Wq01VW2VA2jKrLXo9/sPDAaDn9M0rdeKyK462BOAITNVQ2ZGmqaHjTHHi6KY9zcGIfgN59yn1to2gO2Kyap9S43snwHojviMtUjS9LMQAkRkyo9AUFVxzt3ZarV+AOibEPwLVQlQtu2s7QrAlHVyxQ7FIoJGo/GqMF8RWUpwWgc3huCcP6qq1wvz4ch8nXPuJQBc7gOmPNguCEChtaprUMZcCdWXd6s7ARDVb5n5iyRJzjrnAKKuMeY1Zn6ukpzsMojmABhjELxHjBFpmkJEoACI6DMfwkwfj/dGYxZuVejTMcbLJ+bGs6r6uqqerVfMsDAHYNwuDO888jyHAlDmR4MPN4Go1kXNlipsYp80xiCG8OYOsDGXRHSKjDk6OcwmQeyuAWNQjEZo5A2I6A3Bu1Pl6iprGR4wRL9aa952hfueZTwToDoJ9O40y47YxP4wBjEDoB4UhmplG2MgItjc3ERi7UEieleBwSxZ4x96hkUgzEfK+NOmish8GsA1Klo/V9WxKDc2Nupo1tqestwNkIKAyBGGzMhY+8d4FE7QX96LyGVE9JexpimiX1PlMwFERJEk9uEkST9QkbEDGRABiTCDQBBVRB82bGIPQcedQCCIMGSiG+asTCSwpMwnVfSJ2VZTAMLxLVH9iACZGsXdbhfGWriiuG/Q3zrEzPM0XsBUAWtl3abJvTG4x6BIp2MQVKQrihNplj4vLLWcaH19HYYMMcdzUHRBMzKf2ez5XuJVFXnevFFVDxSj0ZfWmmnfktVWu33AWvt7pbek025jq99/07vQrRbN6WgPIJWvqGIo2191ut0VQ/Sdd/5mYyy09CQALIzCmFPtTueeqpOS4MMRV7inRAWiNBN2Nv1Ef4PmnnjvlhNr32jk+V3b28O+TXgu1nAwOGqMPZRl2U/MEfT+2umPoXoLGTM/Yy/alES0u9jrHQzev7K1tfVimiYl/SULzMga2S+9paVrRBW09t5aTkChRCAFYKbOmHHY6j8ArfjX8fO6FOPOQoyMrJE1er1F/vP3P7aEJTfW7jCp4++IxaXe8Xan85EhooKIQGVCwh4XzdzP/K/MkHGNrBE73e6jrjxXODJiZEQWiCrObW6ejCHaS/ow2bMIqkjTFFBgYeGyj1ut5o+uKEoQEcwBqoLRcNQ5t7n5+d4vJBedvDxsAHjvYG2CPM+f3er3H6mHT+VDRMPh9t/0f3+e/wN/f2HMTIIN0AAAAABJRU5ErkJggg==' }], ['meta', { name: 'google-site-verification', content: 'Jf8iwJYC6yZlPKb6WSahXynQpbKUIwCQUMv85MpwqAM' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Blog', link: 'https://myblog.sixiaolong.win/' },
      { text: 'GitHub', link: 'https://Github.sixiaolong.win/' },
      { text: 'Twitter', link: 'https://Twitter.sixiaolong.win/' },
      { text: 'BiliBili', link: 'https://BiliBili.sixiaolong.win/' },
      { text: 'Steam', link: 'https://Steam.sixiaolong.win/' },
    ],

    sidebar: [
      {
        text: '个人项目',
        items: [
          { text: '远程工具箱', link: '/Project/Remote-Toolbox' },
          { text: '网关切换器', link: '/Project/Gateway-Switcher' },
          { text: '图片转 Base64', link: '/Project/Pic-to-Base64' },
          { text: 'See My Server', link: '/Project/See-my-Server' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://Github.sixiaolong.win/' }
    // ]
  }
})
