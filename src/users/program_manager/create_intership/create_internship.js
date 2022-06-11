import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createInternship, getCompanies, getMentors } from "./requests";
import PopUp from "../../../popup";
import { Select } from "../../guest/register/register";
import { getPrograms } from "../../company_representive/create_intership/requests";
import { useHistory } from "react-router-dom";
import Button from "../../../button";

const Label = styled.text`
  font-size: 18px;
  color: #666666;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 400px;
`;

const Input = styled.input`
  height: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// const Button = styled`
//   width: 150;
//   height: 30px;
//   margin-top: 50px;
//   background: #7a5cfa;
//   color: #ffffff;
// `;

const CreateInternship = () => {
  const [program, setProgram] = useState("");
  const [company, setCompany] = useState("");
  const [mentor, setMentor] = useState("");
  const [internshipName, setInternshipName] = useState("");
  const [internshipDescription, setInternshipDescription] = useState("");
  const [demands, setDemands] = useState("");
  const [popup, setPopup] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [error, setError] = useState(null);
  let history = useHistory();

  useEffect(() => {
    getPrograms(setPrograms);
    getCompanies(setCompanies);
  }, []);

  useEffect(() => {
    if (company) {
      getMentors(setMentors, company);
    }
  }, [company]);

  const onSubmit = () => {
    createInternship(
      setPopup,
      setError,
      company,
      internshipName,
      internshipDescription,
      demands,
      program,
      mentor
    );
  };

  return (
    <Container className="font-rubik">
      {popup && (
        <PopUp trigger={popup} setTrigger={() => history.push("/njsw36/")}>
          {`נוצרה ההתמחות:  "${internshipName}"  `}
        </PopUp>
      )}
      <h2>יצירת התמחות</h2>

      <Label>שם התוכנית</Label>
      <Select
        id="program"
        value={program}
        onChange={(e) => setProgram(e.target.value)}
      >
        {programs &&
          programs.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </Select>
      <Label>שם החברה</Label>
      <Select
        id="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      >
        {companies &&
          companies.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </Select>
      <Label>שם המנטור</Label>
      <Select
        id="mentor"
        value={mentor}
        onChange={(e) => setMentor(e.target.value)}
      >
        {mentors &&
          mentors.map((option) => (
            <option key={option.username} value={option.username}>
              {option.name}
            </option>
          ))}
      </Select>
      <Label>שם ההתמחות</Label>
      <Input
        type="text"
        value={internshipName}
        onChange={(e) => setInternshipName(e.target.value)}
      />
      <Label>תיאור ההתמחות</Label>
      <textarea
        rows="4"
        cols="50"
        value={internshipDescription}
        onChange={(e) => setInternshipDescription(e.target.value)}
      />
      <Label>דרישות</Label>
      <textarea
        rows="4"
        cols="50"
        value={demands}
        onChange={(e) => setDemands(e.target.value)}
      />
      {error && (
        <>
          <small style={{ color: "red" }}>{error}</small>
          <br />
        </>
      )}
      <br />
      <ButtonContainer>
        <Button
          onClick={() => onSubmit()}
          disabled={
            !(
              company &&
              internshipName &&
              internshipDescription &&
              demands &&
              program
            )
          }
          value={"צור התמחות"}
        />
      </ButtonContainer>
    </Container>
  );
};
export default CreateInternship;
