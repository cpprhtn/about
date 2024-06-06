import Footer from "@lery/components/Footer";
import Header from "@lery/components/Header";
import ActivityContainer from "@lery/containers/ActivityContainer";
import ActivityItemContainer from "@lery/containers/ActivityItemContainer";

export default function Home() {
  return (
    <main className="mx-auto my-12 max-w-screen-md p-4">
      <Header />
      <ActivityContainer title="Work">
        <ActivityItemContainer
          title="모두싸인 SaaS 플랫폼팀"
          subtitle="백엔드 엔지니어, 2023.08 ~ 현재"
        ></ActivityItemContainer>
        <ActivityItemContainer
          title="모두싸인 워크스페이스TF"
          subtitle="백엔드 엔지니어, 2022.09 ~ 2023.08"
        ></ActivityItemContainer>
        <ActivityItemContainer
          title="모두싸인 조직관리팀"
          subtitle="백엔드 엔지니어, 2022.03 ~ 2022.09"
        ></ActivityItemContainer>
      </ActivityContainer>
      <ActivityContainer title="Experience">
        <ActivityItemContainer
          title="경희대학교 컴퓨터공학부 컴퓨터공학과"
          subtitle="학부생, 2021.03 ~ 현재"
        ></ActivityItemContainer>
        <ActivityItemContainer
          title="경희대학교 중앙 IT 동아리 쿠러그"
          subtitle="운영진, 2021.04 ~ 현재"
        ></ActivityItemContainer>
        <ActivityItemContainer
          title="SUSC 대학 교류 단체"
          subtitle="운영진, 2023.07 ~ 현재"
        ></ActivityItemContainer>
      </ActivityContainer>
      <ActivityContainer title="Article">
        <ActivityItemContainer
          title="Nest.js는 실제로 어떻게 의존성을 주입해줄까?"
          url="https://velog.io/@coalery/nest-injection-how"
          subtitle="Nest.js가 의존성을 주입하는 방법을 Nest.js 코드와 함께 깊게 알아봅니다."
        ></ActivityItemContainer>
        <ActivityItemContainer
          title="Nest.js는 실제로 어떻게 라우트를 처리할까?"
          url="https://velog.io/@coalery/nest-route-how"
          subtitle="Nest.js가 어떻게 ExpressJS에서 요청을 전달 받아 적절하게 컨트롤러의 핸들러를 호출해줄 수 있는지를 깊게 알아봅니다."
        ></ActivityItemContainer>
        <ActivityItemContainer
          title="Nest.js를 카프카 컨슈머로 만들기! 그런데 많이 이상하게."
          url="https://velog.io/@coalery/kafka-consumer-with-nestjs"
          subtitle="Nest.js의 커스텀 어댑터를 활용해서 기존에는 HTTP 요청만 처리하던 Nest.js가 카프카 컨슈머로 동작할 수 있도록 만들어봅니다."
        ></ActivityItemContainer>
      </ActivityContainer>
      <Footer />
    </main>
  );
}
