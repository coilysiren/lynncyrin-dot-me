export interface IPostMeta {
  title: string;
  description: string;
  path: string;
}

export const postMetaData: IPostMeta[] = [
  {
    title: "Heroku + Django Pipeline + Ruby Sass",
    description: "Getting django pipeline to use the ruby sass compiler on heroku",
    path: "heroku-django-pipeline-sass"
  },
  {
    title: "Web Developer Toolkit",
    description: "A list of all the tools I use for web development, with links and descriptions",
    path: "web-developer-toolkit"
  },
  {
    title: "Software Development for Adults: Updating Production",
    description: "Updating software is serious business",
    path: "software-dev-for-adults"
  },
  {
    title: "Social Combat Rules of Engagement",
    description: "On keeping your balance while you work towards creating a more just world",
    path: "social-combat-rules-of-engagement"
  },
  {
    title: "Origin Story",
    description: "My developer origin story, filled with peril! and strife!",
    path: "origin-story"
  }
];

export const pathKeyedPosts: Map<string, IPostMeta> = new Map(postMetaData.map(
  (data: IPostMeta): [string, IPostMeta] => [data.path, data]
));
