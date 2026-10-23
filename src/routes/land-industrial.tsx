import { Outlet, createFileRoute } from "@tanstack/react-router";

/** Layout route so /land-industrial/$slug detail pages can mount underneath. */
export const Route = createFileRoute("/land-industrial")({
  component: () => <Outlet />,
});
