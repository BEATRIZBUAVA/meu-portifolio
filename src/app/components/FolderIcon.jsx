import React from "react";

export default function FolderIcon({ onClick }) {
    return (
        <div onClick={onClick} className="cursor-pointer">
            <div className="bg-[#FF8F56] w-[60px] h-[12px] rounded-tr-[10px]"></div>
            <div className="bg-[#FFCE63] w-[100px] h-[70px] shadow-[5px_5px_0_0_#283149] rounded-tr-[8px]"></div>

        </div>
    );
}
