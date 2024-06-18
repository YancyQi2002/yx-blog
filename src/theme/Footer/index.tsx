import React from 'react'

import { useThemeConfig } from '@docusaurus/theme-common'
import FooterLayout from '@theme/Footer/Layout'
import FooterLinks from '@theme/Footer/Links'
import FooterLogo from '@theme/Footer/Logo'

import FooterCopyright from './Copyright'

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig()
  if (!footer)
    return null

  const { copyright, links, logo, style } = footer

  return (
    <FooterLayout
      style={style}
      links={Array.isArray(links) && links.length > 0 ? <FooterLinks links={links} /> : null}
      logo={logo != null ? <FooterLogo logo={logo} /> : null}
      copyright={copyright != null ? <FooterCopyright copyright={copyright} /> : null}
    />
  )
}

export default React.memo(Footer)
