import { useQuery } from "@tanstack/react-query";
import WordPressService from "../../services/WordPressService";
import { logo } from "../../assets";

const siteInitialData = {
  header_menu_items: [
    {
      title: "Works",
      url: "/works",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact US",
      url: "/contact",
    },
  ],
  logo_url: logo,
  site_title: "B1 Interactive",
};
const useHeaderFooter = () => {
  const headerFooterQuery = useQuery({
    queryKey: ["site-Header-footer"],
    queryFn: () => WordPressService.getHeaderFooter().then((res) => res),
    initialData: siteInitialData,
  });
  return headerFooterQuery;
};
export default useHeaderFooter;
