import '../style/App.css';
import Project from "../components/Portfolio/Project";
import {projects} from "../constants/projects.js";
import {Tab, Tabs} from "@mui/material";
import {useState} from "react";
import TabContainer from "../components/Portfolio/TabContainer";

const Portfolio = () => {
    const {web, mobile, embedded, ml, media, hmi_plc} = projects;
    const [value, setValue] = useState(0);

    function handleTabChange(event: any, value: number) {
        setValue(value);
    }

    return (
        <div className="Body">
            <div className="tab-bar">
                <Tabs centered
                      value={value}
                      textColor={'inherit'}
                      TabScrollButtonProps={{style: {color: '#fff'}}}
                      TabIndicatorProps={{style: {backgroundColor: '#fff'}}}
                      onChange={handleTabChange}>
                    <Tab className="tab" label="Web" />
                    <Tab className="tab" label="Mobile" />
                    <Tab className="tab" label="Embedded" />
                    <Tab className="tab" label="Machine Learning" />
                    <Tab className="tab" label="Multimedia" />
                    <Tab className="tab" label="HMI & PLC" />
                </Tabs>
            </div>
            <div>
            {value === 0 &&
                <TabContainer>
                    {web.map((project: any) =>
                        <Project key={project.title}
                                 project={project}
                                 projectType={"web"} />
                    )}
                </TabContainer>
            }
            {value === 1 &&
                <TabContainer>
                    {mobile.map((project: any) =>
                        <Project key={project.title} project={project} projectType={"mobile"} />
                    )}
                </TabContainer>
            }
            {value === 2 &&
                <TabContainer>
                    {embedded.map((project: any) =>
                        <Project key={project.title} project={project} projectType={"embedded"} />
                    )}
                </TabContainer>
            }
            {value === 3 &&
                <TabContainer>
                    {ml.map((project: any) =>
                        <Project key={project.title} project={project} projectType={"embedded"} />
                    )}
                </TabContainer>
            }
            {value === 4 &&
                <TabContainer>
                    {media.map((project: any) =>
                        <Project key={project.title} project={project} projectType={"media"} />
                    )}
                </TabContainer>
            }
            {value === 5 &&
                <TabContainer>
                    {hmi_plc.map((project: any) =>
                        <Project key={project.title} project={project} projectType={"media"} />
                    )}
                </TabContainer>
            }
            </div>
        </div>
    );
}

export default Portfolio;
