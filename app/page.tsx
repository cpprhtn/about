import Footer from "@lery/components/Footer";
import Header from "@lery/components/Header";
import ActivityContainer from "@lery/containers/ActivityContainer";

export default function Home() {
  return (
    <main className="mx-auto my-0 max-w-screen-md p-4">
      <Header />
      <ActivityContainer title="Work"></ActivityContainer>
      <ActivityContainer title="Experience"></ActivityContainer>
      <ActivityContainer title="Article"></ActivityContainer>
      <Footer />
    </main>
  );
}
