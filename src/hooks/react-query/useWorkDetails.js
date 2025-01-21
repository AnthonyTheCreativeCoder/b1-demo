import { useQuery } from "@tanstack/react-query";
import WordPressService from "../../services/WordPressService";

const siteInitialData = {
  post_title: "",
  post_content: "Web Design / Development / SEO / Service / Service",
  featured_image:
    "",
  item_services: ["Development", "SEO", "Service", "Web Design"],
  work_details_page_mobile_gallery: [
    "",
  ],
  work_details_page_gallery_section: [
    "",
  ],
  work_details_page_module_gallery_section: [
    "",
    "",
  ],
  work_logo:
    "",
  work_details_page_banner:
    "",
  work_details_page_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  work_details_page_overview_title: "Overview",
  work_details_page_typing_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  work_details_page_button_title: "View Website",
  work_details_page_button_link: "#",
  work_details_page_video_image:
    "",
  work_details_page_video_url:
    "",
  work_details_page_challange_section_title: "Challange",
  work_details_page_challange_section_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  work_details_page_approach_section_title: "Approach",
  work_details_page_approach_section_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  work_details_page_laptop_section_animation:
    "",
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
        "",
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
  // console.log(" work details query");
  // console.log(query)
  const workDetailsQuery = useQuery({
    queryKey: ['site-work-details-another', query],  // queryKey should be an array
    queryFn: () =>
      WordPressService.fetchData(`site-work-details-updated-sec/${query}?_=${Date.now()}`).then(
        (res) => res
      ),
      initialData: siteInitialData,
  });

  return workDetailsQuery;
};
export default useWorkDetails;
