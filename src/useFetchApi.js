import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import parseString from "./helper/parseStringToHTML";

function useFetch() {
  const { setErro, setLoading, setData } = useContext(GlobalContext);

  const request = React.useCallback(
    async (quantidade) => {
      await axios
        .get(`https://opentdb.com/api.php?amount=${quantidade}`)
        .then(({ data }) => {
          const perguntas = [];
          for (let pergunta of data.results) {
            const { correct_answer, incorrect_answers, question } = pergunta;
            const obj = {
              correct_answer: parseString(correct_answer),
              incorrect_answers: incorrect_answers.map((i) => parseString(i)),
              question: parseString(question),
            };
            perguntas.push(obj);
          }
          setData(perguntas);
        })
        .catch((error) => setErro("um erro ocorreu"))
        .finally(() => setLoading(false));
    },
    [setErro, setLoading, setData],
  );

  return {
    request,
  };
}

export default useFetch;
