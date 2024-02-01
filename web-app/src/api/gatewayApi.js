const apiClient = require("./apiClient");

const getExperiences = async () => {
    return await apiClient.get("experience")
}

const getProjects = async () => {
    return await apiClient.get("project")
}

const getSkills = async () => {
    return await apiClient.get("skill")
}

const sendContactRequest = async (contactDetails) => {
    return await apiClient.post("contact", contactDetails);
}

module.exports = {
    getExperiences,
    getProjects,
    getSkills,
    sendContactRequest
}