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
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/hero-home.mp4",
  video_banner_text:
    "Interactive,Web,Design,Digital,Marketing,SEO,Social,Media",
  home_typing_text:
    "Always lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  work_section_pagination: "01/03",
  work_section_title: "WORK",
  work_section_description:
    "Our work sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  work_items: [
    {
      item_id: 27,
      item_title: "Kline",
      item_content: "Web Design / Development / SEO / Service / Service",
      item_services: ["Development", "SEO", "Service", "Web Design"],
      item_url: "kline",
      item_thumbnail:
        "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/bg.png",
      item_logo:
        "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/kline-logo.png",
    },
  ],
  banner_type: "video",
  image_banner:
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/banner-bg-hero-1.jpg",
  about_section_pagination: "02/03",
  about_section_title: "ABOUT",
  about_section_description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus",
  adventure_items: [
    {
      item_id: 50,
      item_title: "Photo title / Vail, Colorado",
      item_url: "photo-title-vail-colorado",
      item_thumbnail:
        "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/GalleryImg1.png",
    },
  ],
  service_section_pagination: "03/03",
  about_section_short_title: "Adventure",
  service_section_title: "SERVICES",
  service_section_image:
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/services-home-banner.jpg",
  service_items: [
    {
      item_id: 9,
      item_title: "Development",
      item_url: "development",
      item_thumbnail:
        "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/development-icon.png",
    },
  ],
  service_section_description:
    "Services sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  lets_connect_title: "Let's Connect 2",
  lets_connect_short_title: "Have a project in mind?",
  lets_connect_button_title: "Send us a message",
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
