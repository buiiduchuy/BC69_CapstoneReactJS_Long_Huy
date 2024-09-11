import cn from "classnames";
import { styled } from "styled-components";
import { LoaiGhe } from "../../@types";
import { useState } from "react";

export const GheComponent = (props: any) => {
  const { ghe } = props;
  console.log("ghe: ", ghe);

  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Ghe
      className={cn("cursor-pointer", {
        daDat: ghe.daDat,
        gheThuong: ghe.loaiGhe === LoaiGhe.THUONG,
        gheVip: ghe.loaiGhe === LoaiGhe.VIP,
        active: isActive,
      })}
      onClick={() => setIsActive(!isActive)}>
      {ghe.tenGhe}
    </Ghe>
  );
};

// style
const Ghe = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 6px;
  &.gheThuong {
    background: #111;
  }
  &.gheVip {
    background: green;
  }
  &.active {
    background: #fb923c;
  }
`;
