"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import br_flag from "@/assets/images/br_flag.svg";
import usa_flag from "@/assets/images/usa_flag.svg";

const Home = () => {
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const languageModalRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const alreadyVisitedStorage = localStorage.getItem(
      "already_visited",
    ) as string;
    const selectedLangStorage = localStorage.getItem("selected_lang") as string;
    if (alreadyVisitedStorage === "true") {
      selectedLangStorage === "en_US"
        ? router.replace("/en")
        : router.replace("/br");
    } else {
      if (loadingRef.current) {
        loadingRef.current.style.display = "none";
      }
      if (languageModalRef.current) {
        languageModalRef.current.style.display = "flex";
      }
    }
  }, [router]);

  return (
    <>
      <div className="absolute w-full h-full bg-mb-base top-0 left-0 z-30 flex justify-center items-center">
        <div
          ref={loadingRef}
          className="border-solid border-2 border-mb-black rounded-full animate-spin border-r-0 border-b-0 w-16 h-16"
        ></div>
        <div
          ref={languageModalRef}
          className="hidden absolute left-1/2 top-1/2 [transform:translate(-50%,-50%);] w-fit px-8 py-4 usa-mb-base border-solid border-2 border-mb-black rounded-lg justify-evenly gap-4"
        >
          <Link
            onClick={() => {
              localStorage.setItem("already_visited", "true"),
                localStorage.setItem("selected_lang", "en_US");
            }}
            href={"/en"}
          >
            <Image
              className="rounded-full w-8 h-8 object-cover border-solid border-2 border-mb-black md:w-12 md:h-12"
              src={usa_flag}
              alt="USA Flag."
              width={64}
              height={64}
            />
          </Link>
          <Link
            onClick={() => {
              localStorage.setItem("already_visited", "true"),
                localStorage.setItem("selected_lang", "pt_BR");
            }}
            href={"/br"}
          >
            <Image
              className="rounded-full w-8 h-8 object-cover border-solid border-2 border-mb-black md:w-12 md:h-12"
              src={br_flag}
              alt="Brazil Flag."
              width={64}
              height={64}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
