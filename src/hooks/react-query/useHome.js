import { useQuery } from "@tanstack/react-query";
import WordPressService from "../../services/WordPressService";

const home = {
  banner_type: "",
  home_typing_text: "",
  video_banner: "",
  video_banner_text: "",
  work_section_description: "",
  work_section_pagination: "",
  work_section_title: "",
  work_items: [],
  about_section_pagination: "",
  about_section_title: "",
  about_section_short_title: "",
  about_section_pagination: "",
  about_section_description: "",
  adventure_items: [],
  service_items: [],
  service_section_pagination: "",
  service_section_title: "",
  service_section_image: "",
  service_section_description: "",
};
const siteInitialData = {
  video_banner:
    "",
  video_banner_text:
    "Interactive/ Web/Design/Digital/Marketing/SEO/ Social/Media/",
  home_typing_text:
    ".",
  work_section_pagination: "",
  work_section_title: "",
  work_section_description:
    "",
  work_items: [
    {
      item_id: 27,
      item_title: "",
      item_content: "",
      item_services: ["", "", "", ""],
      item_url: "",
      item_thumbnail:
        "",
      item_logo:
        "",
    },
  ],
  banner_type: "",
  image_banner:
    "",
  about_section_pagination: "",
  about_section_title: "",
  about_section_description:
    "",
  adventure_items: [
    {
      item_id: 50,
      item_title: "",
      item_url: "",
      item_thumbnail:
        "",
    },
  ],
  service_section_pagination: "",
  about_section_short_title: "",
  service_section_title: "",
  service_section_image:
    "",
  service_items: [
    {
      item_id: 9,
      item_title: "",
      item_url: "",
      item_thumbnail:
        "",
    },
  ],
  service_section_description:
    "",
  lets_connect_title: "",
  lets_connect_short_title: "",
  lets_connect_button_title: "",
};
const useHome = () => {
  const homeQuery = useQuery({
    queryKey: ["site-home"],
    queryFn: () => WordPressService.getHomepage().then((res) => res),
    initialData: siteInitialData,
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });
  return homeQuery;
};
export default useHome;
