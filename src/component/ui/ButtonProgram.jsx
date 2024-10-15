import React from "react";

export default function ButtonProgram(props) {
  const classOutline =
    "bg-[#2D446E] text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800";

  if (props.type === "primary") {
    return (
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {props.children}
      </button>
    );
  } else if (props.type === "outline") {
    return (
      <button type="button" className={classOutline + " " + props.className}>
        {props.children}
      </button>
    );
  }
}

// tulisan choose this gtw dimana / di card price
// blm dipanggil, dipake
// blm tau ini blm muncul pas dipake gt
