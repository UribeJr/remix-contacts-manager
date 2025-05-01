import { redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";

import { deleteContact } from "../data";
import invariant from "tiny-invariant";

export const action: ActionFunction = async ({ params }) => {
  invariant(params.contactId, "Missing contactId param");
  await deleteContact(params.contactId);
  return redirect("/");
};