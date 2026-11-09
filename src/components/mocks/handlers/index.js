import { http, HttpResponse } from 'msw';
import { students } from '../data/students';
import { groups } from '../data/groups';

export const handlers = [
  // 1. Endpoint dla /groups
  http.get('/groups', () => {
    return HttpResponse.json({ groups });
  }),

  // 2. Endpoint dla /students/:group
  http.get('/students/:group', ({ params }) => {
    const { group } = params;
    
    if (group) {
      const matchingStudents = students.filter(
        (student) => student.group === group
      );
      return HttpResponse.json({ students: matchingStudents });
    }
    
    return HttpResponse.json({ students });
  }),
];