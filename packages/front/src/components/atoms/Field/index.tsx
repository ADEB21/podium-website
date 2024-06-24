import React, { useRef, useState } from "react";
import Style from "./style.module.scss";

const index = (props: {
  name: string;
  type:
    | "text"
    | "button"
    | "checkbox"
    | "date"
    | "email"
    | "number"
    | "submit"
    | "textarea"
    | "select"
    | "range";
  label: string;
  options?: { name: string; value: number | string }[];
  required?: boolean;
  rows?: number;
  cols?: number;
  min?: number;
  max?: number;
  step?: number;
  callback?: (hour: number) => void;
}) => {
  const {
    name,
    type,
    label,
    options,
    required = false,
    rows,
    cols,
    min,
    max,
    step,
    callback,
  } = props;
  switch (type) {
    case "text":
    case "button":
    case "checkbox":
    case "date":
    case "email":
    case "number":
      return (
        <div className={Style.field}>
          <label className={`${required ? Style.required : ""}`} htmlFor={name}>
            <p>{label}</p>
          </label>
          <input required={required} name={name} id={name} type={type} />
        </div>
      );
    case "submit":
      return <input name={name} id={name} type={type} />;
    case "textarea":
      return (
        <div className={Style.field}>
          <label
            className={`${required ? Style.required : ""}`}
            htmlFor="story"
          >
            <p>{label}</p>
          </label>
          <textarea
            required={required}
            id="story"
            name="story"
            rows={rows}
            cols={cols}
          ></textarea>
        </div>
      );
    case "select":
      const [selected, setSelected] = useState(options && options[0].value);
      const ref = useRef<any>(null);
      React.useEffect(() => {
        if (selected) {
          console.log(`test-${name}`, selected);
          callback(parseInt(selected));
        }
      }, [selected]);

      return (
        <div className={Style.field}>
          <label className={`${required ? Style.required : ""}`} htmlFor={name}>
            <p>{label}</p>
          </label>
          <select
            ref={ref}
            required={required}
            name={name}
            id={name}
            value={selected}
            data-price={selected}
            onChange={(e: any) => {
              setSelected(ref.current && ref.current.value);
            }}
          >
            {options &&
              options.map((option, index) => {
                return (
                  <option key={`${option}-${index}`} value={option.value}>
                    {option.name}
                  </option>
                );
              })}
          </select>
        </div>
      );

    case "range":
      const [rangeValue, setRangeValue] = useState(max && max / 2);

      const handleSetRangeValue = (e: any) => {
        setRangeValue(e.target.value);
      };

      return (
        <div className={Style.field}>
          <label
            className={`${required ? Style.required : ""}`}
            htmlFor="volume"
          >
            <p>
              {label} | +{rangeValue}€
            </p>
          </label>
          <input
            onChange={handleSetRangeValue}
            type="range"
            id={name}
            name={name}
            step={step}
            min={min}
            max={max}
          />
        </div>
      );
  }
};

export default index;
