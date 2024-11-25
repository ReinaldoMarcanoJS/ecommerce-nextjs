"use client";
import Link from "next/link";
import React from "react";
import { BiCategory } from "react-icons/bi";
import {} from "react-icons/hi";
import { IoIosAddCircleOutline, IoIosLogIn } from "react-icons/io";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaSellcast } from "react-icons/lia";
import { MdOutlineLocalOffer } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";

export const Navbar = () => {
  return (
    <header className="fixed top-0 container w-20 h-screen bg hover:w-48 ">
      <nav className="flex flex-col items-start  py-4 gap-6 h-full justify-between navbar">
        <div className="flex items-start justify-start w-full">
          <span className="span">
          <IoPersonOutline size={35} className="mb-2" />
          <Link href={"/login"} className="navbar-a">
              Iniciar sesion
            </Link>
          </span>
        </div>
        <div className="flex items-start justify-start flex-col  w-full ">
          <span className="span">
            <MdOutlineLocalOffer size={35}  />
            <Link href={"/login"} className="navbar-a">
              Ofertas
            </Link>
          </span>
          <span className="span">
          <IoIosAddCircleOutline size={35} />
          <Link href={"/login"} className="navbar-a">
              Publicar
            </Link>
          </span>
         <span className="span">
         <BiCategory size={35} />
          <Link href={"/login"} className="navbar-a">
              Categorias
            </Link>
         </span>
          <span className="span">
          <LiaSellcast size={35} />
          <Link href={"/login"} className="navbar-a">
              Vender
            </Link>
          </span>
          <span className="span">
          <TbPigMoney size={35} />
          <Link href={"/login"} className="navbar-a">
              Mis compras
            </Link>
          </span>
         <span className="span">
         <PiHandshake size={35} />
          <Link href={"/login"} className="navbar-a">
              Ayuda
            </Link>
         </span>
        </div>
        <div className="flex items-start justify-start w-full">
          <span className="span">
          <IoSettingsOutline size={35} />
          <Link href={"/login"} className="navbar-a">
              Configuracion
            </Link>
         </span>
        </div>
      </nav>
    </header>
  );
};
