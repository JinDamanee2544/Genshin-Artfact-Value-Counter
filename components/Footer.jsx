import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  const router = useRouter();
  return (
    <main className="flex flex-row gap-4 text-xl items-center">
      <button
        className="btn btn-ghost "
        onClick={() => {
          router.reload();
        }}
      >
        Home
      </button>
      <div className="btn btn-ghost">
        <Link href={"https://enka.network/"}>Credit : Enka.Network</Link>
      </div>
      <div className="btn btn-ghost rounded-full flex items-center gap-2">
        <a
          href={
            "https://github.com/JinDamanee2544/Genshin-Artifact-Value-Counter"
          }
        >
          <AiFillGithub className="text-2xl" />
        </a>
      </div>
    </main>
  );
};

export default Footer;
