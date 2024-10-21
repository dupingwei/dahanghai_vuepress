import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    {
      dir: 'demo',
      link: '/demo',
      sidebar: ['', 'foo', 'bar', 'bar2'],
    },
    {
      dir: 'dahanghai',
      link: '/dahanghai/',
      sidebar: [
        '',
        '10x-2x/README.md',
        'ai-huihua/README.md',
        'cgpt-tixiao/README.md',
        'chuhai-diyizhan/README.md',
        'gerenyoushi/README.md',
        'gzh-baowen/README.md',
        'jianji/README.md',
        'juguang/README.md',
        'rpa-tixiao/README.md',
        'siweidaotu/README.md',
        'sora/README.md',
        'sph-daihuo/README.md',
        'sph-fencheng/README.md',
        'sph-zhonglaonian/README.md',
        'temu-kuajing/README.md',
        'tiktok-duanju/README.md',
        'tiktok-xiaodian/README.md',
        'touzi-diyike/README.md',
        'web3/README.md',
        'xhs-daren/README.md',
        'xhs-dianpu/README.md',
        'xhs-lvyou/README.md',
        'xianyu-ershoushu/README.md',
        'xianyu-gaokedan/README.md',
      ],
    }
  ],
})
