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

const getIcon = (skillName) => {
    let icon;
    switch (skillName) {
        case 'JavaScript': icon = DiJavascript1;
        case 'React': icon = FaReact;
        case 'Node': icon = FaNodeJs;
        case 'MongoDB': icon = SiMongodb;
        case 'AWS': icon = FaAws;
        case 'Docker': icon = FaDocker;
        case 'Go': icon = SiGo;
        case 'Material UI': icon = SiBootstrap;
        case 'Bootstrap': icon = SiBootstrap;
        case 'Tailwind': icon = SiTailwindcss;
        case 'Angular': icon = FaAngular;
        case 'jQuery': icon = SiJquery;
        case 'C#': icon = SiCsharp;
        case 'ASP .NET MVC': icon = DiDotnet;
        case 'SQL': icon = SiMysql;
        case 'Electron': icon = SiElectron;
        case 'WPF': icon = DiDotnet;
        case 'C++': icon = CgCPlusPlus;
        case 'VB': icon = FaCode;
        case 'WinForms': icon = SiWindowsxp;
        case 'Azure': icon = SiMicrosoftazure;
        case 'Ubuntu': icon = FaUbuntu;
        case 'Bash': icon = SiGnubash;
        case 'Windows': icon = SiWindows;
        case 'XSLT': icon = FaCode;
        case 'XML': icon = FaCode;
        case 'VoiceXML': icon = RiUserVoiceLine;
        case 'VS Code': icon = SiVisualstudiocode;
        case 'Visual Studio': icon = SiVisualstudio;
        case 'QuickBooks Online': icon = quickbooks;
        case 'NetSuite': icon = netsuite;
        case 'M-Files': icon = CgFileDocument;
        case 'Sage 100': icon = sage;
        case 'GravityForms': icon = AiOutlineForm;
        case 'QLingo': icon = FaPrint;
        case 'Pres': icon = FaPrint;
        case 'XMPie': icon = FaPrint;
        case 'Telerik': icon = FaCode;
    }
    return icon;
}

module.exports = {
    getIcon
}