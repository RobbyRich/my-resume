import React, { useState, useEffect } from 'react';
import Skill from "../elements/Skill";
import gatewayApi from "../api/gatewayApi";

function Skills(props) {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const load = async () => {
            let response = await gatewayApi.getSkills();
            setSkills(response.result)
        }
        load()
    }, []);

    return (
        <section class="text-gray-800 body-font">
            <div class="flex flex-wrap sm:mb-2 -mx-2">
                {skills?.map((skill, index) =>
                    <Skill label={skill.name} key={index}>
                    </Skill>
                )}

            </div>
        </section>
    );
}

export default Skills;