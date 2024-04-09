import { useLoaderData, useParams } from "react-router-dom";

const NewsContainer = () => {
    const news = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const selectedNews = news?.map(selectedNews => selectedNews.category_id === idInt);


    return (
        <div>
            <h3>news: {selectedNews}</h3>
        </div>
    );
};

export default NewsContainer;