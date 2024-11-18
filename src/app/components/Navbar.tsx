"use client";
import Link from "next/link";
import React from "react";
import { BiCategory } from "react-icons/bi";
import {} from "react-icons/hi";
import { IoIosAddCircleOutline, IoIosLogIn } from "react-icons/io";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaSellcast } from "react-icons/lia";
import { PiHandshake } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";

export const Navbar = () => {
  return (
    <header className="absolute top-0 container w-20 h-screen bg hover:w-48 ">
      <nav className="flex flex-col items-start py-4 gap-6 h-full justify-between navbar">
        <div className="flex items-start justify-start w-full">
          <IoPersonOutline size={35} className="mb-2" />
        </div>
        <div className="flex items-start justify-start flex-col  gap-6 w-full ">
          <span>
            <IoIosLogIn size={35} className="min-h-9" />
            <Link href={"/login"} className="navbar-a">
              Iniciar sesion
            </Link>
          </span>
          <span>
          <IoIosAddCircleOutline size={35} />
          <Link href={"/login"} className="navbar-a">
              Publicar
            </Link>
          </span>
         <span>
         <BiCategory size={35} />
          <Link href={"/login"} className="navbar-a">
              Categorias
            </Link>
         </span>
          <span>
          <LiaSellcast size={35} />
          <Link href={"/login"} className="navbar-a">
              Vender
            </Link>
          </span>
          <span>
          <TbPigMoney size={35} />
          <Link href={"/login"} className="navbar-a">
              Mis compras
            </Link>
          </span>
         <span>
         <PiHandshake size={35} />
          <Link href={"/login"} className="navbar-a">
              Ayuda
            </Link>
         </span>
        </div>
        <div className="flex items-start justify-start w-full">
          <span>
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
