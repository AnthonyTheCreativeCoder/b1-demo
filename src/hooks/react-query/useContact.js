import { useState } from "react";

const useContactForm = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = process.env.REACT_APP_BEARER_TOKEN; // Fetch from env
      const response = await fetch(`https://wordpress-1360300-5087149.cloudwaysapps.com/wp-json/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      setSuccess(true);
      return await response.json();
    } catch (err) {
      setError(err.message || "Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, submitForm };
};

export default useContactForm;
