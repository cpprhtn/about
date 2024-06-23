import Footer from "@lery/components/Footer";
import Header from "@lery/components/Header";
import ActivityContainer from "@lery/containers/ActivityContainer";
import ActivityItemContainer from "@lery/containers/ActivityItemContainer";

function WorkSection() {
  const years = new Date().getFullYear() - 2022 + 1;

  return (
    <ActivityContainer title={`Work: ${years}년차`}>
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
  );
}

function ExperienceSection() {
  return (
    <ActivityContainer title="Experience">
      <ActivityItemContainer
        title="경희대학교 컴퓨터공학부 컴퓨터공학과"
        subtitle="학부생, 2021.03 ~ 현재"
      ></ActivityItemContainer>
      <ActivityItemContainer
        title="경희대학교 중앙 IT 동아리 쿠러그"
        subtitle="운영진, 2021.04 ~ 현재"
        url="https://khlug.org"
      >
        <ul>
          <li>
            인사 담당자로써 동아리 가입 신청을 및 관련 문의를 처리하였습니다.
            (2021~2022)
          </li>
          <li>개발 담당자로써 동아리 내 전산 전반을 관리하였습니다. (2023~)</li>
          <li>
            경희대학교 소프트웨어 해커톤 khuthon 2021, 2022의 기획 및 운영, 현장
            스태프로 참여하였습니다.
          </li>
          <li>
            경희대학교 소프트웨어 해커톤 khuthon 2023의 기획 및 운영, 현장
            스태프 및 전산 시스템 관리 역할을 맡았습니다.
          </li>
          <li>
            경희대학교 소프트웨어 해커톤 khuthon 2024의 기획 및 운영, 현장
            스태프, 전산 시스템 관리 역할을 맡았습니다. PHP 기반의 기존 khuthon
            서비스를 NextJS + NestJS로 포팅하였습니다.
            <ul>
              <li>
                기존에는 참가 접수 플로우가 학교 인증 시스템에 의존되어 있어,
                의존을 제거하기 위해 접수 플로우 전반을 개편하였습니다.
              </li>
            </ul>
          </li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="SUSC 대학 교류 단체"
        subtitle="운영진 및 멘토, 2023.07 ~ 현재"
        url="https://susc.kr"
      >
        <ul>
          <li>
            SUSC는 여러 대학의 IT 동아리가 연합한 교류 단체로, 방학 기간에
            진행하는 스터디 및 성과 발표회를 중심으로 여러 활동을 진행하고
            있습니다.
          </li>
          <li>SUSC 행사를 기획하고 진행하였습니다.</li>
          <li>
            SUSC 2023 Summer에서 13차시 분량의 플러터 교육을 기획하고, 학습
            자료를 만들어 배포하였습니다. 또, 그 경험을 모아 성과 발표회에서
            발표를 진행하였습니다.
          </li>
          <li>
            SUSC 2023 Winter에서 9차시 분량의 NestJS 교육을 기획하고 학습 자료를
            만들어 디스코드에서 실시간으로 스터디를 진행했습니다.
          </li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="2023 SW마이스터고 연합 해커톤"
        subtitle="멘토, 2023.10"
      >
        <ul>
          <li>
            3일에 걸친 해커톤에서 주제에 대한 피드백이나, 주제 선정 시 고려해야
            할 점, 주제를 구체화하는 방법, 기술적인 질문이나 개발자로서의 커리어
            관련 질문에 답변해드렸습니다.
          </li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="부산 소프트웨어 마이스터 고등학교 AI 전공 캠프"
        subtitle="멘토, 2022.01"
      >
        <ul>
          <li>
            교육을 듣던 중 나오는 학생분들의 질문에 답변을 드리고, 추가적인
            설명을 통해 내용을 쉽게 이해할 수 있도록 도왔습니다.
          </li>
          <li>
            캠프 마지막 날에 진행한 데이터톤에서 질문 답변 및 오류 해결 등
            진행을 도왔습니다.
          </li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="설리번 프로젝트"
        subtitle="앱 부문(Flutter) 멘토, 2021.04 ~ 2021.08"
      >
        <ul>
          <li>
            디데이 앱 제작을 목표로 7차시 과정의 교육 계획서를 작성하고, 교육
            자료를 만들어 12명에게 플러터 멘토링을 진행하였습니다.
          </li>
        </ul>
      </ActivityItemContainer>
    </ActivityContainer>
  );
}

function ArticleSection() {
  return (
    <ActivityContainer title="Article">
      <ActivityItemContainer
        title="Nest.js는 실제로 어떻게 의존성을 주입해줄까?"
        url="https://velog.io/@coalery/nest-injection-how"
        subtitle="Nest.js가 의존성을 주입하는 방법을 Nest.js 코드와 함께 깊게 알아봅니다."
      />
      <ActivityItemContainer
        title="Nest.js는 실제로 어떻게 라우트를 처리할까?"
        url="https://velog.io/@coalery/nest-route-how"
        subtitle="Nest.js가 어떻게 ExpressJS에서 요청을 전달 받아 적절하게 컨트롤러의 핸들러를 호출해줄 수 있는지를 깊게 알아봅니다."
      />
      <ActivityItemContainer
        title="Nest.js를 카프카 컨슈머로 만들기! 그런데 많이 이상하게."
        url="https://velog.io/@coalery/kafka-consumer-with-nestjs"
        subtitle="Nest.js의 커스텀 어댑터를 활용해서 기존에는 HTTP 요청만 처리하던 Nest.js가 카프카 컨슈머로 동작할 수 있도록 만들어봅니다."
      />
    </ActivityContainer>
  );
}

export default function Home() {
  return (
    <main className="mx-auto my-12 max-w-screen-sm p-4">
      <Header />
      <WorkSection />
      <ArticleSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
