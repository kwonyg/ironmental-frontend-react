import * as React from 'react'
import { List } from 'antd'
import ArticleListItem from './ArticleListItem'

// TODO: useParams를 사용하여 ArchiveIntroSection일 경우 인피니티 스크롤이 먹히지 않도록 하기
const ArticleList: React.FC = () => {
  const listData = [
    {
      href: 'http://ant.design',
      title: `CORS란 무엇인가요?`,
      imgUrl:
        'https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5381_-_Web-512.png',
      tags: ['web'],
      content:
        'CORS(Cross Origin Resource Sharing)현재 도메인 이외의 다른 도메인으로 리소스를 요청하는 경우 ex) SPA(Single Page Application) 보안 상의 이유로 브라우저는 CORS를 제한same origin policy',
    },
    {
      href: 'http://ant.design',
      title: `Race Condition 이란?`,
      imgUrl:
        'https://cdn2.iconfinder.com/data/icons/logos-brands-4/24/logo_brand_brands_logos_linux-512.png',
      tags: ['os'],
      content:
        '여러개의 프로그램이 공유하고 있는 변수를 서로 접근하려고 해서 발생하는 현상인데 이를 Race condition 이라고 하며 이 프로그램을 스레드 세이프(thread-safe)하지 않다 라고 한다.',
    },
    {
      href: 'http://ant.design',
      title: `What is Sidecar pattern in k8s`,
      imgUrl:
        'https://www.veritis.com/wp-content/uploads/2015/06/Kubernetes-main-image.jpg',
      tags: ['kubernetes'],
      content:
        '원래 사용하는 기본 컨테이너의 기능을 확장하거나 강화하는 용도의 컨테이너를 추가하는 패턴 기본 컨테이너와 독립적으로 동작하는 별도의 컨테이너를 붙이는 패턴부가적인 공통 기능들은 사이드카 컨테이너를 추가해서 사용',
    },
    {
      href: 'http://ant.design',
      title: `고차 함수(Higher-Order Function)란 무엇인가요?`,
      imgUrl: 'https://i.ytimg.com/vi/bThEbBcrfKE/maxresdefault.jpg',
      tags: ['javascript', 'functional programming', 'haskell'],
      content: '함수를 인자로 전달받거나 함수를 반환하는 함수이다.',
    },
    {
      href: 'http://ant.design',
      title: `가상 돔(Virtual DOM)과 실제 DOM의 차이점이 무엇인가요?`,
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
      tags: ['javascript', 'web', 'html'],
      content:
        'DOM: Document Object Model로 웹페이지를 자바스크립트로 제어하기 위한 문서 객체 모델을 의미합니다. 가상 돔(Virtual DOM) 자바스크립트 오브젝트 형식으로 되어있는 가상의 DOM 입니다. 가상으로 만든 돔과 기존의 돔과 비교하여 변화가 필요한 부분만 업데이트하기 위해 사용..',
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
