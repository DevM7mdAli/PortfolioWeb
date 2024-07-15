import InfoPart from "./InfoPart";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from '../../firebase'
import Loading from "../Loading";

export default function ProjectCard() {
  const [dataProject, setDataProject] = useState([]);
  const [finishLoad, setFinishLoad] = useState(false);

  const fetchData = async () => {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "Projects"));
    const projects = []
    querySnapshot.forEach((doc) => {
      projects.push(doc.data());
    });
    setDataProject(projects);
    setFinishLoad(true)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="projects">
      <div className='flex flex-col gap-y-9 text-center'>
        <h1 className="text-5xl font-bold">
          Projects I worked on
        </h1>

        {
          finishLoad ?
            <div className='flex flex-row justify-center flex-wrap gap-x-12 gap-y-10'>
              {dataProject.map((project, index) => (
                <InfoPart img={project.img} tag={project.tag} name={project.name} info={project.about} object={project.object} link={project.link} index={index} />
              ))}
            </div> :

            <div className="flex flex-row justify-center items-center flex-wrap ">
              <Loading />
            </div>
        }
      </div>
    </section>
  )
}