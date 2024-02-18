import Image from "next/image";
import { List } from "./List";
import { IIg } from "./ig.types";

export const Ig = async () => {
  const list: IIg[] = await fetch("https://picsum.photos/v2/list?page=1&limit=20").then((res) => res.json());
  

  return (
    <div className="flex flex-col w-3/5 pt-8">
      <div className="flex items-center gap-10 h-48">
        <img
          alt=""
          className="rounded-full"
          width={192}
          height={192}
          src="https://scontent-hkg1-2.cdninstagram.com/v/t39.30808-6/424972228_18411921532021358_2607725117436549676_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent-hkg1-2.cdninstagram.com&_nc_cat=102&_nc_ohc=rIcHGw_J770AX-iRax7&edm=AGyKU4gAAAAA&ccb=7-5&ig_cache_key=MzMwNDczNDExOTU3OTMzNzM3Ng%3D%3D.2-ccb7-5&oh=00_AfCFF3gRG1yEbUYgtZMUJWxHQnyCMs44p0C5G3hT3Dz9ag&oe=65D5E04A&_nc_sid=2011ad"
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

export default Ig;
