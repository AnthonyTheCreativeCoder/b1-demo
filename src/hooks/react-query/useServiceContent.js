import { useQuery } from "@tanstack/react-query";
import WordPressService from "../../services/WordPressService";


const useServiceContent = () => {
  const queryResult = useQuery({
    queryKey: ['site-service-page-content'],
    queryFn: async () => {
      const response = await WordPressService.fetchData(`site-service-page-content?_=${Date.now()}`);
      if (!response || !response.service_data) {
        throw new Error('No service data found');
      }
      return response;
    },
    refetchOnWindowFocus: false,
    retry: 2, // Retry twice before failing
    staleTime: 300000, // Cache data for 5 minutes
  });

  const { data, isLoading, isError, error } = queryResult;

  return {
    dataser: data || null,
    isLoadingdata: isLoading,
    errordata: isError ? error.message : null,
  };
};
export default useServiceContent;
