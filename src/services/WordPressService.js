// src/services/WordPressService.js
import axios from "axios";

class WordPressService {
  constructor() {
    // Base URL and token fetched from .env
    this.apiUrl =
      process.env.REACT_APP_WORDPRESS_API_URL || "http://localhost:3000"; // Fallback to localhost if env variable is not set
    this.bearerToken = process.env.REACT_APP_WORDPRESS_BEARER_TOKEN;

    // Create axios instance with the base URL
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl,
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
        "Content-Type": "application/json",
      },
    });
  }

  // Function to handle GET requests
  async fetchData(endpoint) {
    // console.log("endpoint "+endpoint);
    try {
      const response = await this.axiosInstance.get(endpoint);  
      // console.log("response == ")
      // console.log(response.data)
      // console.log("response == ")
      return response.data;
    } catch (error) {
      console.error("Error fetching data from WordPress API:", error);
      throw error;
    }
  }

  // Handle POST requests
  async postData(endpoint, body) {
    try {
      // console.log("== endpoint == " + endpoint);
      const response = await this.axiosInstance.post(endpoint, body);
      return response.data;
    } catch (error) {
      console.error("Error posting datad to WordPress API:", error);
      throw error;
    }
  }

  //   Function to fetch posts (GET)
  async getPosts() {
    const timestampgposts = Date.now(); // Get current timestamp in milliseconds
    return this.fetchData(`posts?timestamp=${timestampgposts}`);
  }

  // Function to  fetch header (GET)
  async getHeader() {
     const timestampgthdr = Date.now(); // Get current timestamp in milliseconds
    return this.fetchData(`site-header?timestamp=${timestampgthdr}`);
  }

  // Function  to fetch header (GET)
  async getFooter() {
    const timestampgtftr = Date.now(); // Get current timestamp in milliseconds
    return this.fetchData(`site-footer?timestamp=${timestampgtftr}`);
  }

  // Function to fetch a specific post (GET)
  async getPostById(id) {
    return this.fetchData(`posts/${id}`);
  }

  // Function to create a post (POST)
  async createPost(postData) {
    return this.postData("posts", postData);
  }
  // Function to fetch data of  homepage
  getHomepage() {
    const timestamp = Date.now(); // Get current timestamp in milliseconds
    return this.fetchData(`site-home?timestamp=${timestamp}`);
  }
  /**
   * This function will fetch the header and footer.
   * @returns object with include header_menu_items and footer_menu_items
   */
  getHeaderFooter() {
    const timestampftr = Date.now(); // Get current timestamp in milliseconds
    return this.fetchData(`site-header-footer?timestamp=${timestampftr}`);
  }
}

export default new WordPressService();
