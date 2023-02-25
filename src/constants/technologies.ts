import { TechnologiesType } from "@/types/technologies"
import { nanoid } from "nanoid"

export const technologies: TechnologiesType = Object.create(null);
technologies.nextjs = {
  id: nanoid(),
  displayName: 'NextJs',
  imageSrc: '/assets/NextJs.png'
};
technologies.reactjs = {
  id: nanoid(),
  displayName: 'ReactJs',
  imageSrc: '/assets/react.png'
};
technologies.js = {
  id: nanoid(),
  displayName: 'JavaScript',
  imageSrc: '/assets/javascript.png'
};
technologies.htmlCss = {
  id: nanoid(),
  displayName: 'HTML/CSS',
  imageSrc: '/assets/html-5.svg'
};
technologies.node = {
  id: nanoid(),
  displayName: 'NodeJs',
  imageSrc: '/assets/node.png'
};
technologies.mongo = {
  id: nanoid(),
  displayName: 'Mongo',
  imageSrc: '/assets/mongodb.png'
};
technologies.python = {
  id: nanoid(),
  displayName: 'Python',
  imageSrc: '/assets/python.png'
};
technologies.tailwind = {
  id: nanoid(),
  displayName: 'Tailwind',
  imageSrc: '/assets/tailwind.png'
};
technologies.html = {
  id: nanoid(),
  displayName: 'HTML 5',
  imageSrc: '/assets/html-5.svg'
};
technologies.css = {
  id: nanoid(),
  displayName: 'CSS 3',
  imageSrc: '/assets/css3.svg'
};
technologies.java = {
  id: nanoid(),
  displayName: 'Java',
  imageSrc: '/assets/java.png'
};