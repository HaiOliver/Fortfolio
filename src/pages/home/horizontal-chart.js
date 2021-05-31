import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { HorizontalBar } from "react-chartjs-2";

export default class Chart extends Component {
  render() {
    const data = [88, 95, 95, 88, 85, 85, 80, 80, 80, 75, 75, 80, 85, 70, 70];

    const dataHorBar = {
      labels: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Python",
        "Node.js",
        "TypeScript",
        "PHP",
        "Java",
        "Docker",
        "Machine Learning",
        "React Native",
        "MySQL",
        ".NET",
        "MongoDB",
      ],
      datasets: [
        {
          label: "Knowledge Skill",
          backgroundColor: "#00717E",
          borderColor: "#00AC8C",
          borderWidth: 1,
          hoverBackgroundColor: "#C4FCEF",
          hoverBorderColor: "#21C37E",
          data: data,
        },
      ],
    };
    return (
      <Container className="justify-content-md-center">
        <h1 lg={true} style={{ textAlign: "center", fontSize: "80px" }}>
          Summary my tech skills:
        </h1>

        <HorizontalBar
          data={dataHorBar}
          options={{
            maintainAspectRatio: true,
            responsive: true,
            legend: {
              labels: {
                fontSize:
                  window.innerWidth > 800
                    ? 20
                    : window.innerWidth > 500
                    ? 10
                    : 5,
                fontColor: "#00988A",
                padding:
                  window.innerWidth > 800
                    ? 30
                    : window.innerWidth > 500
                    ? 20
                    : 10,
              },
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontSize:
                      window.innerWidth > 800
                        ? 20
                        : window.innerWidth > 500
                        ? 10
                        : 5,
                    fontColor: "#458D81",
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    fontSize:
                      window.innerWidth > 800
                        ? 20
                        : window.innerWidth > 500
                        ? 10
                        : 5,
                    fontColor: "#00C6AA",
                    fontStyle: "bold",
                  },

                  gridLines: {
                    display: false,
                  },

                  tabIndex: 0,
                  maxBarThickness: 100,
                  categoryPercentage: 1.0,
                  barPercentage: 1.0,
                  barThickness:
                    window.innerWidth > 800
                      ? 25
                      : window.innerWidth > 500
                      ? 10
                      : 5,
                },
              ],
            },
          }}
        />
      </Container>
    );
  }
}
