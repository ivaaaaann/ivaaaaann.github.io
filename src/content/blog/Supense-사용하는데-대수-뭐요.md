---
title: 'Suspense 사용하는데, 대수.. 뭐요?'
description: 'React에서 흔히 사용하는 Suspense, ErrorBoundary가 Algebraic Effects(대수적 효과)와 어떤 관계가 있는지 소개합니다.'
thumbnail: https://images.velog.io/images/altmshfkgudtjr/post/df77fa06-83ca-4832-8bc6-1f6bb0b2a924/%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20104.png
pubDate: '2024-06-30'
tags: ['React']
---

# Suspense를 사용하는데, 대수.. 뭐요?

해당 글은 React의 창시자, [Dan Abramov](https://github.com/gaearon)의 [Algebraic Effects for the Rest of Us](https://overreacted.io/algebraic-effects-for-the-rest-of-us/) 를 읽고 내가 이해한 바를 설명하는 글이다. 개인적인 개념정리, 생각정리를 위해 작성한 글이라, 주관적인 견해가 섞여있으니 참고해주시길 바란다.

![Untitled](https://ldh3907.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F939ae0c1-dc3a-4837-86c6-03a773a3f735%2Ff909a532-f547-4a56-b94c-7e38da490f06%2FUntitled.png?table=block&id=2636fa8b-42a5-48c9-8666-ab4ef96970a0&spaceId=939ae0c1-dc3a-4837-86c6-03a773a3f735&width=1730&userId=&cache=v2)

## Algebraic Effect(대수적 효과)란?

필자는 주로 어떠한 새로운 개념을 공부할 때 개략적인 맥락 파악을 위해 사전적 정의를 먼저 살펴보는 편이다. 따라서 천천히 `대수` 의 의미부터 알아보도록 하자.

<aside>
💡 ‘대수(代數)’라는 말은 수를 대신한다는 뜻으로, 수 대신 문자를 쓴다는 점에 착안한 번역어이다.
<small> - wikipedia 중에서</small>

</aside>

위키피디아에서 정의한 대수라는 뜻을 조합해서 대충 사전적 의미를 정의하면, 수를 대신함으로써 발생시키는 효과로 정의할 수 있겠다. 이정도의 정의로써는 개략적인 맥락 파악이 되지 않는다. 컴퓨터 공학자인 우리에게 더 쉽게 다가올만한 정의는 Matija Pretnar의 [대수 효과 및 처리기에 대한 소개. 초대된 튜토리얼 문서](https://www.sciencedirect.com/science/article/pii/S1571066115000705) 를 보면 이해가 쉬워진다.

<aside>

💡 Algebraic effects are an approach to computational effects based on a premise that
impure behaviour arises from a set of operations such as get & set for mutable store,
read & print for interactive input & output, or raise for exceptions

<dd>
대수적 효과는 다음과 같은 전제에 기초한 계산 효과에 대한 접근 방식입니다.
불순한 동작은 변경 가능한 저장소에 대한 가져오기 및 설정과 같은 일련의 작업에서 발생합니다.
대화형 입력 및 출력을 위해 읽고 인쇄하거나 예외를 발생시킵니다.
</dd>

<small>
- An Introduction to Algebraic Effects and Handlers. Invited tutorial paper 중에서
</small>

</aside>

위 정의에 따르면 대수적효과는 컴퓨터에서 이루어지는 여러 연산들 중, 순수하지 못한 연산(저장소에서 데이터를 가져오거나 설정하는 연산들)을 computational effect를 발생시켜 핸들링하는 접근 방식 으로 이해할 수 있겠다.

해당 정의를 이해하기 위해 먼저 알고 가야할 단어 2가지(computational effect, impure behaviour)가 나왔다. 해당 단어에 대한 정의는 다음과 같다.

### Impure & Pure

컴퓨터 공학에서 순수한 연산과 순수하지 못한 연산은 어떤의미일까? 논리의 산물이라고 불리는 컴퓨터라는 물건에서 이루어지는 모든 연산들은 논리적이다. 당장이라도 컴퓨터를 키고 계산기를 켜서 1+1을 계산해보면 2가 나올 것이다. 오늘 점심을 먹고 다시 계산해봐도 2가 나올 것이고, 시간이 흘러 50년 정도 지났을 때도 2가 나올 것이다. 이처럼 `어떠한 동일한 입력이 있을 때, 아무런 외부요소의 영향을 받지않고 동일한 출력을 하는 연산`을 컴퓨터 공학에서의 순수한 연산이라고 할 수 있다.

그러면 반대로 순수하지 않은 연산은 `동일한 입력이 있을 때 외부 요소를 받아서 동일한 출력을 하지 못하는 연산`이라고 할 수 있겠다. 이러한 연산들은 보통 API 통신, 날짜 출력 같은게 있겠다. API 통신은 네트워크 상태라는 요소에 영향을 받고, 날짜 출력의 경우에는 시간의 영향을 받기때문에 순수하지 못한 연산이라고 할 수 있다.

### Computational Effect

<aside>

💡 **Practically, its useful to think of an effect as any interaction between a sub expression and a central control which handles global resources in a program**. Sometimes, a local expression may need to send messages to the central control while execution, along with enough information so that once the central control is done, it can resume the suspended execution.

<dd>
실제로 효과를 하위 표현식과 프로그램의 전역 리소스를 처리하는 중앙 컨트롤 간의 상호 작용으로 생각하는 것이 유용합니다. 때로는 로컬 표현식이 실행되는 동안 중앙 제어가 완료되면 일시 중지된 실행을 재개할 수 있도록 충분한 정보와 함께 중앙 제어에 메시지를 보내야 할 수도 있습니다.
</dd>

<small>
- Stack Overflow 중에서
</small>

</aside>

위에 잘 설명한 Computational Effect를 살펴보면 `하위 표현식과 중앙 컨틀로 간의 상호작용`이라고 설명한다. 이를 React Context API를 통해 쉽게 설명하자면 (넓은 지식이 없어, 일반적인 예시를 들지 못해 사죄의 말씀을 드린다), 최상위 App에서 theme에 대한 상태를 정의한 Provider를 적용했을 때, 하위에 컴포넌트가 해당 Provider에 접근하여 theme의 값을 바꾸는 연산을 트리거 하고 App에서 Provider에 접근하여 theme를 바꿨다면 이는 Computational Effect가 발생했다고 볼 수 있다. (필자는 이렇게 이해했다) 즉 어떠한 연산이 이뤄지면서 현재의 환경이 바뀌게 되었다면 이것은 Computational Effect가 발생했다고 볼 수 있는 것이다.

이렇게 여러 개념을 한 방에 모아서 대수적 효과를 정의하게 되면, 여러 연산들이 이루어지는 과정에서, Impure Behaviour, 즉 순수하지 못한 연산이 발생했을 때 이를 통해 발생하는 Computational Effect스럽게, 즉 상위 환경에서 순수하지 못한 연산에 대해서 처리해준 후 다시 연산이 진행되는 개념이라고 결론 지을 수 있다.

여기서 React Suspense의 동작을 떠올려 보자. 뭔가 비슷한 공통점을 느낄 수 있을 것이다.

## React Suspense와의 관계

![carbon (3).png](<https://ldh3907.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F939ae0c1-dc3a-4837-86c6-03a773a3f735%2Fe05401a4-7f0f-4f64-bdf2-66e5a3b194ad%2Fcarbon_(3).png?table=block&id=4965df62-7c49-42bf-b9cf-c6073c317ecd&spaceId=939ae0c1-dc3a-4837-86c6-03a773a3f735&width=2000&userId=&cache=v2>)

일반적인 Suspense 예제이다. 이 예제를 대수적효과의 개념을 곁들여 설명해보겠다.
`<Suspense/>`(상위 환경) 밑에 children으로 들어가있는 `<PromiseReturnComponent/>`는 API 통신을 위해 Promise를 리턴(Impure Behaviour)하게 되고, `<Suspense/>`는 그걸 캐치(Computational Effect)하여 자신의 fallback prop으로 들어온 `<Fallback/>` 컴포넌트를 렌더링 할 것이다. 그리고 Promise가 resolve 된 후에는 다시 `<PromiseReturnComponent/>` 가 렌더링 된다.

Dan Abramov는 실제로 Suspense에 완벽한 대수적효과를 적용한건 아니지만, 대수적효과를 통한 이점을 얻을 수 있도록 설계했다고 한다.

확실히 대수적효과의 Computational Effect가 아닌, 단순히 Promise에 대한 분기처리로 로딩 UI를 처리해야 했다면 많은 로딩 상태가 생겨났을 것이고 그로인해 프로그램의 복잡도도 높아졌을 것이다.

<aside>

💡 This isn’t an algebraic effect per se, even though this trick was [inspired](https://mobile.twitter.com/sebmarkbage/status/941214259505119232) by them. But it achieves the same goal:

<dd>

이것은 그 자체로 대수적 효과는 아니지만, 이 트릭은 그들에게서 [영감을 받았습니다](https://mobile.twitter.com/sebmarkbage/status/941214259505119232).
하지만 동일한 목표를 달성합니다.

</dd>

<small>
- Algebraic Effects for the Rest of Us 중에서
</small>

</aside>
<small>
Suspense를 적용해준 Dan 아저씨와 Sebastian 아저씨에게 감사의 말씀을 드리고 싶다. 🙇‍♂️
</small>

## 마치며

나날이 React 코드만 짜던 나에게 Dan Abramov의 Algebraic Effects for the Rest of Us 라는 글은 스스로에게 코더인가, 프로그래머인가 라는 의문을 던지게끔 만들어주었다. 본질적으로 프로그래밍이란 것이 수학적 개념들이 모여 만들어진 컴퓨터라는 산물에게 명령을 내리는 행위이기에, 프로그래머에게 수학적 지식은 사람이 갖춰야할 기본 덕목과 같다고 생각한다.

말 그대로 수학적 지식은 기본적인 Fundamental knowledge 이다. `기본적으로 좋더라~` 라는 것이다.

절대적인 것은 없기에, 수학적 지식이 없는 개발자는 개발자가 아니냐 라는 질문을 던졌을때 그렇지 않다라고 생각한다. 어떤 경우에는 회사 상황에 따라서 좋은 코드에 대한 기준이 바뀌고, 내 개인 신념에 따라서 좋은 코드의 기준이 바뀔 때도 있다. 각각의 경우 전부 trade-off 가 존재한다. 따라서 합리적인 기준만 있다면 좋은 코드라고 생각된다.

프로그래머에게 수학적 지식의 필요성에 대해 얘기하다가 얘기가 좀 길어졌는데, 마지막으로 필자는 점점 가파른 성장 속도를 보여주고 있는 AI분야를 대비하기 위해서 대체 가능성이 있는 개발자, 코더 보다는 프로그래머로써 펀드멘탈을 길러야하지 않을까 라는 생각으로 끝으로 글에 대한 포스팅을 마친다.
