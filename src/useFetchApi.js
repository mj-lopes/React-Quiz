import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function useFetch() {
  const { setErro, setLoading, setData } = useContext(GlobalContext);

  const request = React.useCallback(
    async (quantidade) => {
      await axios
        .get(`https://opentdb.com/api.php?amount=${quantidade}`)
        .then(({ data }) => setData(data.results))
        .catch((error) => setErro(error))
        .finally(() => setLoading(false));
    },
    [setErro, setLoading, setData],
  );

  return {
    request,
  };
}

export default useFetch;
