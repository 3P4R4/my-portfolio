import { Github } from "../assets/Github";
import { Linkeding } from "../assets/Linkeding";
import { Stackoverflow } from "../assets/Stackoverflow";

export const Footer=()=>{
    return(
        <footer className="container mx-auto flex justify-center flex-col items-center h-60 gap-10">
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href='#'>
                <Stackoverflow/>
              </a>
            </li>
            <li>
              <a href='#'>
                <Linkeding />
              </a>
            </li>
            <li>
              <a href='#'>
                <Github/>
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-sm text-slate-500">&copy; 2022 Lenin Mendoza. All rights reserved.</p>
      </footer> 
    )
}