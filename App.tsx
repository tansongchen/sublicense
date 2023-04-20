import { useState } from 'react'
import { Stream } from "@cloudflare/stream-react";
import './App.css'

function App() {
  const video = 'ed186a2d2c850220726e752ac2f01ef1';
  return (
    <>
      <h1>🏠 MIT 校内 Studio 公寓暑假转租</h1>
      <p className="read-the-docs">
📆 6.1 ~ 9.5 期间可租<br/>
💰 租金 $1500/月（包水电）<br/>
✅ 租金和租期均可协商
      </p>
      <ul>
        <li>地址：70 Pacific Street (Sidney-Pacific)</li>
        <li>周边：步行 10 分钟可达 MIT 主校区、地铁红线、H-Mart 和 Target 等，15分钟到 Trader Joe’s 和 Whole Foods</li>
        <li>公寓设施：健身房、洗衣机烘干机、活动室、音乐室、每层楼有公共厨房和公共学习室</li>
        <li>房间设施：家具齐全（床架床垫、衣柜、书桌书架、餐桌、冰箱、烤箱和微波炉等厨具），可拎包入住</li>
      </ul>
      <p>
        点击下方查看房间实景视频
      </p>
      <Stream controls src={video} />
      <p>
        有意者请加微信 tansongchen 私聊或发邮件至 i@tansongchen.com 联系～
      </p>
    </>
  )
}

export default App
