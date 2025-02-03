import Footer from "@cpprhtn/components/Footer";
import Header from "@cpprhtn/components/Header";
import ActivityContainer from "@cpprhtn/containers/ActivityContainer";
import ActivityItemContainer from "@cpprhtn/containers/ActivityItemContainer";
import ProjectSection from "@cpprhtn/components/Project";

function SkillSection() {
  return (
    <ActivityContainer title="스킬">
      <ActivityItemContainer
        title="Python"
        subtitle=""
      >
        <ul>
          <li>Pandas, Polars, Fastapi, Pyspark, Streamlit</li>
          <li>Pytorch, Tensorflow, Airflow, AutoML</li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="C++"
        subtitle=""
      >
        <ul>
          <li>CMake, OpenMP, OpenCV</li>
          <li>Unreal Engine, Cocos2D-x</li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="SQL & DB"
        subtitle=""
      >
        <ul>
          <li>PostgreSQL, MySQL</li>
          <li>MongoDB, Redis</li>
        </ul>
      </ActivityItemContainer>
    </ActivityContainer>
  )
}

function WorkSection() {
  return (
    <ActivityContainer title="경력">
      <ActivityItemContainer
        title="한국전자통신연구원(ETRI) · 환경ICT연구실"
        subtitle="인턴, 2024.07 ~ 2024.08"
      >
        <ul>
          <li>FEMS 보급형 표준 플랫폼 개발 및 실증 연구</li>
          <ul>
            <li>공장 에너지 관리 시스템을 위한 수요 예측 연구</li>
            <li>생성형 AI를 활용한 이상진단 시뮬레이터 기능 연구</li>
          </ul>
          <a href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11949327"><li>[논문/한국통신학회] miniEDA: 데이터 메시를 활용한 통합 데이터 분석 및 품질 관리 플랫폼 (1저자)</li></a>
        </ul>
      </ActivityItemContainer>
      
    </ActivityContainer>
  );
}
function ExperienceSection() {
  return (
    <ActivityContainer title="경험">
      <ActivityItemContainer
        title="Apache Airflow Users Korea: Organizer"
        subtitle="2023.12 ~ Now"
      />
      <ul>
          <li>
            Airflow 한국사용자모임 2nd Meetup Airflow 101 발표
          </li>
          <li>
            파이콘 한국 2024 Airflow 포스터 부스 운영 
          </li>
      </ul>
      <ActivityItemContainer
        title="C++ Korea: Organizer"
        subtitle="2023.12 ~ Now"
      >
        <ul>
          <li>
            <a href="https://festa.io/events/4635">[부산] 리눅스 환경(WSL 포함)에서 C++ 실습하기</a> 주최
          </li>
          <li>
            <a href="https://festa.io/events/4909">C++ Korea 2024 부산 Meet-Up(3월)</a> 주최
          </li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="파이토치한국사용자모임: Facebook Moderator"
        subtitle="2023.06 ~ Now"
      />
      <ActivityItemContainer
        title="한국인공지능연구소 · ChatGPT Reverse Engineering"
        subtitle="AI Researcher, 2023.03 ~ 2023.05"
      >
        <ul>
          <li>Research and implementation of PPO and RLHF</li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="Python Korea: Organizer"
        subtitle="2023.01 ~ Now"
      >
        <ul>
          <li>
            <a href="https://event-us.kr/pyconkr/event/71494">파이콘 한국 부산 세미나</a> 주최
          </li>
          <li>
            <a href="https://2024.pycon.kr/">파이콘한국2023,2024 컨퍼런스</a> 주최
          </li>
          <li>A11y Team Lead</li>
          <li>
            <a href="https://news.hada.io/topic?id=18584&utm_source=discord&utm_medium=bot&utm_campaign=1983">pypi Korean translations 담당자</a>
          </li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="GDSC: Core Member"
        subtitle="2022.07 ~ 2024.03"
      >
        <ul>
          <li>“AI시장에서 MLOps로 전직하기” 기술세미나 발표</li>
          <li>GDSC X GDG DevFest DaangnMarket Code Jam Session 진행</li>
          <li>Code Bridge conference 기획/주최</li>
          <li>GDSC Busan Hackathon 기획/주최</li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="SUSC 대학 교류 단체 Co-Founder"
        subtitle="운영진 및 멘토, 2023.07 ~ 현재"
        url="https://susc.kr"
      >
        <ul>
          <li>스터디 활동 및 성과 공유회의 기획 및 운영 참여</li>
          <li>
            SUSC 2023 Summer: AI논문리딩 스터디 진행
          </li>
          <li>
            SUSC 2023 Winter: AI논문리딩 스터디, AutoML 스터디 진행
          </li>
          <li>SUSC 2024 Summer: AI논문리딩 스터디 진행</li>
          <li>SUSC 2024 Winter: AI논문리딩 스터디, Pythonic Python 스터디 진행</li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="한빛미디어 <혼자 공부하는 컴퓨터구조 + 운영체제> 베타리더"
        subtitle="2022.03 ~ 2022.08"
      >
        <a href="https://www.yes24.com/Product/Goods/111378840">도서 링크</a>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="2022 OSSCA 컨트리뷰톤"
        subtitle="리드멘티, 2024.07 ~ 2024.11"
      >
        <ul>
          <li>
            hub-kr 최다기여자 <a href="https://github.com/PyTorchKorea/hub-kr">(link)</a>
          </li>
          <li>
            Pytorch-Hub Build Docker 제작 <a href="https://github.com/cpprhtn/pytorch-hub-docker">(link)</a>
          </li>
          <li>
            <strong>hub</strong>
            <ul>
              <li>Fix typo in 3D ResNet (<a href="https://github.com/pytorch/hub/pull/302">link</a>)</li>
              <li>Fix: lost reference number (<a href="https://github.com/pytorch/hub/pull/303">link</a>)</li>
              <li>fix: space-typo error (<a href="https://github.com/pytorch/hub/pull/305">link</a>)</li>
              <li>fix: typo error (<a href="https://github.com/pytorch/hub/pull/306">link</a>)</li>
              <li>Explicit conversion (<a href="https://github.com/pytorch/hub/pull/309">link</a>)</li>
            </ul>
          </li>
        </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="부산 소프트웨어 마이스터 고등학교 AI 전공 캠프"
        subtitle="멘토, 2022.01"
      ></ActivityItemContainer>
      <ActivityItemContainer
        title="충남 과학고등학교 Tensorflow 캠프"
        subtitle="강사, 2021.07.19 ~ 2021.08.15"
      >
        <ul>
          <li>인공지능에 대한 전반적인 개론 강의</li>
          <li>TensorFlow Framework를 사용한 ML/DL 실습</li>
        </ul>
      </ActivityItemContainer>
    </ActivityContainer>
    
  );
}


function AwardsSection() {
  return (
    <ActivityContainer title="수상경력">
      <ActivityItemContainer
        title="DevDay AI·SW 실증역량경진대회 대상"
        subtitle="교내수상, 2023.12"
      >
      </ActivityItemContainer>
      <ActivityItemContainer
        title="Open Source 개발 경진대회 AI Track 최우수상"
        subtitle="교내수상, 2023.12"
      >
      </ActivityItemContainer>
      <ActivityItemContainer
        title="지역현안해결 대학수업지원 프로젝트 우수상"
        subtitle="부산테크노파크, 2023.12"
      >
      </ActivityItemContainer>
      <ActivityItemContainer
        title="GDSC Busan Hackathon 장려상"
        subtitle="Google Developer Student Clubs, 2023.07"
      >
      </ActivityItemContainer>
      <ActivityItemContainer
        title="부산 제 7회 ICT 해커톤 대상"
        subtitle="부산광역시/과학기술정보통신부, 2022.08"
      >
      </ActivityItemContainer>
      <ActivityItemContainer
        title="인공지능 캡스톤디자인 경진대회 우수상"
        subtitle="한국멀티미디어학회, 2022.05"
      >
      </ActivityItemContainer>
      <ActivityItemContainer
        title="부산 제5회 ICT 해커톤 최우수상"
        subtitle="부산광역시/부산대학교SW혁신센터, 2020.11"
      >
      </ActivityItemContainer>
      <ActivityItemContainer
        title="ICT K-awards 알고리즘 프로그래밍 고등부 장려상"
        subtitle="한국정보과학진흥협회, 2018.07"
      >
      </ActivityItemContainer>
      
    </ActivityContainer>
  );
}

function EducationSection() {
  return (
    <ActivityContainer title="학력">
      <ActivityItemContainer
        title="동아대학교 컴퓨터공학&AI학부 AI학과"
        subtitle="학부생, 2021.03 ~ 2025.07"
      />
      <ul>
          <li>MLP(Mecca-of-Learning-Pioneer) 학술동아리 설립 및 운영</li>
          <li>2~4학년 과대표/2~3학년 학생회</li>
      </ul>
      
      <ActivityItemContainer
        title="부산대학교 Wireless Networks Lab(WINE)"
        subtitle="외부연구원, 2022.08 ~ 2023.05"
        url="https://wireless-ai.pusan.ac.kr/wireless-ai/index.do"
      >
        <ul>
          <li>
              [논문투고] Anti-UAV 시스템을 위한 UAV 신호 분류 CNN 모델 (1저자)
              <ul>
                  <li>KMMS 멀티미디어학회 인공지능 경진대회 우수상</li>
                  <li>2 depth camera base Object detection 공부</li>
              </ul>
          </li>
          <li>
              [정책연구] Development of O2O service model for the management of chronic diseases for adults
              <ul>
                  <li>만성질환(고혈압, 당뇨병) 환자 대상 O2O 서비스 모델 개발</li>
                  <li>만성질환 관리 가이드라인/알고리즘 개발 및 적용</li>
                  <li>Android 앱 및 React 웹 형태로 배포</li>
              </ul>
          </li>
      </ul>
      </ActivityItemContainer>
      <ActivityItemContainer
        title="부경대학교 해양역학·예측 연구실"
        subtitle="외부연구원, 2021.03 ~ 2023.01"
        url="https://enma.pknu.ac.kr/enma/2509?action=view&no=19402079"
      >
        <ul>
          <li>통계기법을 이용한 해수면온도 관측자료의 이상치 검출 프로그램
              <ul>
                  <li>
                      <a href="https://www.cros.or.kr/psnsys/cmmn/infoPage.do?w2xPath=/ui/twc/sch/swRscOtct/swRscOtctList.xml" target="_blank">
                          컴퓨터프로그램저작물 저작권 등록, 등록번호: C-2022-056817
                      </a> [부경대학교산학협력단]
                  </li>
                  <li>4TB 크기의 <code>.nc</code> 확장자 파일 전처리</li>
              </ul>
          </li>
      </ul>
      </ActivityItemContainer>
    </ActivityContainer>
  );
}

export default function Home() {
  return (
    <main className="mx-auto my-12 max-w-screen-sm p-4">
      <Header />
      <SkillSection />
      <WorkSection />
      <ProjectSection />
      <ExperienceSection />
      <EducationSection />
      <Footer />
    </main>
  );
}
