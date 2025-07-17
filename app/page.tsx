import Link from "next/link";

const Home = () => {
  return (
    <div className="relative max-w-lg h-screen ml-auto mr-auto bg-neutral-900">
      <div className="relative flex flex-col text-center justify-center top-1/3 *: text-white">
        <span className="text-7xl">🥕</span>
        <span className="text-3xl mt-1">당근</span>
        <span>당근 마켓에 어서오세요</span>
      </div>
      <div className="px-5 w-full absolute bottom-15">
        <button className="primary-btn py-2 mb-5">시작하기</button>
        <div className="flex justify-center gap-3">
          <span className="text-white">이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline cursor-pointer">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
