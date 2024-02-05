import axios from "axios";
import { toast } from "react-toastify";


const BASE_URL = process.env.REACT_APP_API_BASE_URL
const getAllNewsArticleUrl = `${BASE_URL}/api/`


const getAllNewsArticle = async (pageName: string, slug: string): Promise<any> => {
    const res = await axios.get(getAllNewsArticleUrl + pageName + "/" + slug);
    console.log("pageNamepageName",pageName)
    console.log("slugslug",slug)
    console.log(res)
    return res;
};


export {
    getAllNewsArticle,
}