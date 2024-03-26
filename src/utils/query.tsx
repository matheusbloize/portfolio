import axios from "axios";

const URL = "https://matheusbloize.com/api";

interface Error {
  response: {
    data: string;
  };
}

async function sendEmail(name: string, email: string, message: string) {
  try {
    const res = await axios.post(`${URL}/email`, { name, email, message });
    sessionStorage.setItem("email_sent", "true");
    return res.data;
  } catch (error) {
    const knownError = error as Error;
    return alert(knownError.response.data);
  }
}

export default sendEmail;
