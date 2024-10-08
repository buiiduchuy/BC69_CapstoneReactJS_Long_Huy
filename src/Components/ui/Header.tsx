import { Avatar, Button, Divider, Popover } from "antd";
import { useQuanLyNguoiDungSelector } from "../../store/quanLyNguoiDung/selector";
import { useAppDispatch } from "../../store";
import { quanLyNguoiDungActions } from "../../store/quanLyNguoiDung";
import { generatePath, NavLink, useNavigate } from "react-router-dom";
import { MANHOM, PATH } from "../../constants";
import { ChangeEvent, useRef, useState } from "react";
import cn from "classnames";
import { useQuery } from "@tanstack/react-query";
import { quanLyPhimServices } from "../../services";
import { Phim } from "../../@types";

export const Header = () => {
  const { user } = useQuanLyNguoiDungSelector();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [isshowMenu, setIsShowMenu] = useState(false);

  const { data } = useQuery({
    queryKey: ["DanhSachPhim"],
    queryFn: async () => {
      return quanLyPhimServices.getDanhSachPhim(MANHOM.manhom);
    },
    enabled: true,
  });

  const [searchResult, setSearchResult] = useState<Phim[] | undefined>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length === 0) {
      setSearchResult([]);
      return;
    }
    const newData = data?.data.content.filter((item) =>
      item.tenPhim.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResult(newData);
  };

  const handleResetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSearchResult([]);
  };

  return (
    <nav className="bg-[#1a191f] fixed w-full z-20 top-0 start-0 border-b border-gray-800">
      <div className="container m-auto flex flex-wrap items-center justify-between mx-auto md:py-[25px] py-4 px-4 relative">
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
        <div
          className={cn(
            "menu flex items-center flex-1 md:flex-row flex-col lg:relative absolute w-full top-full left-0 px-3 lg:px-0 lg:py-0 py-5 lg:bg-transparent bg-[#1f1e24] overflow-visible",
            {
              isShow: isshowMenu,
            }
          )}>
          <div
            className="flex-1 items-center justify-center w-full md:flex md:w-auto mb-5 md:mb-0"
            id="navbar-sticky">
            <ul className="flex flex-col p-4:p-0 font-medium rounded-lg lg:space-x-8 md:space-x-3 rtl:space-x-reverse md:flex-row lg:text-[16px] text-[14px]">
              <li>
                <NavLink
                  onClick={() => setIsShowMenu(false)}
                  to="/"
                  className="block py-2 px-3 text-white hover:text-orange-300 md:p-0 text-center">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setIsShowMenu(false)}
                  to="vechungtoi"
                  className="block py-2 px-3 md:p-0 text-white hover:text-orange-300 text-center">
                  Về chúng tôi
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setIsShowMenu(false)}
                  to="danhmuc"
                  className="block py-2 px-3 md:p-0 text-white hover:text-orange-300 text-center">
                  Danh mục
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setIsShowMenu(false)}
                  to="lienhe"
                  className="block py-2 px-3 md:p-0 text-white hover:text-orange-300 text-center">
                  Liên hệ
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:max-w-md md:me-5 md:mb-0 mb-5 md:w-[300px] w-full relative">
            <form className="w-full">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="search"
                  id="default-search"
                  className="block w-full max- p-2 text-sm text-white border-2 border-gray-800 rounded-lg bg-gray-800 focus:border-orange-300 outline-none"
                  placeholder="Tìm kiếm..."
                  onChange={(e) => handleSearch(e)}
                />
              </div>
            </form>
            {!!searchResult && (
              <div className="absolute top-full left-0 w-full bg-gray-700">
                <ul>
                  {searchResult.map((phim: Phim) => (
                    <li key={phim.maPhim} className="">
                      <a
                        className="flex text-white p-2 cursor-pointer"
                        onClick={() => {
                          const path = generatePath(PATH.phimDetail, {
                            id: phim.maPhim,
                          });
                          navigate(path);
                          handleResetInput();
                          setIsShowMenu(false);
                        }}>
                        <img
                          src={phim.hinhAnh}
                          alt={phim.biDanh}
                          className="md:w-16 w-9"
                        />
                        <p className="ms-2 text-[15px]">{phim.tenPhim}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex space-x-3 rtl:space-x-reverse">
            {user ? (
              <div className="flex items-center gap-10">
                <p className="text-white">{user.hoTen}</p>
                <Popover
                  content={
                    <div className="flex flex-col p-[12px] gap-10">
                      <Button
                        type="text"
                        onClick={() => {
                          navigate(PATH.profile);
                        }}>
                        Thông tin tài khoản
                      </Button>
                      <div>
                        <Divider className="my-2" />
                      </div>
                      <Button
                        type="text"
                        onClick={() => {
                          navigate(PATH.admin);
                        }}>
                        Trang quản Lý
                      </Button>
                      <div>
                        <Divider className="my-2" />
                      </div>
                      <Button
                        className="w-full"
                        danger
                        onClick={() =>
                          dispatch(quanLyNguoiDungActions.logOut())
                        }>
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
              <>
                <Button
                  type="text"
                  onClick={() => navigate(PATH.login)}
                  className="!text-white rounded-md border-2 border-orange-300 hover:!bg-orange-300 text-[12px] lg:text-[16px]"
                  size="large">
                  Đăng nhập
                </Button>
                <Button
                  type="text"
                  onClick={() => navigate(PATH.register)}
                  className="!text-white rounded-md border-2 border-orange-300 ms-2 hover:!bg-orange-300 text-[12px] lg:text-[16px]"
                  size="large">
                  Đăng ký
                </Button>
              </>
            )}
          </div>
        </div>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-white rounded-lg lg:hidden border-white border"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={() => {
            setIsShowMenu(!isshowMenu);
            handleResetInput();
          }}>
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              color="#F9AB00"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
