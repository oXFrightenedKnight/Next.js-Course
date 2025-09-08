import "client-only"; //when you import client-only in your
// script, it creates a safety net, which will cause it to
// fail if the script runs on the server.

export const clientSideFunction = () => {
  console.log("use window object, use localstorage");
  return "Client side function executed";
};
// Example usage in a client component:
