import React from "react";

const Card = (props) => {
  return (
    <div className="">
      <div className="relative ">
        <img
          className="rounded-xl object-cover w-full h-[150px] shadow cursor-pointer"
          src={props.image}
          alt=""
        />
        <div className="absolute left-1/2 bottom-16 rounded-lg cursor-pointer -translate-x-1/2  shadow-xl p-3 transition duration-300 bg-white hover:bg-[#303030] hover:text-white">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="plus"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <defs>
              <style></style>
            </defs>
            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
            <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
          </svg>
        </div>
        <div className="py-4">
          <p>{props.name}</p>
          <p className="font-bold text-[#000000d9]">{props.price} ل.س</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
