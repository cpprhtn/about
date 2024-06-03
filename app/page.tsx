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
      <ActivityContainer title="Article"></ActivityContainer>
      <Footer />
    </main>
  );
}
