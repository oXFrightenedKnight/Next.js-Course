import { ServerComponentOne } from "@/components/server-component-one";
import { ClientComponentOne } from "@/components/client-component-one";

export default function InterLeavingPage() {
  return (
    <>
      <h1>Interleaving page</h1>
      <ClientComponentOne>
        <ServerComponentOne></ServerComponentOne>
      </ClientComponentOne>
    </>
  );
}

// Allowed patterns:
// Server c -> server c -> page.tsx (server component nested in another server component)
// Client c -> client c -> page.tsx
// Client c -> server c -> page.tsx

// Disallowed patterns:
// Server c -> client c -> page.tsx

// SOLUTION:
// Nest server component inside client component like shown above. In client component,
// specify children prop (or any prop) and pass it in return statement.
