import React, { useState } from "react";
import Style from "./style.module.scss";
import Field from "@/components/atoms/Field";

const index = (props: {}) => {
  const {} = props;

  const [formType, setFormType] = useState("devis");
  const [servicesHour, setServicesHour] = useState(0);
  const [priorityHour, setPriorityHour] = useState(0);

  const [hour, setHour] = useState(0);

  const handleFormTypeChange = (e: any) => {
    setFormType(e.target.value)
  }

  const handleSetHourServices = (hour: number) => {
    console.log("services", hour);
    
    setServicesHour(hour);
  };
  const handleSetHourPriority = (hour: number) => {
    console.log("priority", hour);
    
    setPriorityHour(hour);
  };

  React.useEffect(() => {
    setHour(servicesHour + priorityHour)
  }, [servicesHour, priorityHour])

  return (
    <section className={Style.form_section}>
      <form action="">
        <div>
          <div className={Style.form_chooser}>
            <label htmlFor="form-select">
              <p>Type de formulaire</p>
            </label>
            <select
              name="form-type"
              id="form-select"
              value={formType}
              onChange={handleFormTypeChange}
            >
              <option value="contact">Contact</option>
              <option value="devis">Devis</option>
            </select>
          </div>

          {formType === "contact" && (
            <>
              <Field required label="Prénom" name="firstName" type="text" />
              <Field required label="Nom" name="lastName" type="text" />
              <Field required label="Email" name="email" type="email" />
              <Field label="Entreprise" name="organization" type="text" />
              <Field required label="Objet" name="object" type="text" />
              <Field
                label="Message"
                name="message"
                type="textarea"
                rows={10}
                cols={100}
              />
              <Field label="submit" name="submit" type="submit" />
            </>
          )}
          {formType === "devis" && (
            <>
              <Field required label="Prénom" name="firstName" type="text" />
              <Field required label="Nom" name="lastName" type="text" />
              <Field label="Entreprise" name="organization" type="text" />
              <Field
                callback={handleSetHourServices}
                required
                label="Services"
                name="services"
                type="select"
                options={[
                  { name: "Aucun", value: 0 },
                  { name: "Campagnes publicitaires", value: 160 },
                  { name: "Marketing de contenu", value: 200 },
                  { name: "Gestion des relations médias", value: 500 },
                  { name: "Maquettes digitales", value: 600 },
                  { name: "Évènements médiatiques", value: 800 },
                  { name: "Sponsoring et mécénats", value: 1000 },
                ]}
              />
              <Field
                callback={handleSetHourPriority}
                required
                label="Priorité"
                name="priority"
                type="select"
                options={[
                  { name: "Aucun", value: 0 },
                  { name: "Faible", value: 100 },
                  { name: "Moyenne", value: 200 },
                  { name: "Élevée", value: 300 },
                  { name: "Très élevée", value: 400 },
                ]}
              />
              <Field
                label="Budget"
                name="budget"
                type="range"
                min={0}
                step={250}
                max={10000}
              />
            </>
          )}
          <p className={Style.form_section_warning}>
            <span>*</span> Obligatoire
          </p>
        </div>
        {formType === "devis" && (
          <div className={Style.form_section_estimate}>
            <h2>Estimation</h2>
            <div>
              <p>TOTAL</p>
              <p>{hour}H</p>
            </div>
            <p className={Style.form_section_warning}>
              Veuillez remplir le formulaire ci-dessous pour finaliser
              l'estimation et nous permettre de vous recontacter.
            </p>
            <hr />
            <Field required label="Adresse Mail" name="email" type="email" />
            <Field label="submit" name="submit" type="submit" />
          </div>
        )}
      </form>
    </section>
  );
};

export default index;
