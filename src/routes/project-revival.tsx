import { Outlet, createFileRoute } from "@tanstack/react-router";

/** Layout route so /project-revival/case-studies/$slug pages can mount underneath. */
export const Route = createFileRoute("/project-revival")({
  component: () => <Outlet />,
});
