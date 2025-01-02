import Footer from "@lery/components/Footer";
import Header from "@lery/components/Header";
import ActivityContainer from "@lery/containers/ActivityContainer";
import ActivityItemContainer from "@lery/containers/ActivityItemContainer";

function WorkSection() {
  return (
    <ActivityContainer title="일">
      <ActivityItemContainer
        title="모두싸인 SaaS 플랫폼팀"
        subtitle="백엔드 엔지니어, 2023.08 ~ 현재"
      >
        <ul>
          <li>
            모두싸인이 SaaS 서비스로서 동작하기 위해 가져야 하는 기반 기능 개발
          </li>
          <ul>
            <li>인증, 인가, 구독, 결제, 보안 등</li>
          </ul>
          <li>
            사내 Nest.js 기반 서비스 및 라이브러리의 버전 v6에서 v10으로
            업그레이드 진행
          </li>
          <li>
            배포 중 충돌 방지를 위해 브랜치 락 개념을 도입하여 프로세스 개선
          </li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="모두싸인 워크스페이스TF"
        subtitle="백엔드 엔지니어, 2022.09 ~ 2023.08"
      >
        <ul>
          <li>
            파편화된 리소스 소유권 및 권한을 통일하고, RBAC 기반의 중앙화된 인가
            시스템을 구축한 프로젝트 참여
          </li>
          <li>
            여러 데이터베이스의 CDC 이벤트를 받아 중앙 인가 데이터베이스에 인가
            데이터를 반영하는 카프카 컨슈머 서비스 구현
          </li>
          <li>
            수 억 개의 데이터를 이기종 데이터베이스 간에 대규모 마이그레이션
            진행
          </li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="모두싸인 조직관리팀"
        subtitle="백엔드 엔지니어, 2022.03 ~ 2022.09"
      >
        <ul>
          <li>여러 사용자가 조직 내에서 협업할 수 있도록 관련 기능 개발</li>
          <li>Express 기반의 레거시 서비스를 Nest.js 기반으로 포팅 진행</li>
        </ul>
      </ActivityItemContainer>
    </ActivityContainer>
  );
}

function ExperienceSection() {
  return (
    <ActivityContainer title="경험">
      <ActivityItemContainer
        title="경희대학교 중앙 IT 동아리 쿠러그"
        subtitle="운영진, 2021.04 ~ 현재"
        url="https://khlug.org"
      >
        <ul>
          <li>동아리 가입 신청 및 관련 문의 처리 (2021~2022)</li>
          <li>동아리 내 전반적인 전산 시스템 유지보수 및 관리 (2023~)</li>
          <li>
            경희대학교 소프트웨어 해커톤 khuthon의 기획 및 운영, 현장 스태프로
            참여 (2021~)
          </li>
          <li>
            경희대학교 소프트웨어 해커톤 khuthon의 전산 시스템 관리 (2023~)
            <ul>
              <li>PHP 기반의 레거시 시스템을 NextJS + NestJS로 포팅</li>
              <li>
                타 학교 학생의 접수를 위해 기존 학교 인증 시스템 기반에서 이메일
                인증 기반으로 접수 플로우 전반을 수정
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
          <li>스터디 활동 및 성과 공유회의 기획 및 운영 참여</li>
          <li>
            SUSC 2023 Summer에서 13차시 분량의 플러터 교육 기획 및 학습 자료
            배포
          </li>
          <li>
            SUSC 2023 Winter에서 9차시 분량의 NestJS 교육 기획 및 실시간 스터디
            진행
          </li>
          <li>SUSC 2024 Summer에서 5차시 분량의 코틀린 스터디 진행</li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="컴퓨터공학부 학생회 주관 2024 트랙 스터디"
        subtitle="멘토, 2024.07 ~ 2024.08"
      >
        <ul>
          <li>10차시 과정의 플러터 스터디 기획 및 멘토링 진행</li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="2023 SW마이스터고 연합 해커톤"
        subtitle="멘토, 2023.10"
      >
        <ul>
          <li>3일간 주제 피드백 및 기술적 피드백 등 멘토링 진행</li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="부산 소프트웨어 마이스터 고등학교 AI 전공 캠프"
        subtitle="멘토, 2022.01"
      ></ActivityItemContainer>
      <ActivityItemContainer
        title="설리번 프로젝트"
        subtitle="앱 부문(Flutter) 멘토, 2021.04 ~ 2021.08"
      >
        <ul>
          <li>7차시 과정의 플러터 스터디 기획 및 멘토링 진행</li>
        </ul>
      </ActivityItemContainer>
    </ActivityContainer>
  );
}

function ArticleSection() {
  return (
    <ActivityContainer title="글">
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
      <ActivityItemContainer
        title="Nestjs를 닮은 DI 시스템 직접 구현하기"
        url="https://velog.io/@coalery/series/nestjs-like-di-system"
        subtitle="프로퍼티와 파라미터에 의존성을 주입해주는 DI 시스템을 구현해봅니다."
      />
    </ActivityContainer>
  );
}

function EducationSection() {
  return (
    <ActivityContainer title="배움">
      <ActivityItemContainer
        title="경희대학교 컴퓨터공학부 컴퓨터공학과"
        subtitle="학부생, 2021.03 ~ 현재"
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
      <EducationSection />
      <Footer />
    </main>
  );
}
