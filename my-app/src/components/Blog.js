import '../styles/Code.css'
import Collapsible from 'react-collapsible';
import { BsChevronDown } from "react-icons/bs";
import { useState } from 'react';
import Scheduling from '../blog/Scheduling';
import React404 from '../blog/React';
import Wheel from '../blog/Wheel';
import Vaccines from '../blog/Vaccines';
import ReadingLog from '../blog/ReadingLog';
import Shrew from '../blog/Shrew';

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
                        {/* <button className="File" onClick={() => {
                            setProject("scheduling");
                            tabs.push("scheduling.txt");
                        }}><p>Scheduling.txt</p></button> */}
                        <button className="File" onClick={() => {
                            setProject("react");
                            tabs.push("react.txt");
                        }}><p>React404.txt</p></button>
                        <button className="File" onClick={() => {
                            setProject("shrew");
                            tabs.push("shrew.txt");
                        }}><p>Shrew.txt</p></button>
                    </Collapsible>
                    <Collapsible trigger={[<BsChevronDown />, <p>RECIPES</p>]}>
                        <button className="File" onClick={() => {
                            setProject("ragu.txt");
                        }}><p>ragu.txt</p></button>
                    </Collapsible>
                    <Collapsible trigger={[<BsChevronDown />, <p>READING LIST</p>]}>
                        <button className="File" onClick={() => {
                            setProject("reading-log");
                            tabs.push("reading-log.txt");
                        }}><p>reading-log.txt</p></button>
                    </Collapsible>
                </div>
                <div className="Project-viewer">
                    {project === "scheduling" && <Scheduling />}
                    {project === "react" && <React404 />}
                    {project === "wheel" && <Wheel />}
                    {project === "vaccines" && <Vaccines />}
                    {project === "reading-log" && <ReadingLog />}
                    {project === "shrew" && <Shrew />}
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

