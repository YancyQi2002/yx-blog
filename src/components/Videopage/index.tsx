// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, { useState } from 'react'

import Translate from '@docusaurus/Translate'
import ReactPlayer from 'react-player'

interface Video {
  url: string // 视频地址
  title: string // 视频标题
}

// VideoPage组件
const VideoPage: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>('') // 当前播放视频地址

  const [videoList, setVideoList] = useState<Video[]>([ // 视频列表
    { url: '/video/pkjm.mp4', title: '狸猫换太子·平寇进猫' },
    { url: '/video/cldc.mp4', title: '狸猫换太子·陈琳吊场' },
    // { url: '/video/qgcp.mp4', title: '狸猫换太子·庆功赐帕' },
    // { url: '/video/lmhz.mp4', title: '狸猫换太子·狸猫换子' },
    // { url: '/video/jqjz.mp4', title: '狸猫换太子·九曲救主' },
  ])

  // 判断是否支持H265
  const isH265Supported = ReactPlayer.canPlay('video/mp4 codecs="hev1"') || ReactPlayer.canPlay('video/mp4 codecs="hvc1"')

  // 控制是否显示H265不支持提示框
  const [showAlert, setShowAlert] = useState<boolean>(true)

  /**
   * 处理视频点击事件
   * @param {string} url - 视频地址
   * @returns {void}
   */
  const handleVideoClick = (url: string): void => {
    // 设置当前播放视频地址
    setVideoUrl(url)

    if (!isH265Supported) {
      // 如果不支持H265，则提示
      setShowAlert(true)
    }
  }

  /**
   * 处理视频列表项选择事件
   * @param {number} index - 视频列表项索引
   * @returns {void}
   */
  const handleVideoItemSelect = (index: number): void => {
    // 遍历视频列表，将选中项的selected属性设为true，其他项设为false
    const newVideoList = [...videoList]
    newVideoList.forEach((video, i) => {
      if (i === index)
        video.selected = true
      else
        video.selected = false
    })

    // 更新视频列表
    setVideoList(newVideoList)
  }

  return (
    <div className="flex flex-col items-center justify-center h-full rounded-lg">
      {showAlert && !isH265Supported && (
        <div className="mb-2 alert shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>
              <Translate>
                当前环境不支持 H265
              </Translate>
            </span>
          </div>
          <div className="flex-none">
            <button className="btn btn-sm btn-ghost" onClick={() => setShowAlert(false)}>
              <Translate>
                知道啦
              </Translate>
            </button>
          </div>
        </div>
      )}
      
      <ReactPlayer
        url={videoUrl}
        controls
        pip
        width="60%"
        height="100%"
        className="flex justify-center items-center"
        playsinline
        config={{
          file: {
            attributes: {
              forceVideo: true,
            },
          },
        }}
      />

      <div className="flex flex-wrap justify-center mt-2 w-full select-none">
        {videoList.map((video, index) => (
          <div key={index} className="m-1">
            <div
              onClick={() => {
                handleVideoClick(video.url)
                handleVideoItemSelect(index)
              }}
              className={`p-4 rounded-lg shadow-md cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${video.selected ? 'bg-gray-200' : ''}`}
              title={video.title}
            >
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoPage