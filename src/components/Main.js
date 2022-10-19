import "../css/main.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Main = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    variableWidth: true,
  };
  return (
    <main>
      <div className="container">
        <div className="box-container">
          <div className="box-left">
            <div className="box-books-being-read">
              <div className="title-books">Sách đang đọc</div>
              <div className="reading-progress">
                <div className="left-reading-progress">
                  <img src="img/image 469.png" alt="" />
                </div>
                <div className="right-reading-progress">
                  <div className="title-books">
                    Positive Thoughts Break the 20 bad ha
                  </div>
                  <div className="author-books">By J. Conner & S. G..</div>
                  <div className="process">
                    <div className="box-process">
                      <div className="item-process"></div>
                    </div>
                    <p className="text-process">29%</p>
                  </div>
                  <button>Cập nhật tiến độ</button>
                </div>
              </div>
            </div>
            <div className="box-price-book">
              <ul>
                <li className="title">Giá sách</li>
                <li>
                  <div>Sách đang đọc</div>
                  <div className="amount">02 cuốn</div>
                </li>
                <li>
                  <div>Sách đã đọc</div>
                  <div className="amount">433 cuốn</div>
                </li>
                <li>
                  <div>Sách muốn đọc</div>
                  <div className="amount">02 cuốn</div>
                </li>
                <li className="button-see-more">
                  <a href="#">xem thêm</a>
                </li>
              </ul>
            </div>
            <div className="box-target">
              <div className="title-box-target">Mục tiêu đọc sách</div>
              <div className="item-box-target">
                <div className="text-item-box-taget">
                  Thử thách bản thân bạn để đọc nhiều sách hơn!
                </div>
                <div className="img-item-box-target">
                  <img src="img/unsplash_nGrfKmtwv24.png" alt="" />
                </div>
                <div className="amount-item-box-target">
                  <div className="left">-</div>
                  <div className="center">4</div>
                  <div className="right">+</div>
                </div>
                <div className="btn-item-box-target">
                  <button>Bắt đầu thử thách</button>
                </div>
              </div>
            </div>
            <div className="box-want-to-read">
              <div className="title-want-to-read">Sách muốn đọc</div>
              <div className="croseo">
                <Slider {...settings}>
                  <div>
                    <img src="img/image 469 (1).png" alt="" />
                  </div>
                  <div>
                    <img src="img/image 4699.png" alt="" />
                  </div>
                  <div>
                    <img src="img/image 469 (1).png" alt="" />
                  </div>
                  <div>
                    <img src="img/image 4699.png" alt="" />
                  </div>
                  <div>
                    <img src="img/image 469 (1).png" alt="" />
                  </div>
                  <div>
                    <img src="img/image 4699.png" alt="" />
                  </div>
                  <div>
                    <img src="img/image 469 (1).png" alt="" />
                  </div>
                  <div>
                    <img src="img/image 4699.png" alt="" />
                  </div>
                  <div>
                    <img src="img/image 469 (1).png" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="quotes">
              <div className="title-quotes">Quotes</div>
              <div className="text-quotes">
                "Mỗi trang sách hay đều là một hành trình kỳ diệu" james
              </div>
              <div className="btn-quotes">
                <a href="#">xem thêm</a>
              </div>
            </div>
            <div className="shortcut-group">
              <div className="title-shortcut-group">Lối tắt nhóm</div>
              <div className="item-shortcut-group">
                <div className="img-shortcut-group">
                  <img src="img/Rectangle 17548 (1).png" alt="" />
                </div>
                <div className="name-shortcut-group">
                  Hội người thích truyện trinh thám sherlock
                </div>
              </div>
              <div className="item-shortcut-group">
                <div className="img-shortcut-group">
                  <img src="img/Rectangle 17548 (2).png" alt="" />
                </div>
                <div className="name-shortcut-group">Cộng đồng sách Hà Nội</div>
              </div>
              <div className="item-shortcut-group">
                <div className="img-shortcut-group">
                  <img src="img/Rectangle 17548 (3).png" alt="" />
                </div>
                <div className="name-shortcut-group">
                  Nhóm yêu thích tiểu thuyến
                </div>
              </div>
              <div className="item-shortcut-group">
                <div className="img-shortcut-group">
                  <img src="img/Rectangle 17548.png" alt="" />
                </div>
                <div className="name-shortcut-group">Nhóm yêu sách 2021</div>
              </div>
              <button className="btn-shortcut-group">
                <span>
                  <img src="img/Forward.png" alt="" />
                </span>
                Xem thêm
              </button>
            </div>
          </div>
          <div className="box-center">
            <div className="box-news">
              <div className="title-news">
                <div className="text-title-news">Bảng tin</div>
                <div className="filter-news">
                  <img src="img/Vector.png" alt="" />
                </div>
              </div>
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
              <div className="box-user-posts">
                <div className="personal-page">
                  <div className="avata">
                    <img src="img/image 17.png" alt="" />
                  </div>
                  <div className="user-information">
                    <div className="name-user-information">MaBư Phạm</div>
                    <div className="posting-time">1 giờ trước</div>
                    <div className="progress-update">
                      <div className="icon">
                        <img src="img/World Net.png" alt="" />
                      </div>
                      <div className="text">Cập nhật tiến độ đọc sách</div>
                    </div>
                    <div className="post-rating">
                      <div className="title">Xếp hạng</div>
                      <div className="icon">
                        <img src="img/Star.png" alt="" />
                      </div>
                      <div className="icon">
                        <img src="img/Star.png" alt="" />
                      </div>
                      <div className="icon">
                        <img src="img/Star.png" alt="" />
                      </div>
                      <div className="icon">
                        <img src="img/Star.png" alt="" />
                      </div>
                      <div className="icon">
                        <img src="img/Star.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-box-user-posts">
                  Tình yêu quê hương đất nước là tình cảm yêu mến và gắn bó sâu
                  sắc, chân thành đối với những sự vật, con người thuộc về nơi
                  chúng ta sinh ra và lớn lên.
                  <a href="#">#yeuthuongaicungnhuai</a>
                </div>
                <div className="box-books">
                  <div className="img-box-books">
                    <img src="img/imagee4699.png" alt="" />
                  </div>
                  <div className="information-box-books">
                    <div className="title-box-books">
                      Yêu thương ai cũng như ai - Bản dịch 2022
                    </div>
                    <div className="auther-box-books">By Christ Bohajalian</div>
                    <div className="reading-progress">
                      <div className="coat-progress">
                        <div className="core-progress"></div>
                      </div>
                      <div className="amount-progress">
                        <div className="title">60/200</div>
                        <div className="text">Trang sách đã đọc</div>
                      </div>
                    </div>
                    <div className="bottom-box-books">
                      <div className="right">
                        <button className="knot-read">
                          <span>
                            <img src="img/Target.png" alt="" />
                          </span>
                          <span>
                            <div className="text">Muốn đọc</div>
                            <div className="icon">
                              <img src="img/Arrow Caret Down.png" alt="" />
                            </div>
                          </span>
                        </button>
                      </div>
                      <div className="left">
                        <div className="icons-evaluate">
                          <img src="img/Star.png" alt="" />
                          <img src="img/Star.png" alt="" />
                          <img src="img/Star.png" alt="" />
                          <img src="img/Star.png" alt="" />
                          <img src="img/Star.png" alt="" />
                        </div>
                        <div className="text-aveluate">
                          (4.2) (200 đánh giá)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="interactive">
                  <div className="item like">
                    <div className="icon">
                      <img src="img/Filled Thumbs-up.png" alt="" />
                    </div>
                    <div className="title">12 Like</div>
                  </div>
                  <div className="item comments">
                    <div className="icon">
                      <img src="img/Comment.png" alt="" />
                    </div>
                    <div className="title">7 Comment</div>
                  </div>
                  <div className="item share">
                    <div className="icon">
                      <img src="img/Vector 390.png" alt="" />
                    </div>
                    <div className="title">54 Share</div>
                  </div>
                </div>
                <ul className="user-comment">
                  <li>
                    <div className="personal-page-user">
                      <div className="left">
                        <div className="img">
                          <img src="img/image 17.png" alt="" />
                        </div>
                      </div>
                      <div className="right">
                        <div className="information-user">
                          <div className="box-information">
                            <div className="name">Bùi Đức Đạt</div>
                            <div className="commmet">Rất tuyệt vời</div>
                          </div>
                          <div className="btn-information-user">
                            <div className="btn-like">Thích</div>
                            <div className="btn-feedback">Phản hồi</div>
                            <div className="btn-time">16 giờ</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="items-user-comment">
                      <li>
                        <div className="personal-page-user">
                          <div className="left">
                            <div className="img">
                              <img src="img/image 17.png" alt="" />
                            </div>
                          </div>
                          <div className="right">
                            <div className="information-user">
                              <div className="box-information">
                                <div className="box-author">
                                  <div className="name">Ma Bư Phạm</div>
                                  <div className="logo-author">Tác giả</div>
                                </div>
                                <div className="commmet">
                                  <a href="#"> Đức Văn Đạt </a> Chào mọi người ,
                                  có ai đang dùng Mi10s mà bị lỗi Wifi như mình
                                  không? Mình mua mi10s ở Mobile city cách đây 1
                                  tuần , máy mình bị lỗi cứ đứng gần cục modem
                                  thì mới có sóng wifi
                                </div>
                              </div>
                              <div className="btn-information-user">
                                <div className="btn-like">Thích</div>
                                <div className="btn-feedback">Phản hồi</div>
                                <div className="btn-time">16 giờ</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="personal-page-user">
                          <div className="left">
                            <div className="img">
                              <img src="img/image 17.png" alt="" />
                            </div>
                          </div>
                          <div className="right">
                            <div className="information-user">
                              <div className="box-information">
                                <div className="name">Bùi Đức Đạt</div>
                                <div className="commmet">
                                  Chào mọi người , có ai đang dùng Mi10s
                                </div>
                              </div>
                              <div className="btn-information-user">
                                <div className="btn-like">Thích</div>
                                <div className="btn-feedback">Phản hồi</div>
                                <div className="btn-time">16 giờ</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="personal-page-user">
                          <div className="left">
                            <div className="img">
                              <img src="img/image 17.png" alt="" />
                            </div>
                          </div>
                          <div className="right">
                            <div className="information-user">
                              <div className="box-information">
                                <div className="box-author">
                                  <div className="name">Ma Bư Phạm</div>
                                  <div className="logo-author">Tác giả</div>
                                </div>
                                <div className="commmet">
                                  <a href="#">Đức Văn Đạt </a> Chào mọi người ,
                                  có ai đang dùng Mi10s mà bị lỗi Wifi
                                </div>
                              </div>
                              <div className="btn-information-user">
                                <div className="btn-like">Thích</div>
                                <div className="btn-feedback">Phản hồi</div>
                                <div className="btn-time">16 giờ</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="btn-user-comment">
                        <div className="image-user">
                          <img src="img/image 17.png" alt="" />
                        </div>
                        <form action="">
                          <input type="text" placeholder="Viết bình luận..." />
                        </form>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="personal-page-user">
                      <div className="left">
                        <div className="img">
                          <img src="img/image 17.png" alt="" />
                        </div>
                      </div>
                      <div className="right">
                        <div className="information-user">
                          <div className="box-information">
                            <div className="box-author">
                              <div className="name">Ma Bư Nguyễn</div>
                              <div className="logo-author">Tác giả</div>
                            </div>
                            <div className="commmet">
                              1. Chưa gặp tình trạng này hay ai kêu như bạn trên
                              mi10s <br />
                              2. Tui cx mua mbc đc 2 thág r, new seal giờ vẫn k
                              lỗi gì Bạn mua máy mới hay cũ? <br />
                              3. Có thể do lỗi Rom, cái này up lại đơn giản, nên
                              thử <br />
                              4. Nhà tui cũg dùg wifi 1 băng tần và không việc
                              gì, toàn 12 13Mb/s
                            </div>
                          </div>
                          <div className="btn-information-user">
                            <div className="btn-like">Thích</div>
                            <div className="btn-feedback">Phản hồi</div>
                            <div className="btn-time">16 giờ</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="box-user-posts">
                <div className="personal-page">
                  <div className="avata">
                    <img src="img/image 17.png" alt="" />
                  </div>
                  <div className="user-information">
                    <div className="name-user-information">MaBư Phạm</div>
                    <div className="posting-time">1 giờ trước</div>
                    <div className="progress-update">
                      <div className="icon">
                        <img src="img/World Net.png" alt="" />
                      </div>
                      <div className="text">Cập nhật tiến độ đọc sách</div>
                    </div>
                    <div className="post-rating">
                      <div className="title">Xếp hạng</div>
                      <div className="icon">
                        <img src="img/Star.png" alt="" />
                      </div>
                      <div className="icon">
                        <img src="img/Star.png" alt="" />
                      </div>
                      <div className="icon">
                        <img src="img/Star.png" alt="" />
                      </div>
                      <div className="icon">
                        <img src="img/Star.png" alt="" />
                      </div>
                      <div className="icon">
                        <img src="img/Star.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-box-user-posts">
                  Tình yêu quê hương đất nước là tình cảm yêu mến và gắn bó sâu
                  sắc, chân thành đối với những sự vật, con người thuộc về nơi
                  chúng ta sinh ra và lớn lên.
                  <a href="#">#yeuthuongaicungnhuai</a>
                </div>
                <div className="box-books">
                  <div className="img-box-books">
                    <img src="img/imagee4699.png" alt="" />
                  </div>
                  <div className="information-box-books">
                    <div className="title-box-books">
                      Yêu thương ai cũng như ai - Bản dịch 2022
                    </div>
                    <div className="auther-box-books">By Christ Bohajalian</div>
                    <div className="reading-progress">
                      <div className="coat-progress">
                        <div className="core-progress"></div>
                      </div>
                      <div className="amount-progress">
                        <div className="title">60/200</div>
                        <div className="text">Trang sách đã đọc</div>
                      </div>
                    </div>
                    <div className="bottom-box-books">
                      <div className="right">
                        <button className="knot-read">
                          <span>
                            <img src="img/Target.png" alt="" />
                          </span>
                          <span>
                            <div className="text">Muốn đọc</div>
                            <div className="icon">
                              <img src="img/Arrow Caret Down.png" alt="" />
                            </div>
                          </span>
                        </button>
                      </div>
                      <div className="left">
                        <div className="icons-evaluate">
                          <img src="img/Star.png" alt="" />
                          <img src="img/Star.png" alt="" />
                          <img src="img/Star.png" alt="" />
                          <img src="img/Star.png" alt="" />
                          <img src="img/Star.png" alt="" />
                        </div>
                        <div className="text-aveluate">
                          (4.2) (200 đánh giá)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="interactive">
                  <div className="item like">
                    <div className="icon">
                      <img src="img/Filled Thumbs-up.png" alt="" />
                    </div>
                    <div className="title">12 Like</div>
                  </div>
                  <div className="item comments">
                    <div className="icon">
                      <img src="img/Comment.png" alt="" />
                    </div>
                    <div className="title">7 Comment</div>
                  </div>
                  <div className="item share">
                    <div className="icon">
                      <img src="img/Vector 390.png" alt="" />
                    </div>
                    <div className="title">54 Share</div>
                  </div>
                </div>
                <ul className="user-comment">
                  <li className="btn-user-comment">
                    <div className="image-user">
                      <img src="img/image 17.png" alt="" />
                    </div>
                    <form action="">
                      <input type="text" placeholder="Viết bình luận..." />
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box-right">
            <div className="event">
              <div className="title-event">Sự kiện</div>
              <div className="box-world-Books-day">
                <div className="title-box-world-Books-day">World Books Day</div>
                <div className="img-box-world-Books-day">
                  <img src="img/unsplash_nGrfKmtwv244.png" alt="" />
                </div>
                <button className="btn-box-world-Books-day">
                  Tham gia sự kiện
                </button>
              </div>
            </div>
            <div className="charts">
              <div className="title-charts">Bảng xếp hạng</div>
              <div className="ing-charts">
                <img src="img/Frame 40470.png" alt="" />
                <div className="box-top1-charts">
                  <div className="top-1-charts">
                    <img src="img/Crown.png" alt="" />
                    <div className="avata-user-top">
                      <img src="img/image 17.png" alt="" />
                    </div>
                    <div className="number-charts">1</div>
                    <p className="name-user-charts">Hoang Anh</p>
                    <p className="score-charts">1092</p>
                  </div>
                </div>
                <div className="box-top2-charts">
                  <div className="top-1-charts">
                    <div className="avata-user-top">
                      <img src="img/image 17.png" alt="" />
                    </div>
                    <div className="number-charts">2</div>
                    <p className="name-user-charts">Vatani</p>
                    <p className="score-charts">592</p>
                  </div>
                </div>
                <div className="box-top3-charts">
                  <div className="top-1-charts">
                    <div className="avata-user-top">
                      <img src="img/image 17.png" alt="" />
                    </div>
                    <div className="number-charts">3</div>
                    <p className="name-user-charts">Jona hart</p>
                    <p className="score-charts">800</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
