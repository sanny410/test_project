export type ProjectId = string;
export type ProjectName = string;
export type ProjectCreatedAt = string;
export type ProjectUpdatedAt = string;

export interface Project {
    id: ProjectId;
    name: ProjectName;
    createdAt: ProjectCreatedAt;
    updatedAt: ProjectUpdatedAt;
}

export interface ProjectCreatingSummary {
    name: ProjectName;
}

export interface ProjectUpdatingSummary {
    id: ProjectId;
    name?: ProjectName;
}

export interface ProjectInfo {
    id: ProjectId;
    name: ProjectName;
    createdAt: ProjectCreatedAt;
    updatedAt: ProjectUpdatedAt;
}
