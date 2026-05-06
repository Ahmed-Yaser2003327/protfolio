import axios from "axios";

export const getProjects = async () => {
    const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return res.data;
};