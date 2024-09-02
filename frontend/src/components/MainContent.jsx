import React from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

function MainContent({ title, description, time, id, deleteid, updateid }) {
    return (
        <>
            <article className="sm:max-w-[150px]  sm:min-w-[250px] relative space-y-2 max-w-[300px] min-w-[300px] min-h-[217px] max-h-[200px] hover:animate-background rounded-xl p-0.5 shadow-md transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] border">
                <div className="rounded-[7px] p-4 sm:p-6 bg-[#151515]">
                    <time
                        dateTime="2022-10-10"
                        className="block text-sm text-[#C73659]"
                    >
                        {time}
                    </time>
                    <h3 className="mt-0.5 text-lg font-medium text-[#EEEEEE] break-words">
                        {title}
                    </h3>
                    <h3 className="mt-0.5 text-base font-light text-[#EEEEEE] break-words max-h-[80px] overflow-y-auto">
                        {description}
                    </h3>
                </div>
                <div className="flex justify-between w-full px-4 absolute max-w-[300px] bottom-4">
                    <GrDocumentUpdate
                        className="size-5 cursor-pointer"
                        onClick={() => updateid(id)}
                    />
                    <MdDelete
                        className="size-5 cursor-pointer"
                        onClick={() => deleteid(id)}
                    />
                </div>
            </article>
        </>
    );
}

export default MainContent;
