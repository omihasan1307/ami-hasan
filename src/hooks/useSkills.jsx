import { useEffect, useState } from "react";

const useSkills = () => {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkill(data));
  }, []);
  return [skill];
};

export default useSkills;
