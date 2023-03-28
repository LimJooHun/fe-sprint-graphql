import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { graphql } from "@octokit/graphql";
const token = "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";

async function graph() {
  const { repository } = await graphql(
    `
      {
        repository(owner: "codestates-seb", name: "agora-states-fe") {
          discussions(first: 10) {
            edges {
              node {
                id
                title
                createdAt
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token ${token}`,
      },
    }
  );
  return [repository];
}

function App() {
  useEffect(() => {
    graph().then((res) => console.log(res), []);
  });

  // const token = "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";
  // useEffect(() => {
  //   graphql(
  //     `
  //       {
  //         repository(owner: "codestates-seb", name: "agora-states-fe") {
  //           discussions(first: 10) {
  //             edges {
  //               node {
  //                 id
  //                 title
  //                 createdAt
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `,
  //     {
  //       headers: {
  //         authorization: `token ${token}`,
  //       },
  //     }
  //   ).then((res) => console.log(res.repository));
  // }, []);
  // return <div className="App">111</div>;
}

export default App;
