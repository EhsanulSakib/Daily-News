import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import NewsDetail from "../NewsDetail/NewsDetail";

const NewsContainer = () => {
    const { news, selectedCategory } = useContext(AuthContext);

    const intSelectedCategory = parseInt(selectedCategory)
    const showNews = news.filter(showNews => parseInt(showNews.category_id) === intSelectedCategory)

    return (
        <div>
            {

                (selectedCategory == 0 || selectedCategory === null) ?
                    news?.map((select, idx) => <NewsDetail key={idx} category={select}></NewsDetail>)
                    :
                    showNews?.map((select, idx) => <NewsDetail key={idx} category={select}></NewsDetail>)
            }
        </div>
    );
};

export default NewsContainer;