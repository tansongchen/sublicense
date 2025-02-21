import { Stream } from "@cloudflare/stream-react";
import React from "react";

function App() {
  const video = "9fff09d6fdf59b7ff66b8193729ce401";
  return (
    <>
      <h1>🏠 MIT 校内 1B1B 公寓转租</h1>
      <p className="read-the-docs">
        📆 租期：2025 年五月底到八月底，租期可协商
        <br />
        💰 租金：$2300/月（包水电）
        <br />✅ 租金和租期均可协商
      </p>
      <ul>
        <li>地址：269 Vassar Street (Graduate Junction)</li>
        <li>
          周边：步行 10 分钟可达 MIT 主校区、地铁红线、H-Mart 和 Target 等，15
          分钟到 Trader Joe’s 和 Whole Foods 等
        </li>
        <li>
          房间设施：客厅有沙发、餐桌、电视柜，厨房有冰箱、烤箱、洗碗机、微波炉等，卧室有
          queen size (1.5 m) 床、衣柜、书桌椅等
        </li>
        <li>楼内设施：洗衣机、烘干机、健身房、活动室、自习室</li>
      </ul>
      <p>有意者请加微信 tansongchen 私聊或发邮件至 i@tansongchen.com 联系～</p>
      <p>点击下方查看房间实景视频和平面图</p>
      <div style={{ alignSelf: "stretch" }}>
        <Stream controls src={video} />
      </div>
      <img
        src="https://images.tansongchen.com/1731374370.png"
        alt="房间平面图"
      />
    </>
  );
}

export default App;
