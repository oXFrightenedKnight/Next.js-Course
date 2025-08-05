// all folders with an underscore will be excluded from the route

// Useful when:
//  Keeping your UI logic separate from from routing logic
//  Having a consistent way to organize internal files in your project
//  Making it easier to group related files in your code editor
//  Avoiding potential naming conflicts with future Next.js file naming conventions

// If you want an actual underscore in your URL, use %5f for the symbol.

export default function PrivateRoute() {
  return <h1>Can't access this route</h1>;
}
