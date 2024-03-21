<script lang="ts">
  import { Button, Container, Head, Html, Preview, Section, Text } from 'svelte-email';

  export let entity: string;
  export let designation: string;
  export let email: string;
  export let pronoun: string;
  export let business: string;
  export let requirements: string;

  let amare = pronoun === 'We' ? 'are' : 'am';

  const fontFamily =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

  const main = {
    backgroundColor: '#ffffff'
  };

  const container = {
    margin: '0 auto',
    padding: '20px 0'
  };

  const paragraph = {
    fontFamily,
    fontSize: '16px',
    lineHeight: '20px'
  };

  const btnContainer = {
    textAlign: 'center' as const
  };

  const button = {
    fontFamily,
    backgroundColor: '#5F51E8',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block'
  };
</script>

<Html lang="en">
  <Head />
  <Preview preview={requirements} />
  <Section style={main}>
    <Container style={container}>
      <Text style={paragraph}>Greetings!</Text>
      <Text style={paragraph}>{pronoun} {amare} {entity}, {designation} at {business}.</Text>
      <Text style={paragraph}>{pronoun} {amare} interested in <b>{requirements}</b>, and can be reached at {email}.</Text>
      <Text style={paragraph}>Looking forward to hearing from LowcodeN!</Text>
      <Section style={btnContainer}>
        <Button pX={12} pY={12} style={button} href="mailto:{email}">Contact</Button>
      </Section>
    </Container>
  </Section>
</Html>
