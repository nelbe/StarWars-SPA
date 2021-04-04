// To be defined and implemented

import { useState, useEffect } from "react";
import { getResponse } from "./base-fetch";

export function apiFetch(path) {
  const [result, setResult] = useState({ loading: true, data: null });
  // const [errorCode, setErrorCode] = useState(false);

  async function apiFetch() {
    const data = await getResponse(path);
    console.log('data',data)
    setResult({ loading: false, data });
  }
  useEffect(() => {
    apiFetch();
  }, []);

  return result;
}