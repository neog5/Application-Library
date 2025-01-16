import { supabase } from "/connectClient.js";

export const user = "2b8e9bbe-e284-430f-a265-b94fed725c3a";

export const signUp = async function (email, password) {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.log(error);
    return;
  }

  console.log(data);
  return;
};
