/**
 * Managing SANITY API 
 */

// Projects API 
export const getProjects = '*[_type == "project" && !(_id in path("drafts.**"))]';
export const getZoningProjects = '*[_type == "zoning"][0].projects[0...10]->{_id, title, cover, type, seo}';
export const getZoningHome = '*[_type == "zoning"][0].home[0...4]->{_id, title, cover, type, seo}';
export const getProjectsType = '*[_type == "project" && !(_id in path("drafts.**"))]{type}'

// Culture API
export const getCulture = '{"team":*[_type == "team"], "award": *[_type == "award"]}';

// Approach API 
export const getApproach = '{"tools":*[_type == "tools"]}'
