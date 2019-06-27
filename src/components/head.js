import React from 'react'
import { Helmet } from 'react-helmet'

export default props => {
  const title = [
    props.title,
    props._frontmatter ? props._frontmatter.title : false,
    'Design System',
  ]
    .filter(Boolean)
    .join(' — ')

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="page description" />
      <link rel="icon" type="image/png" href="/icon.png" />
      <link rel="apple-touch-icon" type="image/png" href="/icon.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@trevorwadams" />
      <meta name="twitter:image" content="https://legacy-project.netlify.com/icon.png" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="twitter description" />
    </Helmet>
  )
}
