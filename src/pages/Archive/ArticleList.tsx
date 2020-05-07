import * as React from 'react'
import { List } from 'antd'
import ArticleListItem from './ArticleListItem'

const ArticleList: React.FC = () => {
  const listData = [
    {
      href: 'http://ant.design',
      title: `CORS란 무엇인가요?`,
      imgUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      tags: ['javascript', 'web', 'network', 'javascript', 'web', 'network'],
      content:
        'high quality design resources We supply a series of design principles, practical patterns and high quality design resources ',
    },
    {
      href: 'http://ant.design',
      title: `CORS란 무엇인가요?`,
      imgUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      tags: [
        'javascript',
        'web',
        'network',
        'javascript',
        'web',
        'network',
        'javascript',
        'web',
        'network',
        'javascript',
        'web',
        'network',
        'javascript',
        'web',
        'network',
      ],
      content:
        'high quality design resources We supply a series of design principles, practical patterns and high quality design resources ',
    },
    {
      href: 'http://ant.design',
      title: `CORS란 무엇인가요?`,
      imgUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      tags: ['javascript', 'web', 'network', 'javascript', 'web', 'network'],
      content:
        'high quality design resources We supply a series of design principles, practical patterns and high quality design resources ',
    },
    {
      href: 'http://ant.design',
      title: `CORS란 무엇인가요?`,
      imgUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      tags: ['javascript', 'web', 'network', 'javascript', 'web', 'network'],
      content:
        'high quality design resources We supply a series of design principles, practical patterns and high quality design resources ',
    },
    {
      href: 'http://ant.design',
      title: `CORS란 무엇인가요?`,
      imgUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      tags: [
        'javascript',
        'web',
        'network',
        'javascript',
        'web',
        'network',
        'javascript',
        'web',
        'network',
        'javascript',
        'web',
        'network',
        'javascript',
        'web',
        'network',
      ],
      content:
        'quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
  ]

  return (
    <List itemLayout="vertical" size="large">
      {listData.map((item, index) => (
        <ArticleListItem key={index} article={item} />
      ))}
    </List>
  )
}

export default ArticleList
