import type { Props } from '@theme/Footer/Copyright'

import React from 'react'

export default function FooterCopyright({ copyright }: Props): JSX.Element {
  return (
    <div
      className="footer__copyright ui-active:no-underline hover:no-underline"
      // Developer provided the HTML, so assume it's safe.

      dangerouslySetInnerHTML={{ __html: `<p>${copyright}</p><p style="display:flex;justify-content:center"><a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"><img alt="Creative Commons License" style="height: 26px;border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png" /></a>&nbsp;&nbsp;<img style="width: 26px;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1">&nbsp;&nbsp;<img style="width: 26px;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1">&nbsp;&nbsp;<img style="width: 26px;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><p /><p style="margin-top: .5rem">本站所有内容采用&nbsp;&nbsp;<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1">Attribution-NonCommercial 4.0 International(CC BY-NC 4.0) 协议</a>&nbsp;&nbsp;进行许可<br />若与其他同步平台协议冲突，以本站为准</p>` }}
    />
  )
}
