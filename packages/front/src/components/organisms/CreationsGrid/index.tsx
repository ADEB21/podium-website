import React from "react";
import Style from "./style.module.scss";
import Button from "@/components/atoms/Button";
import Card from "@/components/molecules/Card";

const index = (props: { data: any }) => {
  const { data } = props;

  return (
    <section className={Style.creationsGrid}>
      <h3 className="question">
        Une envie de <br />
        <span className="bi-bolded">travailler</span> avec nous{" "}
      </h3>

      <ul>
        {data &&
          data.ProjectsArray.map(
            (
              project: {
                picture: Picture;
                summary: string;
                title: string;
                _id: string;
                type: string,
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
      <Button link="/projets" type="filled">Voir plus </Button>
    </section>
  );
};

export default index;
