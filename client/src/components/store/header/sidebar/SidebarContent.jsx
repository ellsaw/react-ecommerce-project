import { useState } from "react";
import SidebarNavItem from "./SidebarNavItem.jsx";
import { Link } from "react-router";

export default function SidebarContent({ close }) {
  const [path, setPath] = useState(null);

  const navigationHandlers = {
    goBack(){
        setPath(null);
    },
    redirect(location){
        setPath(location)
    }
  };

  return (
    <>
      <div className="flex [&_button]:h-12 *:flex *:items-center py-golden-lg px-golden-md bg-black text-white border-b-4 border-primary">
        <div className="flex-1 justify-normal">
          {!path ? (
            <h2 className="font-bold pl-golden-md tracking-wide">Huvudmeny</h2>
          ) : (
            <button className="cursor-pointer" aria-label="Gå tillbaka" onClick={navigationHandlers.goBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 56 56"><path fill="currentColor" d="M6.238 28c0 .586.258 1.125.727 1.57l15.562 15.54c.492.445.985.656 1.524.656c1.172 0 2.062-.844 2.062-2.016c0-.562-.21-1.125-.586-1.477l-5.226-5.343l-7.922-7.196l5.695.352H47.7c1.219 0 2.063-.867 2.063-2.086s-.844-2.086-2.063-2.086H18.074l-5.672.352l7.899-7.196l5.226-5.343c.399-.376.586-.915.586-1.477c0-1.172-.89-2.016-2.062-2.016c-.54 0-1.055.188-1.57.704L6.964 26.43c-.469.445-.727.984-.727 1.57"/></svg>
            </button>
          )}
        </div>
        <div className="flex-1 justify-center">
            {path && <h2 className="font-bold tracking-wide text-nowrap text-center">{path}</h2>}
        </div>
        <div className="flex-1 justify-end">
          <button
            className="cursor-pointer"
            aria-label="Stäng sidebar"
            onClick={close}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav className="flex flex-col font-semibold px-golden-lg gap-golden-lg py-golden-lg *:flex *:justify-between *:items-center *:cursor-pointer *:hover:bg-neutral-200 *:px-golden-md *:py-golden-lg *:rounded-sm">
        {!path ? 
            <>
              <SidebarNavItem type="button" label="Spel" href={navigationHandlers.redirect}/>
              <SidebarNavItem type="button" label="Konsoller" href={navigationHandlers.redirect}/>
              <SidebarNavItem type="button" label="PC" href={navigationHandlers.redirect}/>
              <SidebarNavItem type="button" label="TV, Ljud & Bild" href={navigationHandlers.redirect}/>
              <SidebarNavItem type="button" label="Hobby" href={navigationHandlers.redirect}/>
            </>
            : path === "Spel" ? 
            <>
              <SidebarNavItem type="link" href="/spel-till-xbox" label="Xbox"/>
              <SidebarNavItem type="link" href="/spel-till-playstation" label="Playstation"/>
              <SidebarNavItem type="link" href="/spel-till-nintendo" label="Nintendo"/>
              <SidebarNavItem type="link" href="/spel-till-pc" label="Spel till PC"/>
              <SidebarNavItem type="link" href="/retrospel" label="Retro"/>
              <SidebarNavItem type="link" href="/kort-and-bradspel" label="Kort & Brädspel"/>
              <Link className="font-normal outline-1 outline-black justify-center! py-golden-md!" to="/kategori/spel">Alla Spel</Link>
            </>
            : path === "Konsoller" ?
            <>
              <SidebarNavItem type="link" href="/xbox" label="Xbox"/>
              <SidebarNavItem type="link" href="/playstation" label="Playstation"/>
              <SidebarNavItem type="link" href="/nintendo" label="Nintendo"/>
              <SidebarNavItem type="link" href="/retro" label="Retro"/>
              <Link className="font-normal outline-1 outline-black justify-center! py-golden-md!" to="/kategori/konsoller">Alla Konsoller</Link>
            </>
            : path === "PC" ? 
            <>
             <SidebarNavItem type="link" href="/kompletta-datorer" label="Kompletta Datorer"/> 
             <SidebarNavItem type="link" href="/processorer-cpu" label="Processorer / CPU"/> 
             <SidebarNavItem type="link" href="/grafikkort-gpu" label="Grafikkort / GPU"/> 
             <SidebarNavItem type="link" href="/moderkort" label="Moderkort"/> 
             <SidebarNavItem type="link" href="/lagring" label="Lagring"/> 
             <SidebarNavItem type="link" href="/minne-ram" label="Minne / RAM"/> 
             <SidebarNavItem type="link" href="/chassi" label="Chassi"/> 
             <SidebarNavItem type="link" href="/nataggregat-psu" label="Nätaggregat / PSU"/> 
             <SidebarNavItem type="link" href="/ovrigt" label="Övrigt"/>
             <Link className="font-normal outline-1 outline-black justify-center! py-golden-md!" to="/kategori/pc">Allt om PC</Link> 
            </>
            : path === "TV, Ljud & Bild" ?
            <>
              <SidebarNavItem type="link" href="/tv" label="TV"/> 
              <SidebarNavItem type="link" href="/bildskarmar" label="Bildskärmar"/> 
              <SidebarNavItem type="link" href="/horlurar" label="Hörlurar"/> 
              <SidebarNavItem type="link" href="/headsets" label="Headsets"/> 
              <SidebarNavItem type="link" href="/kablar-and-kontakter" label="Kablar & Kontakter"/> 
              <Link className="font-normal outline-1 outline-black justify-center! py-golden-md!" to="/kategori/tv-ljud-and-bild">Allt om TV, Ljud & Bild</Link> 
            </>
            : path === "Hobby" ?
            <>
              <SidebarNavItem type="link" href="/lego" label="LEGO"/> 
              <SidebarNavItem type="link" href="/samlarkort" label="Samlarkort"/> 
              <SidebarNavItem type="link" href="/samlarprylar" label="Samlarprylar"/> 
              <SidebarNavItem type="link" href="/leksaker" label="Leksaker"/> 
              <Link className="font-normal outline-1 outline-black justify-center! py-golden-md!" to="/kategori/hobby">Allt om Hobby</Link> 
            </>
            : null
            } 
      </nav>
    </>
  );
}
