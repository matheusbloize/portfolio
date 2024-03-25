import { NextResponse } from "next/server";
import { Resend } from "resend";

import EmailComp from "@/components/general/Email";

interface Email {
  from: "Matheus Bloize Portfolio <portfolio@matheusbloize.com>";
  to: "mbloizepd@gmail.com";
  subject: "Portfolio Contact";
  react: JSX.Element;
}

interface ReqProps {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  const { name, email, message } = (await req.json()) as ReqProps;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const regex = /^[\w+.áéíóúâêîôûãõç]+@\w+\.\w{2,}(?:\.\w{2})?$/gi;

  try {
    if (name === "" || email === "" || message === "") {
      return new NextResponse("Cannot send with empty data", { status: 422 });
    }

    if (!regex.test(email)) {
      return new NextResponse("Invalid email format", { status: 422 });
    }

    await resend.emails.send({
      from: "Matheus Bloize Portfolio <portfolio@matheusbloize.com>",
      to: "mbloizepd@gmail.com",
      subject: "Portfolio Contact",
      react: EmailComp({
        name,
        email,
        message,
        subject: "Portfolio Contact",
      }),
    } as Email);

    return new NextResponse("Email sent", { status: 201 });
  } catch (error) {
    return new NextResponse("Failed to send email", { status: 500 });
  }
}
