---
title: '개인 블로그가 Astro인 이유'
description: '이번에 새롭게 만든 개인블로그를 왜 Astro 프레임워크로 만들게 되었는지를 소개합니다.'
pubDate: '2024-06-01'
thumbnail: 'https://ldh3907.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F939ae0c1-dc3a-4837-86c6-03a773a3f735%2Fdbef5833-3aef-4807-b3f8-bd8c07bd67af%2FUntitled.png?table=block&id=d0043f5c-b7e5-4fe2-a821-1f7480a64d45&spaceId=939ae0c1-dc3a-4837-86c6-03a773a3f735&width=1470&userId=&cache=v2'
tags: ['Astro']
---

개인적으로 공부한 내용을 기록하거나, 평소 고민 같은걸 끄적이기 위해서 저장소? 같은 것이 필요했다. 티스토리나 브랜치같은 블로그 플랫폼을 사용하면 되지만, 마침 개인 시간에 여유도 있고 개발자로서 자존심이 상하기에 새로운 기술도 배울 겸 직접 만들어보았다.

## Astro 프레임워크

블로그를 구축하기 좋은 프레임워크가 뭐가 있는지 구글링 부터 하였다. 내가 직접 프레임워크를 만들어보면 큰 도움이 되긴 하겠지만… 현재의 나는 실력도 부족하고, 시간도 그리 많은건 아니었어서 프레임워크의 힘을 빌리기로 하였다. ( 합리화 사죄의 의미로 나중에 HTML SSR → JS Hydration 개념을 직접 구현해보고 후기를 작성해보겠다. )

그렇게 구글링을 하던 도중 Astro 라는 프레임워크를 발견하였다. Astro 독스에 들어가보니 첫 페이지부터 강한 인상의 문구가 적혀있었다.

<aside>
💡 <strong>Astro</strong> is the web framework for building <strong>content-driven websites</strong> like blogs, marketing, and e-commerce.

Astro는 블로그, 마케팅, 전자상거래와 같은 콘텐츠 중심 웹사이트를 구축하기 위한 웹 프레임워크입니다.

</aside>

당시에 Gatsby로 만들려고 마음을 먹고 있었는데 Astro가 주는 성능 상 이점과 아키텍쳐, 여러 레퍼런스( [링크1](https://twitter.com/sebastienlorber/status/1694392101281190224), [링크2](https://remotesynthesis.com/blog/lifting-off-with-astro/), [링크3](https://sapegin.me/blog/gatsby-to-astro/) )를 참고하면서, **Astro**를 사용하여 블로그를 만들기로 생각이 바꼈다.

## Island Architecture

Astro 프레임워크는 아일랜드 아키텍쳐로 쓰는 것으로 유명하다. Astro의 대표적인 장점 2가지가 있는데,

- [**Server-first**](https://docs.astro.build/en/basics/rendering-modes/) : Moves expensive rendering off of your visitors’ devices.
- [**Zero JS, by default**](https://docs.astro.build/en/basics/astro-components/) : Less client-side JavaScript to slow your site down

이 2가지 장점 모두가 아일랜드 아키텍쳐 채택 하였기에 가능한 장점들인 만큼 Astro 프레임워크에서의 아일랜드 아키텍쳐의 비중은 크다.

아일랜드 아키텍쳐는 2019년 [Katie Sylor-Miller](https://twitter.com/ksylor) 아주머니께서 “Component Island”라는 개념으로 처음 고안되었고, 후에 2020년 [Jason Miller](https://x.com/_developit) 아저씨께서 해당 개념을 확장하여 https://jasonformat.com/islands-architecture/ 라는 포스트를 통해 수면위로 떠올랐다.

![Untitled](https://ldh3907.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F939ae0c1-dc3a-4837-86c6-03a773a3f735%2Fecff870c-18e6-4225-bd82-3caa69687242%2FUntitled.png?table=block&id=c2bc6a25-3c08-45d3-bc79-d009a9cfd70a&spaceId=939ae0c1-dc3a-4837-86c6-03a773a3f735&width=2000&userId=&cache=v2)

<aside>
💡 The general idea of an “Islands” architecture is deceptively simple: render HTML pages on the server, and inject placeholders or slots around highly dynamic regions
</aside>

위 문장처럼 아일랜드 아키텍쳐의 개념은 생각보다 간단하다. 렌더링해야할 컴포넌트 즉 아일랜드들중 정적인 동작만을 하는 아일랜드들은 SSR 시점에 정적 HTML 렌더링을 진행하고, 동적 아일랜드들은 서버사이드 렌더링 시점에 정적 HTML 렌더링 + placeholder 역할을 하는 스크립트를 심어줌으로써 CSR 시점에 하이드레이션을 유도하는 개념이다. [링크](https://github.dev/withastro/astro/blob/main/packages/astro/src/runtime/server/astro-island.ts#L53)에서 상세한 로직을 볼 수 있다.

따라서 화면에 보여지는 영역별로 정적, 동적 렌더링 처리를 따로 해줌으로써 CSR에 로드되는 자바스크립트 양을 줄일 수 있고, 최초 콘텐츠풀 페인트(FCP) 수치와 SEO를 챙겨갈 수 있다는 이점이 있어서 개인블로그에 안성맞춤인 프레임워크라고 생각했다.

## 마치며

이렇게 블로그 개발에서 시작하여 Astro 프레임워크 소개까지 오게 됐는데, 솔직하게 이번에 새로 만들게된 개인블로그에 Astro를 사용한 이유는 **새로운 기술을 접해보고자** 사용하였다. 최근들어 많은 양의 회사 업무로 인해서 잠깐 번아웃 비스무리한게 온건지, 개인 공부를 할 의지가 많이 줄어들었었는데, 다행이게도 Astro로 개인블로그를 만들어보니 어느정도 내가 성장하고 있다는 느낌도 받으면서, 리프레쉬가 된 것 같다. 이제는 블로그도 만들었겠다, 기록하고 싶었던 주제로 열심히 포스팅을 올려볼 생각이다.
