// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, { useState } from 'react'

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

  // 处理视频点击事件
  const handleVideoClick = (url: string): void => {
    setVideoUrl(url)
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
    setVideoList(newVideoList)
  }

  return (
    <div className="flex flex-col items-center justify-center h-full rounded-lg">
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