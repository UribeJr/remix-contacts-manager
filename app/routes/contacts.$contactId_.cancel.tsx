import { redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ params }: ActionFunctionArgs) => {
  if (params.contactId) {
    return redirect(`/contacts/${params.contactId}/edit`);
  }
  throw new Response("Contact ID is missing", { status: 400 });
};