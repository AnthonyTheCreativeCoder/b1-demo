import { useMutation } from "@tanstack/react-query";
import WordPressService from "../../services/WordPressService";

const useContactForm = () => {
  // Define the mutation using useMutation
  const contactMutation = useMutation({
    mutationFn: (formData) =>
      WordPressService.postData(`contact-form?_=${Date.now()}`, JSON.stringify(formData)),
    onMutate: (formData) => {
      // console.log("Mutation triggered with data:", formData);
      // Optional: You can handle pre-mutation logic here
    },
    onError: (error) => {
      console.error("Error during form submission:", error);
    },
    onSuccess: (data) => {
      // console.log("Form submission successful!", data);
    },
  });

  // Return the mutation states and the mutate function
  return {
    loading: contactMutation.isLoading,
    error: contactMutation.error,
    success: contactMutation.isSuccess,
    submitForm: contactMutation.mutate, // Trigger the mutation
  };
};

export default useContactForm;
