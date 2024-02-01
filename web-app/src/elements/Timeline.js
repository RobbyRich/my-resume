import TimelineEntry from './TimelineEntry.js'
import Skill from './Skill.js'
import gatewayApi from '../api/gatewayApi.js';
import { useEffect, useState } from 'react';


function Timeline(props) {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const load = async () => {
            let response = await gatewayApi.getExperiences();
            setExperiences(response.result);
        }
        load()
    }, [])

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-3 mx-auto flex flex-col items-center">
                <div class="flex flex-wrap w-full md:w-3/4 text-left">
                    <div class="w-full md:pr-10 md:py-6">
                        {experiences.map((experience, index) => {
                            return (<TimelineEntry year={experience.date} title={experience.title} company={experience.company} key={index}>
                                <ul class="list-disc md:p-6">
                                    {experience.highlights.map((highlight, index) => {
                                        return (
                                            <li class="leading-relaxed text-gray-800 text-sm p-2" key={index}>
                                                {highlight.description}
                                                <div class="text-xs flex flex-wrap w-full">
                                                    {highlight.skills.map((skill, index) => {
                                                        return (
                                                            <Skill class="p-2 w-32 h-10" size={20} label={skill} key={index} />
                                                        )
                                                    }
                                                    )}
                                                </div>
                                            </li>
                                        )
                                    }
                                    )}
                                </ul>
                            </TimelineEntry>)
                        }
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;