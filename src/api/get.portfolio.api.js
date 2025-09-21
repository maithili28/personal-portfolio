import { API_CONFIG } from "../../env.config";

// ...existing code...

export const getPortfolioById = async (id) => {
  try {
    // Replace :id in endpoint with actual id
    const endpoint = API_CONFIG.ENDPOINTS.PORTFOLIO.replace(":id", id);
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    console.log("Fetching from:", url);
    console.log("API base URL:", API_CONFIG.BASE_URL);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch portfolio");
    }

    const data = await response.json();
    console.log("Portfolio fetched successfully", data);
    return data;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    throw error;
  }
};
