
// This is a mock API service to simulate backend calls without an actual server

// This function mimics an API call to the /api/contact endpoint
export const submitContactForm = async (formData: any) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // Simulate successful API response
  // In a real scenario, this would be an actual API call
  return {
    success: true,
    message: "Form submitted successfully",
  };
};
