import { Avatar, Button, Divider, Popover } from "antd";
import { useQuanLyNguoiDungSelector } from "../../store/quanLyNguoiDung/selector";
import { useAppDispatch } from "../../store";
import { quanLyNguoiDungActions } from "../../store/quanLyNguoiDung";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { PATH } from "../../constants";

export const Header = () => {
  const { user } = useQuanLyNguoiDungSelector();
  console.log("user: ", user);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  return (
    <nav className="bg-[#1a191f] fixed w-full z-20 top-0 start-0 border-b border-gray-800">
      <div className="container m-auto flex flex-wrap items-center justify-between mx-auto py-[25px] px-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <svg
              width="126"
              height="23"
              viewBox="0 0 126 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.2441 22H13.7178V12.7568H5.23633V22H0.695312V0.583984H5.23633V8.97754H13.7178V0.583984H18.2441V22ZM43.1025 11.2627C43.1025 14.8076 42.2236 17.5322 40.4658 19.4365C38.708 21.3408 36.1885 22.293 32.9072 22.293C29.626 22.293 27.1064 21.3408 25.3486 19.4365C23.5908 17.5322 22.7119 14.7979 22.7119 11.2334C22.7119 7.66895 23.5908 4.94922 25.3486 3.07422C27.1162 1.18945 29.6455 0.24707 32.9365 0.24707C36.2275 0.24707 38.7422 1.19434 40.4805 3.08887C42.2285 4.9834 43.1025 7.70801 43.1025 11.2627ZM27.4727 11.2627C27.4727 13.6553 27.9268 15.457 28.835 16.668C29.7432 17.8789 31.1006 18.4844 32.9072 18.4844C36.5303 18.4844 38.3418 16.0771 38.3418 11.2627C38.3418 6.43848 36.54 4.02637 32.9365 4.02637C31.1299 4.02637 29.7676 4.63672 28.8496 5.85742C27.9316 7.06836 27.4727 8.87012 27.4727 11.2627ZM55.8027 22H51.2617V4.36328H45.4463V0.583984H61.6182V4.36328H55.8027V22Z"
                fill="#F9AB00"
              />
              <path
                d="M69.3818 22H64.9141V0.583984H77.1895V4.30469H69.3818V9.82715H76.6475V13.5332H69.3818V22ZM81.3789 22V0.583984H85.9199V18.25H94.6064V22H81.3789ZM98.3418 22V0.583984H102.883V22H98.3418ZM125.588 22H120.402L115.422 13.8994L110.441 22H105.578L112.683 10.9551L106.032 0.583984H111.042L115.656 8.28906L120.183 0.583984H125.075L118.352 11.2041L125.588 22Z"
                fill="white"
              />
            </svg>
          </span>
        </a>
        <div className="flex md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {user ? (
            <div className="flex items-center gap-10">
              <p>{user.hoTen}</p>
              <Popover
                content={
                  <div className="flex flex-col p-[12px] gap-10">
                    <Button type="text">Thông tin tài khoản</Button>
                    <div>
                      <Divider />
                    </div>
                    <Button
                      className="w-full"
                      danger
                      onClick={() => dispatch(quanLyNguoiDungActions.logOut())}>
                      Đăng xuất
                    </Button>
                  </div>
                }>
                <Avatar
                  className="bg-[#87d068]"
                  icon={<i className="fa-regular fa-user"></i>}
                />
              </Popover>
            </div>
          ) : (
            <div>
              <Button
                type="text"
                onClick={() => navigate(PATH.login)}
                className="!text-white rounded-md border-2 border-orange-300 hover:!bg-orange-300"
                size="large">
                Đăng nhập
              </Button>
              <Button
                type="text"
                onClick={() => navigate(PATH.register)}
                className="!text-white rounded-md border-2 border-orange-300 ms-2 hover:!bg-orange-300"
                size="large">
                Đăng ký
              </Button>
            </div>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className=" flex-1 justify-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul className="flex flex-col p-4:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-white hover:text-orange-300 md:p-0"
                aria-current="page">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="vechungtoi"
                className="block py-2 px-3 md:p-0 text-white hover:text-orange-300">
                Về chúng tôi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="danhmuc"
                className="block py-2 px-3 md:p-0 text-white hover:text-orange-300">
                Danh mục
              </NavLink>
            </li>
            <li>
              <NavLink
                to="lienhe"
                className="block py-2 px-3 md:p-0 text-white hover:text-orange-300">
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </div>
        <form className="max-w-md md:order-2 me-5">
          <div className="relative">
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pe-6 text-sm text-white border-2 border-gray-800 rounded-lg bg-gray-800 focus:border-orange-300 outline-none"
              placeholder="Tìm kiếm..."
            />
            <button
              type="submit"
              className="text-white absolute end-2 bottom-4 w-6 h-6"></button>
          </div>
        </form>
      </div>
    </nav>
  );
};
