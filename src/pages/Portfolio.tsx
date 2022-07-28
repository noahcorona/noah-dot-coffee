import '../style/App.css';
import '../style/Portfolio.css';
import Project from "../components/Portfolio/Project";
import {projects} from "../constants/projects.js";
import {Tab, Tabs} from "@mui/material";
import {useState} from "react";
import TabContainer from "../components/Portfolio/TabContainer";

const Portfolio = () => {
    const {web, mobile, embedded, ml, media} = projects;
    const [value, setValue] = useState(0);

    function handleTabChange(event: any, value: number) {
        setValue(value);
    }

    return (
        <div className="Body">
            <Tabs value={value}
                  textColor={'inherit'}
                  TabScrollButtonProps={{style: {color: '#fff'}}}
                  TabIndicatorProps={{style: {backgroundColor: '#fff'}}}
                  centered
                  onChange={handleTabChange}>
                <Tab classes="tab" label="Web" />
                <Tab classes="tab" label="Mobile Apps" />
                <Tab classes="tab" label="Embedded Systems" />
                <Tab classes="tab" label="Machine Learning" />
                <Tab classes="tab" label="Media Processing" />
            </Tabs>
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
        </div>
    );
}

export default Portfolio;
