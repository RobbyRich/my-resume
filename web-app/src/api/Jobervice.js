import { FaUbuntu, FaAngular, FaReact, FaHtml5, FaCode, FaPrint, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa'
import { DiJavascript1, DiDotnet } from 'react-icons/di'
import { AiOutlineForm } from 'react-icons/ai'
import { RiUserVoiceLine } from 'react-icons/ri'
import { CgCPlusPlus, CgFileDocument } from 'react-icons/cg'
import { ReactComponent as quickbooks } from '../img/quickbooks.svg'
import { ReactComponent as netsuite } from '../img/netsuite.svg'
import { ReactComponent as sage } from '../img/Sage.svg'
import { SiGo, SiMongodb } from "react-icons/si";
import { SiWindowsxp, SiWindows, SiGnubash, SiVisualstudio, SiVisualstudiocode, SiMysql, SiCsharp, SiElectron, SiMicrosoftazure, SiJquery, SiBootstrap, SiTailwindcss } from 'react-icons/si'

class JobService {
    constructor() {
        this.GetAllSkills = this.GetAllSkills.bind(this);
        this.GetExperience = this.GetExperience.bind(this);
        this.GetProjects = this.GetProjects.bind(this);

        this.skillList = [
            { label: 'JavaScript', ReactIcon: DiJavascript1 },
            { label: 'React', ReactIcon: FaReact },
            { label: 'Node', ReactIcon: FaNodeJs },
            { label: 'MongoDB', ReactIcon: SiMongodb },
            { label: 'AWS', ReactIcon: FaAws },
            { label: 'Docker', ReactIcon: FaDocker },
            { label: 'Go', ReactIcon: SiGo },
            { label: 'Material UI', ReactIcon: SiBootstrap  },
            { label: 'Bootstrap', ReactIcon: SiBootstrap },
            { label: 'Tailwind', ReactIcon: SiTailwindcss },
            { label: 'Angular', ReactIcon: FaAngular },
            { label: 'jQuery', ReactIcon: SiJquery },

            { label: 'C#', ReactIcon: SiCsharp },
            { label: 'ASP .NET MVC', ReactIcon: DiDotnet },
            { label: 'SQL', ReactIcon: SiMysql },
            { label: 'Electron', ReactIcon: SiElectron },
            { label: 'WPF', ReactIcon: DiDotnet },
            { label: 'C++', ReactIcon: CgCPlusPlus },
            { label: 'VB', ReactIcon: FaCode },

            { label: 'WinForms', ReactIcon: SiWindowsxp },

            { label: 'Azure', ReactIcon: SiMicrosoftazure },

            { label: 'Ubuntu', ReactIcon: FaUbuntu },
            { label: 'Bash', ReactIcon: SiGnubash },
            { label: 'Windows', ReactIcon: SiWindows },

            { label: 'XSLT', ReactIcon: FaCode },
            { label: 'XML', ReactIcon: FaCode },
            { label: 'VoiceXML', ReactIcon: RiUserVoiceLine },

            { label: 'VS Code', ReactIcon: SiVisualstudiocode },
            { label: 'Visual Studio', ReactIcon: SiVisualstudio },



            { label: 'QuickBooks Online', ReactIcon: quickbooks },
            { label: 'NetSuite', ReactIcon: netsuite },
            { label: 'M-Files', ReactIcon: CgFileDocument },
            { label: 'Sage 100', ReactIcon: sage },
            { label: 'GravityForms', ReactIcon: AiOutlineForm },

            { label: 'QLingo', ReactIcon: FaPrint },
            { label: 'Pres', ReactIcon: FaPrint },
            { label: 'XMPie', ReactIcon: FaPrint },
            { label: 'Telerik', ReactIcon: FaCode }
        ];

        this.experience = [
            {
                company: 'Spotter Global',
                date: 'Now',
                title: 'Senior Software Engineer/Team Lead',
                project: [
                    {
                        description: 'Designed and developed a web application that harvests data from deployed radar systems and displays the resulting information in a customizable dashboard. The application displays radar health via charts, overhead maps that show target movement over time, and target snapshots with object classification.',
                        skills: [
                            { label: 'JavaScript', ReactIcon: DiJavascript1 },
                            { label: 'React', ReactIcon: FaReact },
                            { label: 'Node', ReactIcon: FaNodeJs },
                            { label: 'MongoDB', ReactIcon: SiMongodb },
                            { label: 'Docker', ReactIcon: FaDocker },
                        ]
                    },
                    {
                        description: 'Created the AWS infrastructure used to deploy and host the aforementioned web application.',
                        skills: [
                            { label: 'AWS', ReactIcon: FaAws },
                        ]
                    },
                    {
                        description: 'Updated and enhanced a security control center application deployed to a small hardware device.',
                        skills: [
                            { label: 'Angular', ReactIcon: FaAngular },
                            { label: 'Go', ReactIcon: SiGo },
                            { label: 'SQL', ReactIcon: SiMysql },
                        ]
                    }

                ]
            },
            {
                company: 'Deloitte',
                date: '2021',
                title: 'Senior Software Engineer/Team Lead',
                project: [
                    {
                        description: 'Overseeing the architecture, development, and deployment of the application that handles all purchase requests for the US Marine Corps.',
                        skills: [
                            { label: 'C#', ReactIcon: SiCsharp },
                            { label: 'ASP .NET', ReactIcon: DiDotnet },
                            { label: 'SQL', ReactIcon: SiMysql },
                            { label: 'jQuery', ReactIcon: SiJquery },
                            { label: 'Bootstrap', ReactIcon: SiBootstrap }
                        ]
                    },
                    {
                        description: ' Responsible for conducting code reviews, performance reviews, and interviewing prospective employees.',
                        skills: []
                    }
                ]
            },
            {
                company: 'Huntington Ingalls',
                date: '2019',
                title: 'Senior Software Engineer/Team Lead',
                project: [
                    {
                        description: 'Developed an application used by instructional designers to host workshops for designing test questions administered to healthcare providers for military veterans.',
                        skills: [
                            { label: 'JavaScript', ReactIcon: DiJavascript1 },
                            { label: 'React', ReactIcon: FaReact },
                            { label: 'Node', ReactIcon: FaNodeJs },
                            { label: 'Docker', ReactIcon: FaDocker },
                            { label: 'SQL', ReactIcon: SiMysql }
                        ]
                    },
                    {
                        description: 'Created an application that was deployed to an instructors workstation at a naval base that is used to create VR-based training simulation scenarios.',
                        skills: [
                            { label: 'JavaScript', ReactIcon: DiJavascript1 },
                            { label: 'Node', ReactIcon: FaNodeJs },
                            { label: 'Electron', ReactIcon: SiElectron },
                            { label: 'SQL', ReactIcon: SiMysql }
                        ]
                    }
                ]
            },
            {
                company: 'Seidr/CommunityCentric',
                date: '2018',
                title: 'Software Development Manager',
                project: [
                    {
                        description: 'Designed and developed workflow connectors to synchronize data between QuickBooks, M-Files, NetSuite, and GravityForms.',
                        skills: [
                            { label: 'C#', ReactIcon: SiCsharp },
                            { label: 'ASP .NET', ReactIcon: DiDotnet },
                            { label: 'Bootstrap', ReactIcon: SiBootstrap },
                            { label: 'jQuery', ReactIcon: SiJquery },
                            { label: 'SQL', ReactIcon: SiMysql }
                        ]
                    },
                    {
                        description: 'Developed a web front-end to display bank statements from QuickBooks in M-Files document management software.',
                        skills: [
                            { label: 'JavaScript', ReactIcon: DiJavascript1 },
                            { label: 'Bootstrap', ReactIcon: SiBootstrap },
                            { label: 'HTML', ReactIcon: FaHtml5 }
                        ]
                    },
                    {
                        description: 'Developed and maintained a desktop application that allows you to create and edit scripts used to generate print-ready PostScript charts.',
                        skills: [
                            { label: 'C#', ReactIcon: SiCsharp },
                            { label: 'WPF', ReactIcon: DiDotnet },
                            { label: 'SQL', ReactIcon: SiMysql }
                        ]
                    },
                    {
                        description: 'Hired, mentored, and trained new employees.',
                        skills: []
                    },
                    {
                        description: 'Created and updated XSLT templates to output financial data into a text file with special formatting sent to a publishing engine to render Mutual Fund FactSheets.',
                        skills: [
                            { label: 'C#', ReactIcon: SiCsharp },
                            { label: 'XSLT', ReactIcon: FaCode },
                            { label: 'XML', ReactIcon: FaCode }
                        ]
                    },
                    {
                        description: 'Setup and maintained the organization’s network infrastructure in Azure. This included setting up web servers, load balancers, disaster recovery, and automated backups.',
                        skills: [
                            { label: 'Azure', ReactIcon: SiMicrosoftazure }
                        ]
                    }
                ]
            },
            {
                company: '3PV',
                date: '2009',
                title: 'Software Developer',
                project: [
                    {
                        description: 'Maintained and enhanced an IVR application that automated the third party verification process for digital phone subscribers.',
                        skills: [
                            { label: 'C#', ReactIcon: SiCsharp },
                            { label: 'ASP .NET', ReactIcon: DiDotnet },
                            { label: 'VoiceXML', ReactIcon: RiUserVoiceLine },
                            { label: 'SQL', ReactIcon: SiMysql }
                        ]
                    }
                ]
            },
            {
                company: 'Earthlink',
                date: '2007',
                title: 'Software Developer',
                project: [
                    {
                        description: 'Updated and maintained the antispyware SDK used to detect, quarantine, and remove spyware.',
                        skills: [
                            { label: 'C++', ReactIcon: CgCPlusPlus }
                        ]
                    },
                    {
                        description: 'Created a cross-platform application to display and search an encrypted spyware definition file.',
                        skills: [
                            { label: 'C++', ReactIcon: CgCPlusPlus }
                        ]
                    },
                    {
                        description: 'Supported and enhance spyware analysis tools used to examine spyware variants and their behaviors.',
                        skills: [
                            { label: 'C#', ReactIcon: SiCsharp },
                            { label: 'WinForms', ReactIcon: SiWindowsxp },
                            { label: 'SQL', ReactIcon: SiMysql }
                        ]
                    }
                ]
            },
            {
                company: 'DME',
                date: '2005',
                title: 'Software Developer',
                project: [
                    {
                        description: ' Created scripts used to generate PostScript with custom marketing content.',
                        skills: [
                            { label: 'QLingo', ReactIcon: FaPrint },
                            { label: 'Pres', ReactIcon: FaPrint },
                            { label: 'XMPie', ReactIcon: FaPrint }
                        ]
                    }
                ]
            }
        ];

        this.projects = [
            {
                title: 'This site',
                description: 'I created this website to illustrate my experience.',
                skills: [
                    { label: 'JavaScript', ReactIcon: DiJavascript1 },
                    { label: 'React', ReactIcon: FaReact },
                    { label: 'AWS', ReactIcon: FaAws },
                    { label: 'Tailwind', ReactIcon: SiTailwindcss }
                ]
            }
            ,
            {
                title: 'Robbie',
                description: 'Created to present during career day at my daughter’s school to greet students by name.',
                skills: [
                    { label: 'Angular', ReactIcon: FaAngular },
                    { label: 'Node', ReactIcon: FaNodeJs },
                    { label: 'Bootstrap', ReactIcon: SiBootstrap }
                ]
            }
        ];
    }

    GetAllSkills() {
        return this.skillList;
    }
    GetExperience() {
        return this.experience;
    }
    GetProjects() {
        return this.projects;
    }
}

export default JobService;