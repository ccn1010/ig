import Image from "next/image";
import { List } from "./List";
import { IIg } from "./ig.types";

export default async function Ig() {
  const list: IIg[] = await fetch("https://picsum.photos/v2/list?page=1&limit=20").then((res) => res.json());
  

  return (
    <div className="flex flex-col w-3/5 pt-8 pb-20">
      <div className="flex items-center gap-10 h-48">
        <Image
          alt=""
          className="rounded-full"
          width={192}
          height={192}
          src="https://picsum.photos/id/237/200/200"
        />
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-bold">#houseplants</div>
          <div className="font-bold">10000</div>
          <div>posts</div>
        </div>
      </div>
      <div className="font-bold text-gray-400 pt-14 pb-2">Top posts</div>
      {/* <div className="flex flex-wrap gap-1">
        {list.map((item) => {
          return (
            <div key={item.id} className="relative group max-w-4/12 flex-initial">
              <Image alt="" className="w-full aspect-square" width={360} height={360} src={item.download_url} />
              <div className="group-hover:flex hidden justify-center gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white">
                <button>like</button>
                <button>ccomment</button>
              </div>
            </div>
          );
        })}
      </div> */}
      <List defaultData={list} />
    </div>
  );
};

