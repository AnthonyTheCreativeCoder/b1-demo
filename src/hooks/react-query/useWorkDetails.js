import { useQuery } from "@tanstack/react-query";
import WordPressService from "../../services/WordPressService";

const siteInitialData = {
  post_title: "Kline",
  post_content: "Web Design / Development / SEO / Service / Service",
  featured_image:
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/bg.png",
  item_services: ["Development", "SEO", "Service", "Web Design"],
  work_details_page_mobile_gallery: [
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/Kline-home-mobile-4.png",
  ],
  work_details_page_gallery_section: [
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/gal-4.png",
  ],
  work_details_page_module_gallery_section: [
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/module-bg8.jpg",
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/module-bg7.jpg",
  ],
  work_logo:
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/kline-logo.png",
  work_details_page_banner:
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/bg.png",
  work_details_page_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  work_details_page_overview_title: "Overview",
  work_details_page_typing_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  work_details_page_button_title: "View Website",
  work_details_page_button_link: "#",
  work_details_page_video_image:
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/video.png",
  work_details_page_video_url:
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/video-1.png",
  work_details_page_challange_section_title: "Challange",
  work_details_page_challange_section_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  work_details_page_approach_section_title: "Approach",
  work_details_page_approach_section_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  work_details_page_laptop_section_animation:
    "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/Kline-Designs-scaled.jpg",
  work_details_page_mobile_horizontal_slider_section_title: "Mobile title",
  work_details_page_mobile_horizontal_slider_section_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  work_details_page_second_approach_section_title: "Website or marketing title",
  work_details_page_second_approach_section_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  work_details_page_third_approach_section_title:
    "Other items module (marketing, social, branding...). Showing .psd templates",
  work_details_page_third_approach_section_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  work_details_page_more_work: [
    {
      item_id: 98,
      item_title: "Ride a Kart",
      item_content: "Web Design / Development / SEO / Service",
      item_url: "ride-a-kart",
      item_thumbnail:
        "https://b1interactistg.wpenginepowered.com/wp-content/uploads/2024/09/gallery-3.jpg",
    },
  ],
  work_details_page_testimonials: [
    {
      item_id: 182,
      item_title: "Paul Roberston, Owner",
      item_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
  work_details_page_lets_connect_tagline: "Have a project in mind?",
  work_details_page_lets_connect_content: "Let's Connect",
  work_details_page_lets_connect_button_title: "Send us a message",
  work_details_page_lets_connect_button_link: "#",
  featured_work_item: "yes",
};

const useWorkDetails = (query) => {
  const workDetailsQuery = useQuery({
    queryKey: ["site-work-details", query],
    queryFn: () =>
      WordPressService.fetchData(`site-work-details/${query.id}`).then(
        (res) => res
      ),
    initialData: siteInitialData,
  });
  return workDetailsQuery;
};
export default useWorkDetails;
