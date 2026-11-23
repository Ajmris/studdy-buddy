import { http, HttpResponse } from 'msw';
import { students } from '../data/students';
import { groups } from '../data/groups';

export const handlers = [
  http.get('/groups', () => {
    return HttpResponse.json({ groups }, { status: 200 });
  }),
  http.post('/students/search', async ({ request }) => {
    const body = await request.json();
    const searchPhrase = (body?.searchPhrase ?? '').trim().toLowerCase();
    const matchingStudents = searchPhrase
      ? students.filter((student) =>
          student.name.toLowerCase().includes(searchPhrase)
        )
      : [];
    return HttpResponse.json(
      {
        students: matchingStudents,
      },
      { status: 200 }
    );
  }),
  http.get('/students/:group', ({ params }) => {
    const { group } = params;
    if (group) {
      const matchingStudents = students.filter(
        (student) => student.group === group
      );
      return HttpResponse.json(
        {
          students: matchingStudents,
        },
        { status: 200 }
      );
    }
    return HttpResponse.json(
      {
        students,
      },
      { status: 200 }
    );
  }),
];