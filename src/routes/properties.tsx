import { Outlet, createFileRoute } from "@tanstack/react-router";

/** Layout route so /properties/$slug detail pages can mount underneath. */
export const Route = createFileRoute("/properties")({
  component: () => <Outlet />,
});
