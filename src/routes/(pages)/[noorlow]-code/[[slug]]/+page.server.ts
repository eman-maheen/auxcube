import { CONTACT_EMAIL } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { sendEmail } from '$lib/email.server';
import type { Actions } from './$types';
import { render } from 'svelte-email';
import Contact from '$lib/emails/contact.svelte';

export const actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();

      const entity = formData.get('entity') as string;
      const pronoun = formData.get('pronoun') as string;
      const designation = formData.get('designation') as string;
      const business = formData.get('business') as string;
      const email = formData.get('email') as string;
      const requirements = formData.get('requirements') as string || "Guide";

      const emailHtml = render({
        template: Contact,
        props: {
            entity: entity,
            pronoun: pronoun,
            email: email,
            designation: designation,
            business: business,
            requirements: requirements,
        }
      });

      const emailMessage = {
        from: email,
        to: CONTACT_EMAIL,
        subject: `Contact form submitted from ${entity} <${email}>`,
        html: emailHtml
      };

      await sendEmail(emailMessage);

      return {
        error: false,
        status: 200,
        message:
          'We have added you to the LowcodeN Low Code and No Code Guide wait-list, and will email you as soon as the guide is available. Thank you!'
      };

    } catch (error) {
      return fail(500, {
        error: true,
        message:
          'An error occurred. Please email us at contact@lowcoden.com'
      });
    }
  }
} satisfies Actions;
