import { useQuery } from "@tanstack/react-query";
import WordPressService from "../../services/WordPressService";

const useAboutDetails = () => {
  const aboutQuery = useQuery({
    queryKey: ["site-about-page"],
    queryFn: () =>
      WordPressService.fetchData(`site-about-page?_=${Date.now()}`).then((res) => res),
    // initialData: siteInitialData,
  });
    // console.log("= Service Query =");
    // console.log(serviceQuery);
  return aboutQuery;

};
export default useAboutDetails;
