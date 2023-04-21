// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, {
  Fragment,
  useState,
} from 'react'

import ReactPlayer from 'react-player'

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import Translate from '@docusaurus/Translate'
import { Transition } from '@headlessui/react'
import type { Video } from '@site/src/interface'

// VideoPage组件
const VideoPage: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>('') // 当前播放视频地址

  const [videoList, setVideoList] = useState<Video[]>([ // 视频列表
    { title: '狸猫换太子·平寇进猫', url: '/video/pkjm.mp4', webm_url: '/video/pkjm.webm' },
    { title: '狸猫换太子·陈琳吊场', url: '/video/cldc.mp4', webm_url: '/video/cldc.webm' },
    { title: '狸猫换太子·庆功赐帕(上)', url: '/video/qgcp1.mp4', webm_url: '/video/qgcp1.webm' },
    // { title: '狸猫换太子·狸猫换子', url: '/video/lmhz.mp4' },
    // { title: '狸猫换太子·九曲救主', url: '/video/jqjz.mp4' },
  ])

  // 控制是否显示H265不支持提示框
  const [showAlert, setShowAlert] = useState<boolean>(false)

  const ele = ExecutionEnvironment.canUseDOM ? document.createElement('video') : null

  const ish265Supported = () => {
    // 判断是否支持H265编码格式
    const h265Supported = ele?.canPlayType('video/mp4; codecs="hev1"') || ele?.canPlayType('video/mp4; codecs="hvc1"')
    if (h265Supported?.toLowerCase() === 'maybe' || h265Supported?.toLowerCase() === 'probably') {
      // 如果支持H265，则不提示
      setShowAlert(false)
    }
    else {
      // 如果不支持H265，则提示
      setShowAlert(true)
    }
  }

  /**
   * 处理视频点击事件
   * @param {Video} video - 被点击的视频
   * @returns {void}
   */
  const handleVideoClick = (video: Video): void => {
    if (ele) { // 如果video元素存在，则执行以下操作
      // 判断是否支持WebM格式
      const webmSupported = ele?.canPlayType('video/webm')
      if (webmSupported?.toLocaleLowerCase() === 'maybe' || webmSupported?.toLowerCase() === 'probably') {
        // 如果webm_url存在且不为空则setVideoUrl(webm_url)，否则setVideoUrl(url)
        if (video.webm_url) {
          setVideoUrl(video.webm_url)
          setShowAlert(false)
        }
        else {
          setVideoUrl(video.url)
          ish265Supported() // 判断是否支持H265编码格式
        }
      }
      else {
        setVideoUrl(video.url)
        ish265Supported() // 判断是否支持H265编码格式
      }
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
      <Transition
        appear
        show={showAlert}
        as={Fragment}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
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
      </Transition>

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
                handleVideoClick(video)
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