import React from "react";
import Style from "./style.module.scss";
import Button from "@/components/atoms/Button";
import Card from "@/components/molecules/Card";

const index = (props: { data: any; projects?: boolean; title: boolean }) => {
  const { data, projects, title } = props;

  return (
    <section
      className={`${Style.creationsGrid} ${projects ? Style.projects : ""}`}
    >
      {title && (
        <h3 className="greenPoint">
          Quelques <br />
          <span className="bi-bolded">médailles d’or</span>
        </h3>
      )}
      {!projects && !title && (
        <h3 className="question">
          Une envie de <br />
          <span className="bi-bolded">travailler</span> avec nous{" "}
        </h3>
      )}
      <ul>
        {data &&
          data.ProjectsArray.map(
            (
              project: {
                picture: Picture;
                summary: string;
                title: string;
                _id: string;
                type: string;
              },
              index: number
            ) => {
              return (
                <li key={project._id}>
                  <Card
                    title={project.title}
                    summary={project.summary}
                    picture={project.picture}
                    tag={project.type}
                  />
                </li>
              );
            }
          )}
      </ul>
      {!projects && (
        <Button link="/projets" type="filled">
          Voir plus{" "}
        </Button>
      )}
    </section>
  );
};

export default index;
