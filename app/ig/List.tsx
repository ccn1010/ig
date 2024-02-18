"use client";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import useSWRInfinite from "swr/infinite";
import { IIg } from "./ig.types";
import { useIntersectionObserver } from "@uidotdev/usehooks";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const List = ({ defaultData }: { defaultData: IIg[] }) => {
  const {
    data = [],
    error,
    isLoading,
    size,
    setSize,
  } = useSWRInfinite<IIg>(
    (index) => {
      return `https://picsum.photos/v2/list?page=${index + 2}&limit=20`;
    },
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateAll: false,
      revalidateFirstPage: false,
      revalidateOnMount: false,
    }
  );
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  console.log("--------", entry);
  useEffect(() => {
    if (entry?.isIntersecting) {
      setSize((v)=>v + 1);
    }
  }, [entry?.isIntersecting, setSize]);

  const list = useMemo(() => {
    return [...defaultData, ...data.flat()];
  }, [defaultData, data]);
  return (
    <>
      <div className="flex flex-wrap gap-1">
        {list.map((item) => {
          return (
            <div
              key={item.id}
              className="relative group max-w-4/12 flex-initial"
            >
              <Image
                alt=""
                className="w-full aspect-square"
                width={360}
                height={360}
                src={item.download_url}
                placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfMAAAHyCAMAAADIj"
              />
              <div className="group-hover:flex hidden justify-center gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white">
                <button>like</button>
                <button>comment</button>
              </div>
            </div>
          );
        })}
      </div>
      <div ref={ref}>{isLoading && "loading"}</div>
    </>
  );
};
