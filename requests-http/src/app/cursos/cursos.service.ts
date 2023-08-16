import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API);
  }

  loadByID(id: any) {
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(curso: Curso) {
    return this.http.post(this.API, curso).pipe(take(1));
  }

  private update(curso: Curso) {
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  save(curso: Curso) {
    if (curso.id) {
      return this.update(curso);
    }

    return this.create(curso);
  }

  remove(id: any) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
