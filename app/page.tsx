import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import {block} from '@/components/home/primitives';
import MainBlock from '@/app/ui/home/main_block';
import Info from "@/app//ui/home/info";

export default function Home() {
  return (
    <div className='min-h-screen w-full md:w-full'>
      <div className="m-auto w-5/6 md:w-2/3 min-h-screen py-8 sm:my-0 flex flex-row justify-content items-center">
        <div className={block({color: 'black'})}>
          <MainBlock>
            <Info />
          </MainBlock>
        </div>
      </div>
    </div>
  );
}
