'use client';

import React, { useEffect, useState } from 'react';

const CSRPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(`https://catfact.ninja/fact`);
      const res = await req.json();
      setData(res.fact);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>로딩중이에요/........</div>;
  }
  return (
    <>
      <h1>CSR(Client Side Rendering) 페이지 입니다.</h1>
      <h2>-Fact 데이터가 클라이언트에서 갱신 됩니다.</h2>
      <div>Fact: {data}</div>
    </>
  );
};

export default CSRPage;
