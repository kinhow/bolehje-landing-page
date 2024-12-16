export async function submitFormToGoogleSheets(data: any) {
  const formData = new FormData();

  formData.append('Name', data.name);
  formData.append('Organization', data.organization);
  formData.append('Phone', data.phone);
  formData.append('Email', data.email);
  formData.append('Enquiry', data.enquiry);

  try {
    await fetch("https://script.google.com/macros/s/AKfycbyaSQ_hBPqRbWxFiKhdEb8Xl6GeRDcYZFsADAQDFAGO5XJHChv1o-gCrE7i282DFuzt/exec",
      {
        method: "POST",
        body: formData
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  } catch (error) {
    console.log(error);
  }
}
