// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, {
  Fragment,
  useState,
} from 'react'

import ReactPlayer from 'react-player'

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import Translate from '@docusaurus/Translate'
import {
  createFFmpeg,
  fetchFile,
} from '@ffmpeg/ffmpeg'
import { Transition } from '@headlessui/react'
import type { Video } from '@site/src/interface'

const ffmpeg = createFFmpeg({ log: true })

async function transcodeVideo(inputFile) {
  // 初始化ffmpeg
  await ffmpeg.load()

  // 读取输入文件
  const input: Uint8Array = await fetchFile(inputFile)

  const outputFileName = `${inputFile.slice(0, inputFile.length - 4)}_h264.mp4`

  // 转码视频
  await ffmpeg.run(
    '-i', // 输入文件
    new TextDecoder().decode(input), // 解码输入文件 使用 TextDecoder 对象将 Uint8Array 类型转换为字符串类型
    '-c:v', // 视频编码器
    'libx264', // H.264编码器
    '-preset', // 编码速度
    'slow', // 慢速编码
    '-crf', // 视频质量
    '22', // 视频质量
    '-c:a', // 音频编码器
    'copy', // 复制音频编码
    outputFileName, // 输出文件
  )

  // 读取输出文件
  const output = ffmpeg.FS('readFile', outputFileName)

  // 返回输出文件的URL
  return URL.createObjectURL(new Blob([output.buffer], { type: 'video/mp4' }))
}

// VideoPage组件
const VideoPage: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>('') // 当前播放视频地址

  const [videoList, setVideoList] = useState<Video[]>([ // 视频列表
    { title: '狸猫换太子·平寇进猫', url: '/video/pkjm.mp4', webm_url: '/video/pkjm.webm' },
    { title: '狸猫换太子·陈琳吊场', url: '/video/cldc.mp4' },
    { title: '狸猫换太子·庆功赐帕(上)', url: '/video/qgcp1.mp4' },
    // { title: '狸猫换太子·狸猫换子', url: '/video/lmhz.mp4' },
    // { title: '狸猫换太子·九曲救主', url: '/video/jqjz.mp4' },
  ])

  // 控制是否显示H265不支持提示框
  const [showAlert, setShowAlert] = useState<boolean>(false)

  const ele = ExecutionEnvironment.canUseDOM ? document.createElement('video') : null

  /**
   * 处理视频点击事件
   * @param {Video} video - 被点击的视频
   * @returns {void}
   */
  const handleVideoClick = async (video: Video) => {
    if (ele) { // 如果video元素存在，则执行以下操作
      // 判断是否支持H265编码格式
      const h265Supported = ele?.canPlayType('video/mp4; codecs="hev1"') || ele?.canPlayType('video/mp4; codecs="hvc1"')
      if (h265Supported?.toLowerCase() === 'maybe' || h265Supported?.toLowerCase() === 'probably') {
        // 如果支持H265，则不提示
        setShowAlert(false)
        setVideoUrl(video.url)
      }
      else {
        // 判断是否支持WebM格式
        const webmSupported = ele?.canPlayType('video/webm')
        if (webmSupported?.toLocaleLowerCase() === 'maybe' || webmSupported?.toLowerCase() === 'probably') {
          // 如果webm_url存在且不为空则setVideoUrl(webm_url)，否则setVideoUrl(url)
          if (video.webm_url) {
            setVideoUrl(video.webm_url)
            setShowAlert(false)
          }
          else {
            setShowAlert(true)
            try {
              const transcodedUrl = await transcodeVideo(video.url) // 转码视频
              setVideoUrl(transcodedUrl)
            }
            catch (err) {
              console.error(err)
              setVideoUrl(video.url)
            }
          }
        }
        else {
          setShowAlert(true)
          try {
            const transcodedUrl = await transcodeVideo(video.url) // 转码视频
            setVideoUrl(transcodedUrl)
          }
          catch (err) {
            console.error(err)
            setVideoUrl(video.url)
          }
        }
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