test ("somar 2+2 deveria retornar 4", () => {
  expect(2+2).toBe(4);
})

test ("deve retornar status 200 ok", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200)
})