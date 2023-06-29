import '../styles/Code.css'
import Collapsible from 'react-collapsible';
import { BsChevronDown } from "react-icons/bs";
import { useState } from 'react';
import Scheduling from '../blog/Scheduling';

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
                                view: "scheduling"
                            });
                        }}>Scheduling.html</button>
                    </Collapsible>
                </div>
                <div className="Project-viewer">
                    {project.view === "scheduling" && <Scheduling />}
                </div>
            </div>
            <div className="Credits">
                <p>This page is inspired by my favorite text editor (VS Code)</p>
            </div>
        </div>
    );
}

