import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
  Font,
} from "@react-email/components";

interface Props {
  name: string;
  email: string;
  message: string;
  subject: "Portfolio Contact";
}

const Email = ({ name, email, message, subject }: Props) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Verdana"
          fallbackFontFamily={["Verdana", "sans-serif"]}
        />
      </Head>
      <Body>
        <Container
          style={{
            margin: "0 auto",
          }}
        >
          <Img
            src={"https://i.imgur.com/B83RFTa.png"}
            width="128"
            height="128"
            alt="Logo."
            style={{
              borderRadius: "8px",
            }}
          />
          <Section style={{ margin: "1.5em 0" }}>
            <Text
              style={{
                fontSize: "36px",
                fontWeight: "700",
              }}
            >
              {subject}
            </Text>
          </Section>
          <Text style={{ marginBottom: "1em", fontSize: "16px" }}>
            Name: {name}
          </Text>
          <Text style={{ marginBottom: "1em", fontSize: "16px" }}>
            Email: {email}
          </Text>
          <Text style={{ marginBottom: "1em", fontSize: "16px" }}>
            Message: {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;
