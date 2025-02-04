import Link from "next/link";

export default function Header() {
  // const years = new Date().getFullYear() - 2013 + 1;

  return (
    <header>
      <div>
        <h1 className="text-5xl font-bold inline">이준원</h1>
        <h4 className="text-xl text-black/50 inline ml-2">Junwon Lee</h4>
      </div>
      <div>
        <p className="text-lg">
          {/* {years}년째 꾸준히 개발하고 있습니다. */}
          <br />
          데이터 분석 및 AI를 공부하고 있습니다.
        </p>
        <p className="text-lg">
        제 장점은 다양한 개발 분야를 경험하며 쌓은 폭넓은 기술적 이해와 문제 해결 능력입니다.
        또한 여러 개발 커뮤니티에서 활발히 활동하며 의사소통, 업무 분담, 우선순위 조정 등의 협업 역량을 키워왔습니다.
        새로운 환경에서도 빠르게 적응하고, 팀이 효과적으로 목표를 달성할 수 있도록 기여할 자신이 있습니다.
        </p>
      </div>
      <div>
        <p className="text-lg">
          <Link
            className="underline underline-offset-4 text-black hover:text-black/60 inline-block"
            href="mailto:cpprhtn@gmail.com"
          >
            cpprhtn@gmail.com
          </Link>
          <Link
            className="underline underline-offset-4 text-black hover:text-black/60 ml-4 inline-block"
            href="https://github.com/cpprhtn"
          >
            Github
          </Link>
          <Link
            className="underline underline-offset-4 text-black hover:text-black/60 ml-4 inline-block"
            href="https://linkedin.com/in/cpprhtn"
          >
            LinkedIn
          </Link>
        </p>
      </div>
    </header>
  );
}
