import { toast } from 'react-toastify';

export async function submitFormToBrevoAPI(data: any) {
  const apiKey = process.env.BREVO_API_KEY as string;

  const emailData = {
    sender: { email: 'bolehje@exalumen.com' },
    to: [{ email: 'recipient@example.com' }],
    subject: 'Subject of the email',
    htmlContent: '<html><body><h1>Hello, this is a test email from Brevo API!</h1></body></html>',
    textContent: 'Hello, this is a test email from Brevo API!',
    params: {
      name: data.name,
      organization: data.organization,
      phone: data.phone,
      email: data.email,
      enquiry: data.enquiry
    }
  };
  
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey
      },
      body: JSON.stringify(emailData)
    })

    if (response.ok) {
      // Success: Show success toast notification
      toast.success('Email sent successfully!', {
        position: 'bottom-right',
      });
    } else {
      // Failed: Show error toast notification
      const errorData = await response.json();
      toast.error(errorData.message || 'Something went wrong', {
        position: 'bottom-right',
      });
    }
  } catch (error) {
    console.log(error);
  }
}
