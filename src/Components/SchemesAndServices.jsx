import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SchemeCard from "./SchemeCard";

const SchemesAndServices = () => {
  const [schemes, setSchemes] = useState([]);

  const fetchSchemes = async () => {
    await fetch("http://localhost:8080/getAllSchemes")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setSchemes(data);
      });
  };

  useEffect(() => {
    fetchSchemes();
  }, []);

  const cards = schemes.map((card) => {
    return (
      <SchemeCard
        key={card._id}
        name={card.name}
        description={card.description}
        image={card.image}
        sector={card.sector}
      />
    );
  });

  console.log(schemes);

  return (
    <Container>
      <div className="scheme-container">
        <div className="heading">
          <p>Schemes & Services</p>
        </div>
        {cards}
      </div>
    </Container>
  );
};

export default SchemesAndServices;

const Container = styled.div`
  min-height: 100vh;
  height: auto;
  padding-top: 9.3rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #f8fff5;
  overflow-x: hidden;

  .scheme-container {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    background-color: white;
    box-shadow: 3px 1px 10px #d6d6d66d;
    padding-bottom: 2.5rem;

    .heading {
      margin-top: 2.8rem;
      width: 101rem;
      height: 4rem;
      border-bottom: 1px solid #bbb9b9ae;
      display: flex;
      justify-content: start;
      align-items: center;
      box-shadow: 0px 3px 6px -3px #d6d6d66b;

      p {
        margin: 0;
        margin-bottom: 10px;
        font-family: poppins;
        font-size: 32px;
        font-weight: 500;
        color: darkgreen;
      }
    }
  }
`;
