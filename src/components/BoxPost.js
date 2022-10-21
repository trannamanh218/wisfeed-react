const BoxPost = () => {
  return (
    <div className="box-post">
      <div className="post-news">
        <div className="avata-post-news">
          <img src="img/image 17.png" alt="" />
        </div>
        <div className="text-post-news">
          <input type="text" placeholder="Tạo bài viết của bạn..." />
        </div>
      </div>
      <div className="category-post">
        <div className="item read-book">
          <div className="icon">
            <img src="img/Read Book2.png" alt="" />
          </div>
          <div className="text">Sách</div>
        </div>
        <div className="item feather">
          <div className="icon">
            <img src="img/Feather.png" alt="" />
          </div>
          <div className="text">Tác giả</div>
        </div>
        <div className="item feed-cards">
          <div className="icon">
            <img src="img/Grid Feed Cards2.png" alt="" />
          </div>
          <div className="text">Chủ đề</div>
        </div>
        <div className="item hashtag">
          <div className="icon">
            <img src="img/Hashtag.png" alt="" />
          </div>
          <div className="text">Hashtag</div>
        </div>
      </div>
    </div>
  );
};
export default BoxPost;
