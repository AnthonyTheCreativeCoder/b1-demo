import { useQuery } from "@tanstack/react-query";
import WordPressService from "../../services/WordPressService";
const worksType = {
  image_banner: "",
  banner_title: "",
  work_items: [],
  featured_work_section_pagination: "",
  featured_work_section_title: "",
  featured_work_section_description: "",
  featured_work_section_short_title: "",
  banner_description: "",
  project_section_pagination: "",
  project_section_title: "",
  project_section_short_title: "",
  project_section_description: "",
  project_items: [],
  lets_connect_title: "",
  lets_connect_message: "",
  lets_connect_button_title: "",
};
const siteInitialData = {
  work_items: [
    {
      item_id: 27,
      item_title: "Kline",
      item_services: ["Development", "SEO", "Service", "Web Design"],
      item_content: "Web Design / Development / SEO / Service / Service",
      item_url: "kline",
    },
  ],
  banner_title: "Work",
  image_banner:
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/hero-image.png",
  featured_work_section_pagination: "01/02",
  featured_work_section_title: "FEATURED WORK",
  featured_work_section_description:
    "Our work sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  featured_work_section_short_title: "Featured work",
  banner_description:
    "Always lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  project_section_pagination: "02/02",
  project_section_title: "OTHER PROJECTS",
  project_section_short_title: "Others projects",
  project_section_description:
    "Our work sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  project_items: [
    {
      item_id: 208,
      item_title: "Avanti Tattoo",
      item_services: ["Development", "SEO", "Service", "Web Design"],
      item_content: "",
      item_url: "avanti-tattoo",
    },
  ],
  lets_connect_title: "Have a project in mind?",
  lets_connect_message: "Let's Connect",
  lets_connect_button_title: "Send us a message",
};
const useService = () => {
  const serviceQuery = useQuery({
    queryKey: ["site-service-page"],
    queryFn: () =>
      WordPressService.fetchData(`site-service-page?_=${Date.now()}`).then((res) => res),
    initialData: siteInitialData,
  });
    // console.log("= Service Query =");
    // console.log(serviceQuery);
  return serviceQuery;

};
export default useService;
