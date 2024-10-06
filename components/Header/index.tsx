import Link from "next/link";

export default function Header() {
  const years = new Date().getFullYear() - 2022 + 1;

  return (
    <header>
      <div>
        <h1 className="text-5xl font-bold inline">김현우</h1>
        <h4 className="text-xl text-black/50 inline ml-2">Lery, 러리</h4>
      </div>
      <div>
        <p className="text-lg">
          {years}년차 소프트웨어 엔지니어입니다.
          <br />
          주로 백엔드를 개발하고 있습니다.
        </p>
        <p className="text-lg">
          보이지 않는 곳에서 동작하는 것들에 대해 알아보는 걸 좋아합니다.
        </p>
      </div>
      <div>
        <p className="text-lg">
          <Link
            className="underline underline-offset-4 text-black hover:text-black/60 inline-block"
            href="mailto:doralife12@gmail.com"
          >
            doralife12@gmail.com
          </Link>
          <Link
            className="underline underline-offset-4 text-black hover:text-black/60 ml-4 inline-block"
            href="https://github.com/Coalery"
          >
            Github
          </Link>
          <Link
            className="underline underline-offset-4 text-black hover:text-black/60 ml-4 inline-block"
            href="https://linkedin.com/in/Coalery"
          >
            LinkedIn
          </Link>
        </p>
      </div>
    </header>
  );
}
