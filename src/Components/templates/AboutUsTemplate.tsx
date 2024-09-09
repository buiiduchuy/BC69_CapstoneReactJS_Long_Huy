import img1 from "../../assets/imgs/doitac/img1.png";
import img2 from "../../assets/imgs/doitac/img2.png";
import img3 from "../../assets/imgs/doitac/img3.png";
import img4 from "../../assets/imgs/doitac/img4.png";
import img5 from "../../assets/imgs/doitac/img5.png";
import img6 from "../../assets/imgs/doitac/img6.png";

export const AboutUsTemplate = () => {
  return (
    <div className="container m-auto py-[90px] px-4">
      <h2 className="text-white text-[35px] font-500 mb-9 after:contents:'' after:block after:w-9 after:h-[3px] after:bg-orange-300">
        Về chúng tôi
      </h2>
      <div className="text-white mb-24">
        <p className="mb-4">
          Chào mừng đến với trang web phim HotFlix, điểm đến tuyệt vời cho tất
          cả những người đam mê phim ảnh. Đắm mình vào thế giới của những câu
          chuyện hấp dẫn, hình ảnh tuyệt đẹp và những màn trình diễn khó quên.
          Khám phá thư viện phim đồ sộ của chúng tôi, trải dài trên nhiều thể
          loại, thời đại và nền văn hóa.
        </p>
        <p>
          Hãy đắm mình vào niềm vui của điện ảnh với các bộ sưu tập được tuyển
          chọn của chúng tôi, gồm những bộ phim được chọn lọc kỹ lưỡng, được
          nhóm theo chủ đề, đạo diễn hoặc diễn viên. Đắm mình vào thế giới ma
          thuật điện ảnh và để bản thân được đưa đến những cõi tưởng tượng và
          cảm xúc mới.
        </p>
      </div>
      <ul className="flex flex-wrap text-white mb-24">
        <li className="md:w-1/2 lg:ps-24 md:ps-16 lg:pe-11 md:pe-5 relative mb-12">
          <i className="fa-solid fa-film text-white lg:text-[60px] md:text-[40px] text-[30px] absolute sm:-1top-1 left-0"></i>
          <h3 className="text-[20px] ps-11 mb-2 text-orange-300 font-500">
            Dữ liệu phim lớn
          </h3>
          <p className="">
            Khám phá bộ sưu tập phim đa dạng và phong phú trong cơ sở dữ liệu
            rộng lớn của chúng tôi. Với hàng ngàn tựa phim để lựa chọn, bạn sẽ
            không bao giờ hết lựa chọn.
          </p>
        </li>
        <li className="md:w-1/2 lg:ps-24 md:ps-16 lg:pe-11 md:pe-5 relative mb-12">
          <i className="fa-solid fa-ticket text-white lg:text-[60px] md:text-[40px] text-[30px] absolute sm:-1top-1 left-0"></i>
          <h3 className="text-[20px] ps-11 mb-2 text-orange-300 font-500">
            Truy cập sớm vào các mục mới
          </h3>
          <p className="">
            Hãy là người đầu tiên trải nghiệm những bộ phim mới nhất và nội dung
            độc quyền với tính năng Truy cập sớm của chúng tôi. Xem trước các
            bản phát hành sắp tới, được quyền truy cập vào các buổi chiếu đặc
            biệt và luôn đi đầu xu hướng.
          </p>
        </li>
        <li className="md:w-1/2 lg:ps-24 md:ps-16 lg:pe-11 md:pe-5 relative mb-12">
          <i className="fa-brands fa-chromecast text-white lg:text-[60px] md:text-[40px] text-[30px] absolute sm:-1top-1 left-0"></i>
          <h3 className="text-[20px] ps-11 mb-2 text-orange-300 font-500">
            Airplay
          </h3>
          <p className="">
            Truyền phát phim liền mạch từ thiết bị của bạn đến màn hình lớn với
            tích hợp Airplay. Trải nghiệm sự kỳ diệu của điện ảnh trong sự thoải
            mái tại phòng khách của bạn và chia sẻ sự phấn khích với bạn bè và
            gia đình.
          </p>
        </li>
        <li className="md:w-1/2 lg:ps-24 md:ps-16 lg:pe-11 md:pe-5 relative mb-12">
          <i className="fa-solid fa-language text-white lg:text-[60px] md:text-[40px] text-[30px] absolute sm:-1top-1 left-0"></i>
          <h3 className="text-[20px] ps-11 mb-2 text-orange-300 font-500">
            Phụ đề đa ngôn ngữ
          </h3>
          <p className="">
            Phá vỡ rào cản ngôn ngữ và thưởng thức phim từ khắp nơi trên thế
            giới với phụ đề đa ngôn ngữ của chúng tôi. Khám phá các nền văn hóa
            khác nhau, mở rộng tầm nhìn điện ảnh của bạn và đánh giá cao vẻ đẹp
            của điện ảnh toàn cầu.
          </p>
        </li>
      </ul>
      <h2 className="text-white text-[35px] font-500 mb-9 after:contents:'' after:block after:w-9 after:h-[3px] after:bg-orange-300">
        Đối tác của chúng tôi
      </h2>
      <ul className="flex flex-wrap">
        <li className="lg:w-1/6 md:w-1/3 w-1/2">
          <img src={img1} alt="img" className="opacity-60" />
        </li>
        <li className="lg:w-1/6 md:w-1/3 w-1/2">
          <img src={img2} alt="img" className="opacity-60" />
        </li>
        <li className="lg:w-1/6 md:w-1/3 w-1/2">
          <img src={img3} alt="img" className="opacity-60" />
        </li>
        <li className="lg:w-1/6 md:w-1/3 w-1/2">
          <img src={img4} alt="img" className="opacity-60" />
        </li>
        <li className="lg:w-1/6 md:w-1/3 w-1/2">
          <img src={img5} alt="img" className="opacity-60" />
        </li>
        <li className="lg:w-1/6 md:w-1/3 w-1/2">
          <img src={img6} alt="img" className="opacity-60" />
        </li>
      </ul>
    </div>
  );
};
