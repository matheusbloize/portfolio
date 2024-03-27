import { redirect } from "next/navigation";

const NotFound = () => {
  return redirect("/en");
};

export default NotFound;
