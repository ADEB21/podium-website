import React, { useEffect, useRef, useState } from "react";
import Style from "./style.module.scss";

const index = (props: {
  title: string;
  summary: string;
  dish: number;
  price: number;
  extra: string;
  id: string;
  isOpen: boolean;
  handleOpen: (id: string) => void;
}) => {
  const { title, summary, dish, price, extra, id, isOpen, handleOpen } = props;
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li ref={ref} className={Style.dishItem} key={id}>
      <div>
        <p>{title}</p>
        <p>
          {price ? price.toFixed(2) : ""} €
          {extra && (
            <button
              onClick={() => handleOpen(id)}
              type="button"
              className="information"
            >
              i
            </button>
          )}
          {isOpen && extra && <div className={Style.info}>{extra}</div>}
        </p>
      </div>
      {summary && <p className="bi-small-body">{summary}</p>}
    </li>
  );
};

export default index;
