import { useQuery } from "@tanstack/react-query";
import WordPressService from "../../services/WordPressService";


const useContactPage = () => {
  const queryResult = useQuery({
    queryKey: ['site-contact-page-content'],
    queryFn: async () => {
      const response = await WordPressService.fetchData(`site-contact-page-content?_=${Date.now()}`);
      if (!response || !response.contact_data) {
        throw new Error('No service data found');
      }
      return response;
    },
    refetchOnWindowFocus: false,
    retry: 30, // Retry twice before failing
    staleTime: 100, // Cache data for 5 minutes
  });

  const { data, isLoading, isError, error } = queryResult;

  return {
    dataser: data || null,
    isLoadingdata: isLoading,
    errordata: isError ? error.message : null,
  };
};
export default useContactPage;
