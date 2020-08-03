import { useEffect, useState } from 'react';

import { IDepartment } from '../interfaces/patient';
import axios from 'axios';

async function getDepartments() {
  const result = await axios.get('./data/departments.json');
  return result.data as IDepartment[];
}

export function useGetDepartments(): [IDepartment[], React.Dispatch<any>] {
  const [departments, setDepartments] = useState<IDepartment[]>([]);

  useEffect(() => {
    getDepartments().then((data) => {
      setDepartments(data);
    });
  }, []);

  return [departments, setDepartments];
}
