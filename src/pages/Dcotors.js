import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useState } from "react/cjs/react.development";
import "../css/style.css";
export const Dashboard = (props) => {
  let data = JSON.parse(localStorage.getItem("MyNewArray"));

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {data.map((el, idx) => (
        <DocCard
          key={el.idN}
          id={el.id}
          name={el.name}
          age={el.age}
          bloodPresure={el.bloodPresure}
          category={el.category}
          idN={el.idN}
          isSaved={el.isSaved}
          isVaccin={el.isVaccin}
          note={el.note}
          weight={el.weight}
        />
      ))}
    </div>
  );
};

function DocCard(props) {
  function handleOnclick(e) {
    let data = JSON.parse(localStorage.getItem("MyNewArray"));
    console.log(data);
    let result = data.filter((item) =>
      item.idN === props.idN ? undefined : item
    );
    localStorage.setItem("MyNewArray", JSON.stringify(result));
    window.location.reload()
  }
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Header>
        {props.id} {props.name}
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Phone Number :{props.isSaved}</ListGroup.Item>
        <ListGroup.Item>IDN :{props.idN}</ListGroup.Item>
        <ListGroup.Item>State :{props.category}</ListGroup.Item>
        <ListGroup.Item>Age :{props.age}</ListGroup.Item>
        <ListGroup.Item>Haart Rate :{props.haartRate}</ListGroup.Item>
        <ListGroup.Item>Adderess :{props.isVaccin}</ListGroup.Item>
        <ListGroup.Item>Weight :{props.weight}</ListGroup.Item>
        <ListGroup.Item>Note :{props.note}</ListGroup.Item>
      </ListGroup>
      <Card.Footer className="d-flex justify-content-center ">
        <Button onClick={handleOnclick}>Remove</Button>
      </Card.Footer>
    </Card>
  );
}
