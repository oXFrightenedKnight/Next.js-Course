import "server-only";

export const serverSideFunction = () => {
  const var1 = 3;
  const var2 = 5;

  const result = var1 + var2;
  console.log(
    `use multiple libraries,
       use environment variables,
       interact with a database,
       process confidential information`
  );
  return { result };
};
