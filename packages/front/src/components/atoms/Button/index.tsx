import eventBus from "@/assets/scripts/utils/eventBus";
import "./style.scss";

const index = (props: {
  type?: string;
  children: string;
  link?: string;
  target?: "_blank" | "_self";
  download?: string;
}) => {
  const { type, children, link, target } = props;

  switch (type) {
    case "stroke":
      return (
        <a
          href={link}
          target={target ? target : ""}
          className="bi-podium-stroke"
        >
          <p className={"bi-small-body"}>{children}</p>
        </a>
      );
    case "filled":
      return (
        <a
          href={link}
          target={target ? target : ""}
          className="bi-podium-filled"
        >
          <p className={"bi-small-body"}>{children}</p>
        </a>
      );
  }
};

export default index;
