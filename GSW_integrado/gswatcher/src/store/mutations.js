export const SET_PROJECTS = (state, projects) => {
    state.projects = projects;
}
export const SET_PROJECT = (state, project) => {
    state.project = project;
}
export const SET_DEVPROJECTS = (state, devProjects) => {
    state.devProjects = devProjects;
}
export const SET_DEVPROJECTS_UNFINISHED = (state, unfinishedDevProjects) => {
    state.unfinishedDevProjects = unfinishedDevProjects;
}
export const SET_DEVELOPERS = (state, developers) => {
    state.developers = developers;
}
export const SET_PROJECTSBYDEV = (state, projectByDeveloper) => {
    state.projectByDeveloper = projectByDeveloper;
}
export const SET_COMPLTASKS = (state, compltask) => {
    state.compltask = compltask;
}