import React from "react";

const Project = () => (
  <div className="min-h-screen container mx-auto  tablet:w-[768px] laptop:w-[1024px]">
    <div className="mt-10 tablet:mt-20">
      <div className="mt-5">
        <h1 className="font-medium text-3xl tablet:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5">
          Projects
        </h1>
        
      </div>
    </div>
    <div className="mt-6 tablet:mt-10 laptop:mt-15">
      <div className="w-full p-2">
        <h1 className="font-bold text-xs tablet:text-sm"> Currently</h1>
        <div className="flex-grow border-b border-black mt-2 laptop:mr-16"></div>
      </div>
    </div>
    <div className="mt-2 tablet:mt-4 pb-8 grid grid-cols-1 tablet:grid-cols-2">
      <div>
        <div className="rounded-lg p-2 first:ml-0 link laptop:w-[85%] pb-5 tablet:pb-7 laptop:pb-2">
          <div className="flex flex-col laptop:mt-5">
            <div className="relative rounded-lg transition-all ease-out duration-300 h-48 tablet:h-52 laptop:h-56 cursor-pointer overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover rounded-lg hover:scale-110 transition-all ease-out duration-300"
                sizes="100vw"
                srcset=""
                src=""
              />
            </div>
            <h1 className="mt-3 laptop:mt-5 text-xl font-medium">cool project...</h1>
            <h2 className="text-sm opacity-50">
              coming soon!
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full p-2">
      <h1 className="font-bold text-xs tablet:text-sm">Featured</h1>
      <div className="flex-grow border-b border-black mt-2 laptop:mr-16"></div>
    </div>
    <div className="mt-2 tablet:mt-4  pb-16 grid grid-cols-1 tablet:grid-cols-2">
      <div>
        <div className="rounded-lg p-2 first:ml-0 link laptop:w-[85%] pb-5 tablet:pb-7 laptop:pb-2">
          <div className="flex flex-col laptop:mt-5">
            <div className="relative rounded-lg transition-all ease-out duration-300 h-48 tablet:h-52 laptop:h-56 cursor-pointer overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover rounded-lg hover:scale-110 transition-all ease-out duration-300"
                sizes="100vw"
                srcset=""
                src=""
              />
            </div>
            <h1 className="mt-3 laptop:mt-5 text-xl font-medium">cool project...</h1>
            <h2 class="text-sm opacity-50">
              coming soon!
            </h2>
          </div>
        </div>
      </div> 
    </div>
    
  </div>
);

export default Project;
