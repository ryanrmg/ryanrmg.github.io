import '../styles/Code.css'
import Collapsible from 'react-collapsible';
import { BsChevronDown } from "react-icons/bs";
import { useState } from 'react';
import Scheduling from '../blog/Scheduling';
import React404 from '../blog/React';
import Wheel from '../blog/Wheel';
import Vaccines from '../blog/Vaccines';

export default function Blog() {
    const [project, setProject] = useState('');

    const [tabs, setTabs] = useState([]);


    return (
        <div className="Code">
            <div className="Explorer">
                <p>EXPLORER</p>
            </div>
            <div className="Codeview">
                <div className="Sidebar">
                    <Collapsible trigger={[<BsChevronDown />, <p>BLOG</p>]}>
                    <button className="File" onClick={() => {
                            setProject("wheel");
                            tabs.push("wheel.txt");
                        }}><p>Wheel.txt</p></button>
                        <button className="File" onClick={() => {
                            setProject("scheduling");
                            tabs.push("scheduling.txt");
                        }}><p>Scheduling.txt</p></button>
                        <button className="File" onClick={() => {
                            setProject("react");
                            tabs.push("react.txt");
                        }}><p>React404.txt</p></button>
                        {/* <button className="File" onClick={() => {
                            setProject("vaccines");
                            tabs.push("vaccines.txt");
                        }}>Vaccines.txt</button> */}
                    </Collapsible>
                    <Collapsible trigger={[<BsChevronDown />, <p>RECIPES</p>]}>

                    </Collapsible>
                </div>
                <div className="Project-viewer">
                    {project === "scheduling" && <Scheduling />}
                    {project === "react" && <React404 />}
                    {project === "wheel" && <Wheel />}
                    {project === "vaccines" && <Vaccines />}
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

