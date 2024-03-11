import React from 'react';

const SSGPage = async () => {
  const req = await fetch(`https://catfact.ninja/fact`);
  const res = await req.json();

  return (
    <>
      <h1>SSG(Static Site Generation) 페이지 입니다.</h1>
      <h2>-Fact 데이터가 최초에만 갱신 됩니다.</h2>
      <div>Fact: {res.fact}</div>
    </>
  );
};

export default SSGPage;
