import '../styles/Code.css'
import Collapsible from 'react-collapsible';
import { BsChevronDown } from "react-icons/bs";
import { useState } from 'react';
import Scheduling from '../blog/Scheduling';
import React404 from '../blog/React';
import Wheel from '../blog/Wheel';

export default function Blog() {
    const [project, setProject] = useState({
        view: "",
    });


    return (
        <div className="Code">
            <div className="Explorer">
                <p>EXPLORER</p>
            </div>
            <div className="Codeview">
                <div className="Sidebar">
                    <Collapsible trigger={[<BsChevronDown />, <p>BLOG</p>]}>
                    <button className="File" onClick={() => {
                            setProject({
                                view: "wheel"
                            });
                        }}>Wheel.html</button>
                        <button className="File" onClick={() => {
                            setProject({
                                view: "scheduling"
                            });
                        }}>Scheduling.html</button>
                        <button className="File" onClick={() => {
                            setProject({
                                view: "react"
                            });
                        }}>React404.html</button>
                    </Collapsible>
                </div>
                <div className="Project-viewer">
                    {project.view === "scheduling" && <Scheduling />}
                    {project.view === "react" && <React404 />}
                    {project.view === "wheel" && <Wheel />}
                </div>
            </div>
            <div className="Credits">
                <p>This page is inspired by my favorite text editor (VS Code). 
                    It's still in progress :)
                </p>
            </div>
        </div>
    );
}

