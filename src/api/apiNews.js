import axios from "axios";

// Была загуржена библиотека axios
const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY=import.meta.env.VITE_NEWS_API_KEY;

export async function getNews({page_number = 1, page_size = 10, category, keywords}) {
    try {
        const response = await axios.get(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords
            }
        })
        return response.data;
    } catch(error) {
        console.error('It is all the fucking shit, Do it again')
    }
}

export async function getLatestNews() {
    try {
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY,
            }
        })
        return response.data;
    } catch(error) {
        console.error('It is all the fucking shit! Do it again')
    }
}

export async function getCategories() {
    try {
        const response = await axios.get(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,
            }
        })
        return response.data;
    } catch(error) {
        console.error('It is all the fucking shit, Do it again')
    }
}
