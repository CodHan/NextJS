import React from 'react';

const ISRPage = async () => {
  const req = await fetch('https://catfact.ninja/fact', {
    next: {
      revalidate: 5,
    },
  });
  const res = await req.json();

  return (
    <>
      <h1>ISR(Incremental Site Regeneration) 페이지 입니다.</h1>
      <h2>-Fact 데이터가 5초마다 갱신 됩니다.</h2>
      <div>Fact: {res.fact}</div>
    </>
  );
};

export default ISRPage;
