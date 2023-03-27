# 🦔 배포 링크

[2주차 미션 결과 화면](https://ceos-2nd-react-todo-17th.vercel.app/)

<br>

# 🦔 Overview

- 저는 `CSS Module`에 더 익숙한 편이라, 이번 과제를 하면서 오랜만에 `Styled-Components`를 사용해봤습니다!
  CSS 방법론에 대해 [블로그](https://velog.io/@devgani/CSS-%EB%B0%A9%EB%B2%95%EB%A1%A0-CSS-Module-Styled-Components-tailwind)에 정리도 해보았어요.
- `삭제 Modal`도 별도의 컴포넌트로 두면 좋을 것 같습니다

<br>

# 🦔 미션

## 미션 목표

- VSCode, Prettier를 이용하여 개발환경을 관리합니다.
- React의 기초를 이해합니다.
- React를 통한 어플리케이션 상태 관리 방법을 이해합니다.
- React Hooks에 대한 기초를 이해합니다.
- Styled-Components를 통한 CSS-in-JS 및 CSS Preprocessor의 사용법을 익힙니다.

<br>

## Key Questions

### 1. Virtual-DOM은 무엇이고, 이를 사용함으로서 얻는 이점은 무엇인가요?

> Virtual-DOM:
> React, Vue.js 와 같은 웹 프레임워크에서 사용되는, 실제 DOM의 경량 JavaScript 표현.


DOM 조작이 일어나면, ~~1차 스터디때 공부한 것처럼~~, 렌더트리 생성과 레이아웃 계산을 다시하며 리렌더링이 발생합니다.

<img src='https://d2.naver.com/content/images/2015/06/helloworld-59361-3.png' width='500'>

따라서 모든 변경사항에 대해 매번 DOM을 변경하는 것은 비효율적입니다. 특히나 DOM 조작이 자주 일어나는 SPA에서는 더더욱..

따라서 우리는 Virtual DOM을 사용합니다.
가상DOM은 DOM 노드 트리를 복제한 자바스크립트 객체입니다. class, style 등의 속성은 있지만, DOM의 API 메서드는 갖고 있지 않습니다.

<div style='display:flex'>
<img src='https://velog.velcdn.com/images/devgani/post/3c0cf9e2-46c8-47e2-a432-a4a2b275b7ff/image.png' width='450'>
<img src='https://user-images.githubusercontent.com/65700066/227509282-1d5700bd-bfcb-4401-bd40-fb56ff3f5620.png' width='350'></div><br>

실제 DOM을 간략한 JavaScript object 바꾼 다음, 이것을 가지고 시뮬레이션을 해 보다가, 그 중 가장 경제적으로 DOM에 변화를 가하는 방법을 적용하는 방법을 사용합니다. 즉, 실제 DOM 에 적용되기 전에 Virtual-DOM에 먼저 적용시키고 그 최종적인 결과를 실제 DOM 으로 전달해줍니다.
이를 통해 브라우저 내에서 발생하는 연산의 양을 줄이면서 성능이 개선되는 효과를 누리게 됩니다. 😄

하지만 Virtual-DOM 을 사용하는 것이 무조건적인 해결책은 아닙니다.
DOM을 직접 제어하는 것과 비교 시 적은 비용이 들 뿐, 최적화를 제대로 해주지 않는다면 반복된 렌더링으로 인한 성능 저하를 겪을 수 밖에 없습니다.

[브라우저 렌더링 과정 참고](https://d2.naver.com/helloworld/59361)

[가상DOM에 대해 잘 설명된 링크](https://youtu.be/6rDBqVHSbgM)

<br>

### 2. 미션을 진행하면서 느낀, React를 사용함으로서 얻을수 있는 장점은 무엇이었나요?

이번 과제를 하며 바닐라JS에 비해 React를 사용하며 느낀 장점은 다음과 같습니다.
>
- JSX 사용으로 인해, html과 js 파일을 왔다갔다 하지 않아도 된다.
- state 를 사용하여, 자주 변경되는 변수를 사용하기 쉬워진다.

또한, 평소 React를 사용하며 느낀 다른 장점들도 있습니다:
>
- Component의 재사용을 통한 깔끔한 코드 작성, 유지 보수 용이
- Virtual DOM 사용을 통한 성능 개선


<br>

### 3. React에서 상태란 무엇이고 어떻게 관리할 수 있을까요?

- **React 상태(State)**
`state`는 컴포넌트 안에서 관리 되고 시간이 지나면서 바뀌는 동적인 데이터(객체)입니다. `state`가 바뀔때마다 컴포넌트가 리렌더 됩니다. <br>
컴포넌트들 사이에서는 `props` 형태로 state를 공유합니다.
React는 `단방향` 데이터 흐름을 가지기 때문에, 부모 -> 자식 컴포넌트의 방향으로 props를 전달하는 `Props Drilling` 과정이 일어납니다.
이때, 컴포넌트 계층이 많아지면 props 추적과 코드 이해가 어려워지고, 중간 단계에 있는 컴포넌트들이 불필요한 props를 들고 있어야 하는 문제가 발생합니다.
때문에 React의 상태 관리가 필요해집니다.
<br>

- **React의 상태 관리**

**1. React Hooks**
함수형 컴포넌트에서, state와 리액트의 생명주기 기능을 연결(hook into)할 수 있게 해주는 함수.
대표적으로 `useState`, `useEffect`가 있습니다.
  - 라이브러리를 통하지 않고 직접 state를 관리하는 방법
  - 규모가 있는 프로젝트에서 사용 시 지나친 props drilling 발생 가능<br>
  
**2. Redux**
JavaScript(자바스트립트) 상태관리 라이브러리.<br>
a. 구조
[flux패턴](https://haruair.github.io/flux/docs/overview.html)을 사용, 데이터가 단방향으로 흐르는 구조를 갖는다.

<img src='https://www.freecodecamp.org/news/content/images/2022/06/2.png' width='500'>

  - `Store`: state가 저장, 관리되는 유일한 하나의 공간
  - `Action`: type과 전송할 데이터(payload)로 이루어진 JS 객체 형태 데이터. 앱에서 스토어에 운반할 데이터.
  - `Dispatcher 함수`: action을 전달
  - `Reducer`: state 조작. 현재(이전)의 state와 받은 action에 따라 그 state를 변화시킨 다음 새로운 state를 반환.
  
b. 특징
  - 유저가 많은, 검증된 라이브러리라는 장점
  - 비동기 데이터 처리를 위해 또 다른 라이브러리를 사용해야 함.
  - 러닝커브가 있다.

**3. Recoil**
React 전용 상태관리 라이브러리. [Facebook의 Recoil 소개 영상 참고](https://www.youtube.com/watch?v=_ISAA_Jt9kI) <br>
a. 구조
`atom → selector → view` 의 data-flow

<img src='https://velog.velcdn.com/images/devgani/post/d36a20c6-0adf-412c-9192-1026f02d7220/image.png' width='500'>

- `Atom`: 컴포넌트가 구독할 수 있는 리액트 state. 우리가 전역적으로 사용하길 원하는 state를 atom이라는 걸로 띄워서(페북은 비눗방울이라고 표현) 어디서든지 사용할 수 있도록 함.
- `Selector`: atoms나 다른 selectors를 입력으로 받는 순수 함수(pure function). (뭔소리야?->옆을 보세요) atom을 활용해 개발자가 원하는 대로 값을 뽑아서 사용할 수 있는 API.


b. 특징
  - React 내부의 상태를 활용하고 context API를 통해 구현되어 있어, React스러운 라이브러리
  - 리액트 useState 훅과 비슷하게 동작하는, 직관적이면서 간단한 구조. 낮은 러닝커브, 간단한 코드.
  - 비동기 처리를 기반으로 작성되어 동시성 모드를 제공. 다른 라이브러리 필요x.
  

<br>

### 4. Styled-Components 사용 후기 (CSS와 비교)

Styled-Components 는 대표적인 `CSS-in-JS` 라이브러리입니다.
Facebook 개발자 Vjeux의 2014년 발표에서 소개된 개념인 `CSS-in-JS`는, `전통적인 CSS`와 비교했을때 다음과 같은 장점이 있습니다.

>
- **Global namespace**: class명이 빌드 타임에 유니크하게 변경되기 때문에 별도의 명명 규칙이 필요치 않음
- **Dependencies**: CSS가 컴포넌트 단위로 추상화되기 때문에 CSS간 의존성 고려가 필요없음 (모듈성)
- **Dead Code Elimination**: (주로) 컴포넌트와 CSS가 동일한 파일내에 존재하기 때문에 수정 및 삭제가 용이
- **Minification**: 빌드 타임에 짧은 길이의 유니크한 클래스를 자동으로 생성하여 문서 사이즈를 낮춰줌 (코드 경량화)
- **Sharing Constants**: CSS 코드가 JS에 작성되므로 상태 공유가 가능
- **Non-deterministic Resolution**: CSS가 컴포넌트 스코프로 적용되므로 우선순위에 따른 문제가 없음
- **Isolation**: CSS가 컴포넌트에 격리되어 있기 때문에 상속 문제가 없음


CSS-in-CSS 방법인 `CSS Module`을 주로 사용하던 저에게는,
>
- CSS 파일을 왔다갔다 하지 않아도 되는 점
- CSS 코드가 JS에 작성되므로 상수, 함수를 공유할 수 있다는 점

정도가 가장 크게 체감되었습니다.
앞으로 `Styled-Components` 사용에 좀 더 익숙해진다면 간편한 작업이 가능하다는 장점도 느낄 수 있을 것 같아요.

이와 관련해 추가로 알아보며 작성한 [블로그 글](https://velog.io/@devgani/CSS-%EB%B0%A9%EB%B2%95%EB%A1%A0-CSS-Module-Styled-Components-tailwind)

<br>

## 필수 요건

- [x] 1주차 미션의 결과물을 그대로 React로 구현합니다
- [x] Functional Components를 사용합니다
- [x] React Hooks만을 사용해 상태를 관리합니다
      (이번주는 Redux, MobX, Recoil, SWR등의 외부 상태관리 라이브러리를 사용하지 않아도 미션 수행에 지장이 없습니다.)

<br>

## 선택 요건

- [x] 기존 Todo-list에 여러분들이 추가하고 싶은 기능과 디자인을 자유롭게 추가해보세요.
